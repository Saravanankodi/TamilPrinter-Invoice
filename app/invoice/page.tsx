"use client";
import Download from '@/assets/icons/Download'
import Button from '@/components/base/Button'
import React from 'react'
import { useRouter } from 'next/navigation';

const AllInvoice = () => {
    const router = useRouter()
    const [bills, setBills] = React.useState<any[]>([]);

    React.useEffect(() => {
        const fetchBills = async () => {
            if (window.api?.getBills) {
                const data = await window.api.getBills();
                console.log("Fetched bills:", data); // debug
                setBills(data);
            }
        };
        fetchBills();
    }, []);

    return (
        <section className="w-full h-auto p-2">
            <header className="w-full h-auto p-2 flex items-center justify-between bg-white rounded-lg">
                <div className="w-auto">
                    <span className="text-2xl">All Invoices</span>
                    <p className="text-[14px]">View and manage all your past billing transactions.</p>
                </div>
                <Button 
                    icon={<Download />} 
                    className='text-white' 
                    onClick={() => window.api?.exportBills?.()}
                >
                    Export Data
                </Button>
            </header>

            <main className="w-full h-full m-auto overflow-x-auto">
                <table className="min-w-full bg-white rounded-md">
                    <thead>
                        <tr className="border-b border-[#00000014]">
                            <th className="px-2 py-2 text-left">Bill No</th>
                            <th className="px-2 py-2 text-left">Date & Time</th>
                            <th className="px-2 py-2 text-left">Customer</th>
                            <th className="px-2 py-2 text-left">Amount</th>
                            <th className="px-2 py-2 text-left">Payment</th>
                            <th className="px-2 py-2 text-left">Status</th>
                            <th className="px-2 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map((bill) => (
                            <tr 
                                key={bill.id} 
                                className="border-b border-[#00000014] hover:bg-gray-50 cursor-pointer"
                                onClick={() => router.push(`/invoice/${bill.id}`)}
                            >
                                <td className="px-2 py-2">{bill.bill_number}</td>
                                <td className="px-2 py-2">{new Date(bill.created_at).toLocaleString()}</td>
                                <td className="px-2 py-2">{bill.customer_name}</td>
                                <td className="px-2 py-2">₹ {bill.total}</td>
                                <td className="px-2 py-2">{bill.payment_method || "N/A"}</td>
                                <td className="px-2 py-2">{bill.status || "Pending"}</td>
                                <td className="px-2 py-2">
                                    <Button 
                                        onClick={(e) => {
                                            e.stopPropagation(); // prevent row click
                                            console.log('Print', bill.id)
                                        }}
                                    >
                                        Print
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default AllInvoice;
