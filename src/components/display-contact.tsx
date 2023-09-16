import Link from "next/link";
import { Icons } from "./icons/icons";

export default function Contacts() {
  return (
    <div className="flex flex-row justify-evenly">
      <Link href="https://github.com/YodaheaD">
        {" "}
        <div className="flex flex-row gap-2 text-lg">
          <Icons.gitHub className="h-8 w-8 " /> <p className="mt-0.5">YodaheaD</p>
          
        </div>
      </Link>
      <Link href="https://www.linkedin.com/in/yodahea-daniel">
        {" "}
        <div className="flex flex-row gap-2 text-lg">
          <Icons.laptop className="h-8 w-8 " /> <p className="mt-0.5">Yodahea Daniel</p>
          
        </div>
      </Link>
    </div>
  );
}
