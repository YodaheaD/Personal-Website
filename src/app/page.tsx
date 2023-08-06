import DashboardTabs from "@/components/dashboard-tabs";
import { Card } from "@/components/ui/card";

export default function Home() {
  //<DashboardPage/>

  return (
    <div className=" container mx-auto py-10 ">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-2">
        Dashboard
      </h1>
      <div>
        <Card className=" p-4 m-4 shadow-md">
          <DashboardTabs />
        </Card>
      </div>
    </div>
  );
}
