import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DeleteForm, ProfileForm } from "./form-table";

export function FormSelect() {
  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger value="account">Add Data</TabsTrigger>
          <TabsTrigger value="password">Delete Data</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div>
            <ProfileForm />
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div>
            <DeleteForm />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
