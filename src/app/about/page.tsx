import HomePage from "@/components/home-page";
import { NotificationsCard } from "@/components/notis-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" max-w-lg mt-8 m-auto">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          <CardDescription>Information about the creator.</CardDescription>
        </CardHeader>
        <CardContent>
          I a, a recent graduate in Computer Engineering from Kennesaw State
          University currently working as a Software Engineer. My professional
          interests in Full Stack development, IoT, API's and databases.
        </CardContent>
      </Card>
    </div>
  );
}
