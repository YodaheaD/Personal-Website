"use client";
import { Chrono } from "react-chrono";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
export default function Timeline() {
 
  const items:any = [
     {
      key: "1",
      title: "Background",
      cardTitle: "About Me and My Background",
      cardSubtitle:
        "I was born in DC but raised in Peachtree City, Georgia located one hour south of Atlanta. \n My mother is from Eritrea and father from Ethiopia, I am a proud Ethiopian-Eritrean American.  ",
    },
    {
      key: "2",
      title: "College",
      cardTitle: "My College Experience",
      cardSubtitle:
        "After highschool I decided to stay in-state and attend Kennesaw State University-Engineering and Technology. \n I graduated with a Bachelors of Science in Computer Engineering in December 2022.  ",
      cardDetailedText: "",
    },
    {
           key: "3",

      title: "Professional",
      cardTitle: "What I do now...",
      cardSubtitle:
        "Currently, I am a Software Engineer working on full-stack web applications, databases, APIs, cloud services and others. My professional interests also include Machine Learning, Artificial Intelligence, and IoT. ",
      cardDetailedText: "",
    },
    {
      key: "4",

      title: "Personal Interests",
      cardTitle: "What I do now... for Fun!",
      cardSubtitle:
        "I very much enjoy doing new things so I often pick up new hobbies! Some of my current interests are traveling, language learning, history,  playing soccer, outdoor activites, and many others! ",
      cardDetailedText: "",
    },
  ];
  return (
    <Card key={Math.random()} className=" h-[600px]">
      {" "}
      <CardHeader key={Math.random()}>
        <CardTitle key={Math.random()} className="text-3xl font-medium">About Me</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent key={Math.random()} className="pl-2 h-3/4">
        <Chrono key={Math.random()} items={items} mode="VERTICAL"/>
      </CardContent>
    </Card>
  );
}
