import Card from "@/components/layout/Card";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
    <section className="w-full h-full text-black">
      <Header/>
      <main className="w-full h-40 flex items-center justify-center gap-6">
      <Card 
          lable="Today's Revenue"
          value={"$142.50"}
          disc="+12% from yesterday"/>
          <Card 
          lable="Today's Revenue"
          value={"$142.50"}
          disc="+12% from yesterday"/>
          <Card 
          lable="Today's Revenue"
          value={"$142.50"}
          disc="+12% from yesterday"/>
          <Card 
          lable="Today's Revenue"
          value={"$142.50"}
          disc="+12% from yesterday"/>
      </main>
    </section>
    </>
  );
}
