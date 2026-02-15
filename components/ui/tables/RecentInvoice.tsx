"use client";
import Button from "@/components/base/Button";
import Table from "@/components/layout/Table";
import { Bill } from "@/types";
import { useRouter } from "next/navigation"; 
import { useEffect, useState } from "react";

const RecentInvoice = () => {
    const router = useRouter();
    const [bills, setBills] = useState<any[]>([]);

    useEffect(() => {
      window.api.getBills().then(setBills);
    }, []);
      
  return (
    <>
    <section className="w-full h-full p-2">
        <header className="w-full flex items-center justify-between px-1 py-2 border-b border-[#00000014]">
            <h1 className="text-lg">Recent Invoices</h1>
            <Button variant="outline">
                View All
            </Button>
        </header>
        <main className="w-full">
            <Table>
                <tbody>
                    <Table.Row>
                        <Table.Cell>
                            Invoice ID
                        </Table.Cell>
                        <Table.Cell>
                            Customer
                        </Table.Cell>
                        <Table.Cell>
                            Time
                        </Table.Cell>
                        <Table.Cell>
                            Amount
                        </Table.Cell>
                        <Table.Cell>
                            Payment
                        </Table.Cell>
                        <Table.Cell>
                            Status
                        </Table.Cell>
                    </Table.Row>
                    {bills.map((bill) => (
                <Table.Row key={bill.id} onClick={() => router.push(`/invoice/${bill.id}`)}>
                    <Table.Cell>{bill.bill_number}</Table.Cell>
                    <Table.Cell>{bill.name}</Table.Cell>
                    <Table.Cell>
                    {new Date(bill.created_at).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>₹ {bill.total}</Table.Cell>
                    <Table.Cell>Cash</Table.Cell>
                    <Table.Cell>Paid</Table.Cell>
                </Table.Row>
                ))}
                </tbody>
            </Table>
        </main>
    </section>
    </>
  )
}

export default RecentInvoice