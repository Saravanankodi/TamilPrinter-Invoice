"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function InvoicePage() {
  const params = useParams();
  const id = Number(params.id);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!window.api) return;

    window.api.getBillDetails(id).then(setData);
  }, [id]);

  if (!data) return <p>Loading...</p>;

  const { bill, customer, items } = data;

  return (
    <div className="p-6">
      <h1>Invoice {bill.bill_number}</h1>

      <h2>Customer</h2>
      <p>{customer.name}</p>
      <p>{customer.phone}</p>

      <h2>Items</h2>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Qty</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it: any) => (
            <tr key={it.id}>
              <td>{it.service}</td>
              <td>{it.quantity}</td>
              <td>{it.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: {bill.total}</h3>
    </div>
  );
}
