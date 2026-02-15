import { app, BrowserWindow } from "electron";
import path from "path";
import { ipcMain } from "electron";
import { db } from "./database";


ipcMain.handle("save-bill", (_, payload) => {
  const { customer, items, paymentMethod } = payload;

  // 1. Save customer
  const customerStmt = db.prepare(`
    INSERT INTO customers (name, mail, phone, ref)
    VALUES (?, ?, ?, ?)
  `);

  const customerResult = customerStmt.run(
    customer.name,
    customer.mail,
    customer.phone,
    customer.ref
  );

  const customerId = customerResult.lastInsertRowid;

  // 2. Save bill
  const total = items.reduce(
    (sum: number, item: any) =>
      sum + item.quantity * item.rate,
    0
  );

  const billStmt = db.prepare(`
    INSERT INTO bills (customer_id, bill_number, total, created_at)
    VALUES (?, ?, ?, ?)
  `);

  const billNumber = "INV-" + Date.now();

  const billResult = billStmt.run(
    customerId,
    billNumber,
    total,
    new Date().toISOString()
  );

  const billId = billResult.lastInsertRowid;

  // 3. Save items
  const itemStmt = db.prepare(`
    INSERT INTO bill_items
    (bill_id, service, quantity, paper, page, rate, note)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  for (const item of items) {
    itemStmt.run(
      billId,
      item.service,
      item.quantity,
      item.paper,
      item.page,
      item.rate,
      item.note
    );
  }

  // 4. Save payment
  db.prepare(`
    INSERT INTO payments (bill_id, method, amount)
    VALUES (?, ?, ?)
  `).run(billId, paymentMethod, total);

  return { success: true, billNumber };
});

ipcMain.handle("get-bills", () => {
  return db.prepare(`
    SELECT
      bills.id,
      bills.bill_number,
      bills.total,
      bills.created_at,
      customers.name,
      customers.phone
    FROM bills
    JOIN customers ON customers.id = bills.customer_id
    ORDER BY bills.id DESC
  `).all();
});

ipcMain.handle("get-bill-details", (_, billId: number) => {
  type BillRow = {
    id: number;
    customer_id: number;
    bill_number: string;
    total: number;
    created_at: string;
  };

  const stmt = db.prepare(`
    SELECT * FROM bills WHERE id = ?
  `);

  const bill = stmt.get(billId) as BillRow | undefined;

  if (!bill) {
    return null;
  }

  const items = db
    .prepare(`SELECT * FROM bill_items WHERE bill_id = ?`)
    .all(billId);

  const customer = db
    .prepare(`SELECT * FROM customers WHERE id = ?`)
    .get(bill.customer_id);

  return { bill, items, customer };
});

let mainWindow: BrowserWindow;

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
          preload: path.join(__dirname, "preload.js"),
          contextIsolation: true,
          nodeIntegration: false,
        },
      });
      

  mainWindow.loadURL("http://localhost:3000");
}
app.whenReady().then(async () => {
    // Load DB AFTER app ready
    await import("./database");
  
    createWindow();
  });
 