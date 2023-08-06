"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Icons } from "../icons/icons";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as dotenv from "dotenv";

require('dotenv').config({ path: '/src/.env' })
const originalURL_ADD = "http://localhost:3030/items/add";
const orgURL_DELETE = "http://localhost:3030/items/delete";
const Azure_POST="http://localhost:3030/table/Post";
const Azure_DELETE="http://localhost:3030/table/Delete";

// Form Validator
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  number: z.number().max(10,{
    message:"Id cannot be greater than 10."
  })
});

export function ProfileForm(this: any) {

  const [loaderState, setLoaderState] = useState(false)

  // Original URL is to regular table, Azure if using TableLike


  const onSubmit = async (data: any) => {
   
    // Sending a post req to the Api to insert into our users table created with TableLike
    await axios.post(Azure_POST,
      {
        data: {
          name: data.username,
          id: data.number
        }
      })
      // State below with trigger check icon if true
    setLoaderState(true);//console.log(data);
  }

  // ...
  type FormSchemaType = z.infer<typeof formSchema>;

const form=useForm<FormSchemaType>({
  resolver: zodResolver(formSchema),
});

  return (
    <Card className="w-[350px] m-auto ml-2 shadow-xl ">
      <CardHeader>
        <CardTitle>Create Data for Azure Table</CardTitle>
        <CardDescription>
          Insert data into the azure table for storage.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="your username..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          
          

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id</FormLabel>
                  <FormControl>
                    <Input placeholder="your id..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {loaderState ? (
              <div className="flex flex-row gap 2">
                <Icons.check className=" bg-green-200 mr-2 rounded-full rotate-0 scale-100  transition-all dark:-rotate-90 dark:scale-0"></Icons.check>
                <p> Added!</p>
              </div>
            ) : null}

            <Button variant={"default"} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}

/////

export function DeleteForm(this: any) {
  const [loaderState, setLoaderState] = useState(false);

  const onSubmit2 = async (data: any) => {
    // Sending a request to delete and entry in the data table
    await axios.delete( (Azure_DELETE), {
      data: { number: data.number },
    });
    setLoaderState(true);
    //console.log(data);
  };

  type FormSchemaType = z.infer<typeof formSchema>;

  const form=useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });
  

  return (
    <Card className="w-[350px] m-auto ml-2 shadow-xl ">
      <CardHeader>
        <CardTitle>Delete Data for Azure Table</CardTitle>
        <CardDescription>
          Insert id to delete from the azure table storage.{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit2)} className="space-y-8">
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Id for deletion</FormLabel>
                  <FormControl>
                    <Input placeholder="delete here..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {loaderState ? (
              <div className="flex flex-row gap 2">
                <Icons.check className=" bg-green-200 mr-2 rounded-full rotate-0 scale-100  transition-all dark:-rotate-90 dark:scale-0"></Icons.check>
                <p> Deleted!</p>
              </div>
            ) : null}

            <Button variant={"default"} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
