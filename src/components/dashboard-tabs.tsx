import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardNotisTab from "./ui/dashboard/dashboard-view-notis";
import Timeline from "./timeline";
import Contacts from "./display-contact";
import { Card, CardDescription, CardTitle } from "./ui/card";
//import AccountCards from "./overview-cards"
//import DashboardOverview from "./dashboard-overview"
//import ImageDashboard from "./image-dashboard"

export default function DashboardTabs() {
  //<AccountCards/>          <DashboardOverview/> <ImageDashboard/>

  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Home</TabsTrigger>
        <TabsTrigger value="images">About</TabsTrigger>
        <TabsTrigger value="Contact">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <DashboardNotisTab />
      </TabsContent>
      <TabsContent key={Math.random()} value="images" className="space-y-4">
        <Timeline />
      </TabsContent>
      <TabsContent value="Contact">
        <Card className="p-5 shadow-md  flex flex-col gap-2">
          <CardTitle className="text-3xl">Contact Me</CardTitle>
          <CardDescription className="text-lg">Some of my contacts are: </CardDescription>
          <div className="">
            {" "}
            <Contacts />
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
