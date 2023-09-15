"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
 import axios from "axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Icons } from "../icons/icons";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
 
 


export default function CreateFormFields({ colNames }: any) {
  /**/
  // Creating the form fields

 
  const [formtype, setFormtype] = useState("Upload");
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<any>({
   
  });
  const HandleSubmit = async (data:any) => {
    console.log(data);
    toast.success(`The data ${JSON.stringify(data)}}`);
    
    const title = data.title;
    const id = data.id;

   
    switch (formtype) {
      case "Upload":
        const response = await axios.post(
          "http://localhost:3030/table/Post",
          {
            data: {
              name: data.name,
              id: data.id,
            },
          }
        );
        toast.success("Upload request Sent! ");

        console.log(response);
        break;
      case "Remove":
        const resRemove = await axios.delete(
          `http://localhost:3030/table/Delete/${data.name}`,
         
        );
        toast.success("Removal request Sent! ");

        console.log(resRemove);
        break;
      default:
        console.log("Error");
    }  
  };
  const onSubmit: SubmitHandler<any[]> = (data) => {
    HandleSubmit(data);
  };
  const renderTabs = () => {
    switch (formtype) {
      case "Upload":
        return (
          <div>
            <TabsTrigger
              onClick={() => setFormtype("Upload")}
              className=" bg-black text-white text-lg sm:text-sm rounded-md hover:ring-2 hover:ring-[#509f51]"
              value="Upload"
            >
              Upload
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setFormtype("Remove")}
              className=" bg-[#f4f4f0bd] rounded-md hover:ring-2 hover:ring-[#509f51]"
              value="Upload"
            >
              Remove
            </TabsTrigger>
          </div>
        );
      case "Remove":
        return (
          <div>
            <TabsTrigger
              onClick={() => setFormtype("Upload")}
              className=" bg-[#f4f4f0bd]  rounded-md hover:ring-2 hover:ring-[#509f51]"
              value="Upload"
            >
              Upload
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setFormtype("Remove")}
              className=" bg-[#f4f4f0bd] text-lg  bg-black text-white  rounded-md hover:ring-2 hover:ring-[#509f51]"
              value="Upload"
            >
              Remove
            </TabsTrigger>
          </div>
        );
      default:
        return (
          <TabsContent value="Upload" className="space-y-4 animate-spin">
            <div className="animate-spin delay-700">
              <Icons.add></Icons.add>
            </div>
          </TabsContent>
        );
    }
  };

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-[max(30px,2.6vw)] font-bold leading-tight tracking-tight text-gray-900  dark:text-white">
        {formtype} data
      </h1>
      <Card className="mt-2 shadow-md p-6">
        <Tabs defaultValue="Upload">
          <TabsList className="  w-full mx-auto">
            <div className="bg-[#f4f4f0] p-[0.8vw] rounded-lg font-semibold">
              {renderTabs()}
            </div>{" "}
          </TabsList>
          <TabsContent value="Upload" className="space-y-4"></TabsContent>
          <TabsContent value="Remove" className="space-y-4"></TabsContent>
        </Tabs>{" "}
        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {colNames ? (
            colNames.map((item: any, t: number) => {
              return (
                <>
                  <div>
                    <label className="block mb-2 capitalize text-[max(18px,1.8vw)] font-medium text-gray-900 dark:text-white">
                      {item}
                    </label>
                    <input
                      type="text"
                      id={String(item)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      placeholder="Your name"
                      {...register(item)}
                    />
                  </div>
                </>
              );
            })
          ) : (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {"Retrieving data ..."}
                <div className="animate-spin">
                  <Icons.add></Icons.add>
                </div>
              </label>
            </div>
          )}

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                {...register("terms")}
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          
          <Button type="submit" variant={'default'}>
            Submit
          </Button>

          {/* Check incoming data
          colNames ?
            colNames.map((item: any) => (
              <div key={shortid.generate()}>{item}</div>
            )) :null
          */}
        </form>
      </Card>
    </div>
  );
}
