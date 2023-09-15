"use client";

import * as React from "react";
 
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
 
//const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_HEAD = ["id", "Type", "Role", "Edit"];

export default function ImageDisplay(imagesList: any) {
 
  const [imageCurrent, setImageCurrent] = useState("Firmino");
  const [typeCurrent, setTypeCurrent] = useState("png");

  return (
    <>
      <div className="flex flex-row justify-evenly">
        <div className="w-3/6 max-w-fit shadow-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{imageCurrent}</CardTitle>
              <CardDescription>
                Image {imageCurrent} of type {typeCurrent}{" "}
              </CardDescription>
            </CardHeader>

            <CardContent>
              
            </CardContent>
          </Card>
        </div>
        <Card className="overflow-auto h-fit p-2 w-fit mx-auto my-auto">
           
        </Card>
      </div> 
      <div className="w-full flex flex-row gap-2  pt-52">
        
      </div>
    </>
  );
}
