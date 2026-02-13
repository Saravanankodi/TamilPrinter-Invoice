import { Notification } from "@/assets/icons";
import Card from "@/components/layout/Card";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
    <section className="w-full h-full text-black">
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
      <main className="w-full h-40 flex items-center justify-center gap-6">
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
      </main>
    </section>
    </>
  );
}
