import { Add, Customers, Notification } from "@/assets/icons";
import Card from "@/components/layout/Card";
import Header from "@/components/layout/Header";
import RecentInvoice from "@/components/ui/tables/RecentInvoice";

export default function Home() {
  return (
    <>
    <section className="w-full h-full max-h-screen text-black">
      <header className="w-full p-2 flex items-center justify-between bg-white border border-[#00000014]">
        <aside className="w-fit h-full">
          <h1 className="text-[20px]">
            Dashboard
          </h1>
          <p className="text-sm">
            Welcome back, Admin
          </p>
        </aside>
        <div className="w-fit flex items-center gap-2">
          {/* Date and Time */}
          <div className="w-fit text-right  border-r pr-6 border-[#00000014]">
            <p className="text-sm font-semibold text-black">
              Thursday, October 24
            </p>
            <p className="text-sm">
              10:45 AM
            </p>
          </div>
          <div className="w-fit h-fit rounded-full bg-[#F1F5F9] p-2 ">
            <Notification className="w-6 h-6"/>
          </div>
        </div>
      </header>
      <div className="w-full h-40 flex items-center justify-center gap-6">
          <Card 
          label="Today's Revenue"
          value={"$142.50"}
          disc="+12% from yesterday"/>
          <Card 
          label="Today's Revenue"
          value={"$142.50"}
          disc="+12% from yesterday"/>
          <Card 
          label="Today's Revenue"
          value={"$142.50"}
          disc="+12% from yesterday"/>
          <Card 
          label="Today's Revenue"
          value={"$142.50"}
          disc="+12% from yesterday"/>
      </div>
      <main className="w-full h-full max-h-[74vh] grid grid-cols-8 grid-rows-4 gap-6 p-4 ">
        <div className="w-full col-span-5 row-span-4 col-start-1 row-start-1 bg-white rounded-md">
          <RecentInvoice/>
        </div>
        <div className="w-full h-full bg-white rounded-md col-span-3 row-span-2 col-start-6 row-start-1">
          <header className="w-full h-auto px-2 py-3 border-b border-[#00000014] ">
            <h1 className="text-lg">Quick Actions</h1>
          </header>
          <aside className="w-full h-fit p-4">
            <div className="flex items-center gap-5 border border-[#00000014] p-4 rounded-lg">
              <div className="w-fit h-fit p-3 rounded-md bg-[#0496ff]">
                <Add className="w-10 h-10 text-white"/>
              </div>
              <div className="w-auto">
                <span className="text-base">New Bill</span>
                <p className="text-sm">Create invoice for customer</p>
              </div>
            </div>
          </aside>
          <aside className="w-full h-fit p-4">
            <div className="flex items-center gap-5 border border-[#00000014] p-4 rounded-lg">
              <div className="w-fit h-fit p-3 rounded-md bg-[#F1F5F9]">
                <Customers className="w-10 h-10 text-black"/>
              </div>
              <div className="w-auto">
                <span className="text-base">Add Customer</span>
                <p className="text-sm">Register new client</p>
              </div>
            </div>
          </aside>
        </div>
        <div className="w-full h-full bg-white rounded-md col-span-3 row-span-2 col-start-6 row-start-3">
          <header className="w-full h-auto px-2 py-3 border-b border-[#00000014] ">
            <h1 className="text-lg">Stock Alerts</h1>
          </header>
        </div>
      </main>
        
    </section>
    </>
  );
}
