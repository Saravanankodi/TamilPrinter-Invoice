import Database from "better-sqlite3";
import path from "path";
import { app } from "electron";

// Database file location
const dbPath = path.join(app.getPath("userData"), "printout.db");

// Create database
export const db = new Database(dbPath);

console.log("Database created at:", dbPath);

// Create tables
db.exec(`
CREATE TABLE IF NOT EXISTS customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  mail TEXT,
  phone TEXT,
  ref TEXT
);

CREATE TABLE IF NOT EXISTS bills (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER,
  bill_number TEXT,
  total REAL,
  created_at TEXT
);

CREATE TABLE IF NOT EXISTS bill_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bill_id INTEGER,
  service TEXT,
  quantity INTEGER,
  paper INTEGER,
  page INTEGER,
  rate REAL,
  note TEXT
);

CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  bill_id INTEGER,
  method TEXT,
  amount REAL
);
`);
