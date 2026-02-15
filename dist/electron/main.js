"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
const electron_2 = require("electron");
const database_1 = require("./database");
electron_2.ipcMain.handle("save-bill", (_, payload) => {
    const { customer, items, paymentMethod } = payload;
    // 1. Save customer
    const customerStmt = database_1.db.prepare(`
    INSERT INTO customers (name, mail, phone, ref)
    VALUES (?, ?, ?, ?)
  `);
    const customerResult = customerStmt.run(customer.name, customer.mail, customer.phone, customer.ref);
    const customerId = customerResult.lastInsertRowid;
    // 2. Save bill
    const total = items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
    const billStmt = database_1.db.prepare(`
    INSERT INTO bills (customer_id, bill_number, total, created_at)
    VALUES (?, ?, ?, ?)
  `);
    const billNumber = "INV-" + Date.now();
    const billResult = billStmt.run(customerId, billNumber, total, new Date().toISOString());
    const billId = billResult.lastInsertRowid;
    // 3. Save items
    const itemStmt = database_1.db.prepare(`
    INSERT INTO bill_items
    (bill_id, service, quantity, paper, page, rate, note)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
    for (const item of items) {
        itemStmt.run(billId, item.service, item.quantity, item.paper, item.page, item.rate, item.note);
    }
    // 4. Save payment
    database_1.db.prepare(`
    INSERT INTO payments (bill_id, method, amount)
    VALUES (?, ?, ?)
  `).run(billId, paymentMethod, total);
    return { success: true, billNumber };
});
let mainWindow;
function createWindow() {
    const mainWindow = new electron_1.BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path_1.default.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });
    mainWindow.loadURL("http://localhost:3000");
}
electron_1.app.whenReady().then(async () => {
    // Load DB AFTER app ready
    await Promise.resolve().then(() => __importStar(require("./database")));
    createWindow();
});
