import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardNotisTab from "./ui/dashboard/dashboard-view-notis"
//import AccountCards from "./overview-cards"
//import DashboardOverview from "./dashboard-overview"
//import ImageDashboard from "./image-dashboard"

export default function DashboardTabs() {
    //<AccountCards/>          <DashboardOverview/> <ImageDashboard/>


    return (
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Home</TabsTrigger>
          <TabsTrigger value="images">Table</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <DashboardNotisTab/>
        </TabsContent>
        <TabsContent value="images" className="space-y-4">
         
        </TabsContent>
        <TabsContent value="notifications">
          Change your notifications here.</TabsContent>
      </Tabs>
    )
  }