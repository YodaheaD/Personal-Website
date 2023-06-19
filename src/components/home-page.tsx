"use client"

import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Overview } from "./chart";
import { NotificationsCard } from "./notis-card";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import DashboardTabs from "./dashboard-tabs";



export default function HomePage() {
  return (
    <div>
  
    
<Card className=" p-4 m-4 shadow-md">
     <DashboardTabs/>
   
    </Card>
    
    </div>
  );
}
