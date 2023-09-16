import DashboardTabs from "@/components/dashboard-tabs";
import { Card } from "@/components/ui/card";

export default function Home() {
  //<DashboardPage/>

  return (
    <div className=" container mx-auto py-10 ">
  
      <div>
      <h1 className="text-4xl font-extrabold leading-tight tracking-tighter ml-8 mb-2">
              Yodahea Daniel
            </h1>
        <Card className=" p-4 m-4 shadow-md mx-auto md:w-10/12 sm:w-11/12">
          <DashboardTabs />
        </Card>
      </div>
    </div>
  );
}
