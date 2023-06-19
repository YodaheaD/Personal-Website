
"use client"
import { NotificationsCard } from "@/components/notis-card";
 
import { Label } from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../card";
import { Input } from "../input";
import { Overview } from "./overview";




export default function DashboardNotisTab(){

return(
<div className="flex flex-row max-h-fit mt-4 justify-evenly">
<div >
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>
        Deploy your new project in one-click.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Framework</Label>
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex justify-between">
     
    </CardFooter>
  </Card>
</div>

<div>
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Monthly revenue</CardTitle>
      <CardDescription>
        Below is the revenue values for latest 12 months.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Overview />
    </CardContent>
    <CardFooter className="flex justify-between">
      * all sales values pending live updates
    </CardFooter>
  </Card>
</div>

<div>
  <NotificationsCard />
</div>

</div>
)}