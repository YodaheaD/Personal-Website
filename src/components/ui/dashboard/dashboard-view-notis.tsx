"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../card";

import { ScrollArea } from "../scroll-area";
import { Chrono } from "react-chrono";
import Link from "next/link";
import Contacts from "@/components/display-contact";
import { Separator } from "../separator";

export default function DashboardPage() {
  const customContent = [
    <div key={Math.random()} className="w-full text-2xl mt-8">
      <h1 className="font-semibold  font-sans text-blue-500 mb-2">
        My Background
      </h1>
      <p>Ethiopian-Eritrean American raised in Peachtree City, Georgia.</p>
    </div>,
    <div key={Math.random()} className="w-full text-2xl mt-8">
      <h1 className="font-semibold  font-sans text-blue-500 mb-2">
        My College Experience
      </h1>{" "}
      <p>
        Attended Kennesaw State University-Engineering and Technology and
        graduated with a Bachelors of Science in Computer Engineering.
      </p>
    </div>,
    <div key={Math.random()} className="w-full text-2xl mt-8">
      <h1 className="font-semibold  font-sans text-blue-500 mb-2">
        What I do now...
      </h1>
      <p>
        Currently a Software Engineer working on full-stack web applications,
        databases, APIs, cloud services and others.{" "}
      </p>
    </div>,
    <div key={Math.random()} className="w-full text-2xl mt-8">
      <h1 className="font-semibold  font-sans text-blue-500 mb-2">
        What I do now... for Fun!
      </h1>
      <p>
        {" "}
        Some of my current interests are traveling, language learning, history,
        playing soccer, outdoor activities, and many others!{" "}
      </p>
    </div>,
  ];

  const buildTimeline = () => {
    const items = [{}, {}, {}, {}];

    return (
      <Chrono items={items} mode="VERTICAL">
        {customContent}
      </Chrono>
    );
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl font-medium">
              Welcome to my Website!
            </CardTitle>
            <CardDescription className="text-lg">
              Find out about me or use my socials for contact.{" "}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Some of my contacts are: </CardDescription>
          </CardHeader>
          <CardContent>
            <Contacts />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        <Card className="col-span-4 h-[450px]">
          <ScrollArea className=" h-[450px] p-4">
            {" "}
            <CardHeader className="  sticky top-0 z-40 w-full bg-white">
              <CardTitle className="text-3xl font-medium ">About Me</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="pl-2 h-2/3">
                 {buildTimeline()}
             </CardContent>
          </ScrollArea>
        </Card>
      </div>
    </>
  );
}
