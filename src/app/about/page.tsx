import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" max-w-lg mt-8 m-auto">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          <CardDescription>Information about the creator.</CardDescription>
        </CardHeader>
        <CardContent>
          I am a recent graduate in Computer Engineering from Kennesaw State
          University currently working as a Software Engineer. My professional
          interests in Full Stack development, IoT, APIs and databases.
        </CardContent>
      </Card>
    </div>
  );
}
