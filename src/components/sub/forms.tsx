"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FC, useEffect, useState } from "react";
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
   import toast from "react-hot-toast";
import { Icons } from "../icons/icons";

require("dotenv").config({ path: "/src/.env" });


/**
 * This file contains form components for app.
 * 
 * The forms for interacting with data: 
 * 
 * -> CreateDataForm: Form for adding data to the table.
 * 
 * -> DeleteDataForm: Form for deleting data from the table.
 * 
 * -> ChangeDataFrom: Form for updating data in the table.
 * 
 * The forms for authentication:
 * 
 * -> LoginForm: Form for logging in to the app.
 * 
 * -> RegisterDataForm: Form for registering to the app.
 * 
 */


const Azure_DELETE = "http://localhost:3030/table/Delete";
 
// Form Validator objects
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  number: z.number().max(10, {
    message: "Id cannot be greater than 10.",
  }),
});

// Form for adding data to the table.
export function CreateDataForm(this: any) {
  const [loaderState, setLoaderState] = useState(false);

  // Original URL is to regular table, Azure if using TableLike

  const onSubmit = async (data: any) => {
    // Sending a post req to the Api to insert into our users table created with TableLike
    console.log("data is: ", data);

    await axios.post("http://localhost:3030/table/Post", {
      data: {
        name: data.username,
        id: data.number,
      },
    });

    // State below with trigger check icon if true
    setLoaderState(true); //console.log(data);
  };

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm();


  return (
    <Card className="w-[350px] m-auto ml-2 shadow-xl ">
      <CardHeader>
        <CardTitle>Create Data for the Azure Table</CardTitle>
        <CardDescription>
          Create data here to be added to the Azure Table
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

// Form for deleting data from the table.
export function DeleteForm(this: any) {
  const [loaderState, setLoaderState] = useState(false);

  const onSubmit2 = async (data: any) => {
    // Sending a request to delete and entry in the data table
    await axios.delete(Azure_DELETE, {
      data: { number: data.number },
    });
    setLoaderState(true);
    //console.log(data);
  };

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm<FormSchemaType>({
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

//REGISTER FORM
export function LoginForm(this: any) {

  const [loaderState, setLoaderState] = useState(false);
  const [recData, setrecData] = useState("");

 
  const onSubmit = async (data: any) => {
    // Sending a request to Register information
    //localStorage.setItem("localUser",`Guest`)// `Bearer ${token}`;

    try {
      const d: any = await axios.post("http://localhost:3030/auth/login", {
        user:{
        email: data.username,
        password: data.password,}
      });
      //console.log("Token data:",d.data.token+"Username Data data:",d.data.username);
     // let token:any=d.data.token;
      //let usernameData = d.data.username;

      //localStorage.setItem("token",`Bearer ${token}`);
      //localStorage.setItem("localUser",`${usernameData}`);

      console.log("Current User in Storage:",await localStorage.getItem("localUser"));
      console.log("Current Token in Storage:",await localStorage.getItem("token"));

      setLoaderState(true);
    toast.success(`Welcome ${d.data.username}!`);

    } catch (error: any) {
      console.log(error);//let ErrorResponseCode = error.response.status;      let ErrorMessage = error.message;      console.log(`\n -> Error Code: ${ErrorResponseCode} \n -> Error Message: ${ErrorMessage}`);
    }
  };

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm();

  return (
    <div className="mx-auto ">
    <Card className=" w-[20vw] mx-auto ml-2 shadow-xl ">
      <CardHeader>
        <CardTitle>Login In</CardTitle>
        <CardDescription>Login to Use application. </CardDescription>
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
                    <Input placeholder="create username here..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="create password here..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {loaderState ? (
              <div className="flex flex-row gap 2">
                <Icons.check className=" bg-green-200 mr-2 rounded-full rotate-0 scale-100  transition-all dark:-rotate-90 dark:scale-0"></Icons.check>
                <p> Logged In Successfully!</p>
              </div>
            ) : null}

            <Button
              className=" border-2 ring-0 hover:ring-4"
              variant={"dark"}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
    </div>
  );
}

// Login Form

export function RegisterForm(this: any) {
  const [loaderState, setLoaderState] = useState(false);
  const [recData, setrecData] = useState("");

  const Azure_Register = "http://localhost:3030/auth/register";

  const onSubmit = async (data: any) => {
    // Sending a request to Register information
    
    try {
      const d: any = await axios.post(Azure_Register, {
        //data: { number: data.number },
        user:{
        email: data.username,
        password: data.password,
        }
      });
      console.log("response data:",d.data);
      localStorage.setItem("localUsername",d.data.email)
      setLoaderState(true);
    } catch (error: any) {
      let ErrorResponseCode = error.response.status;
      let ErrorMessage = error.message;
      console.log(
        `\n -> Error Code: ${ErrorResponseCode} \n -> Error Message: ${ErrorMessage}`
      );
    }
  };

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm();

  return (
    <Card className="w-[350px] m-auto ml-2 shadow-xl ">
      <CardHeader>
        <CardTitle>Register to Website.</CardTitle>
        <CardDescription>
          Register your information below to use application.{" "}
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
                    <Input placeholder="create username here..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="create password here..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {loaderState ? (
              <div className="flex flex-row gap 2">
                <Icons.check className=" bg-green-200 mr-2 rounded-full rotate-0 scale-100  transition-all dark:-rotate-90 dark:scale-0"></Icons.check>
                <p> Registered Successfully!</p>
              </div>
            ) : null}

            <Button
              className=" border-2 ring-0 hover:ring-4"
              variant={"dark"}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}

// Login Form
let namechange="null"
export function ChangeDataForm({name}:any) {
  const [loaderState, setLoaderState] = useState(false);
  const [recData, setrecData] = useState("");
const [changename, setchangename] = useState<any>();
const [showChange, setshowChange] = useState(false);
  const Azure_Update = "http://localhost:3030/table/Update";


async function setChanges(name:any){

  namechange=name;
  setchangename(name);
  setshowChange(true);

}
  const onSubmit = async (data: any) => {
    // Sending a request to Register information
    try {
      const d: any = await axios.put(Azure_Update, {
        //data: { number: data.number },
        user:{
        name: changename,//data.username,
        id: data.password,
        }
      });
      console.log("response data:",d.data);
      setLoaderState(true);
    } catch (error: any) {
      let ErrorResponseCode = error.response.status;
      let ErrorMessage = error.message;
      console.log(
        `\n -> Error Code: ${ErrorResponseCode} \n -> Error Message: ${ErrorMessage}`
      );
    }
  };

  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm();
//    <Card className="none"><CardHeader><CardTitle>Change data in Azure Table for {name}</CardTitle><CardDescription>          Enter Id and Username of data you want to change in the Azure table.{" "}</CardDescription></CardHeader><CardContent> 
           //       <Input placeholder={`Enter Username ${name} here...`} {...field} onClick={(()=> setchangename(name))}/>
//                  {/*changename!=null?<Icons.checkSelected/>:<Icons.checkUnselected onClick={((name)=> setchangename(name))} className="w-6 h-6 hover:text-blue-500" />*/}

  return (
             <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <h1 className="text-lg font-semibold underline text-slate-950 dark:text-slate-50">Are you sure you want to edit {name}?</h1>
                  <h2>This action cannot be undone and will permanently
                            modify the data from our servers.</h2>
                  <h2 className=" mt-4 text-md font-semibold  text-slate-950 dark:text-slate-50">Check below if yes.</h2>
                  <FormControl>
                    
                 < Input  type="checkbox" className="pl-0 w-1/4 text-red-500" placeholder={`Enter Username ${name} here...`} {...field} onClick={(()=> setChanges(name))}/>

                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />                  {changename!=null?<p>Changing data for {changename}</p>:null}


            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                 { showChange ===true ? <><FormLabel></FormLabel>
                  <h1 className="text-md font-semibold  text-slate-950 dark:text-slate-50">New ID for {name}</h1>

                  <FormControl>
                    <Input placeholder={`create New Id for ${name} here...`} {...field} />
                  </FormControl></>:null}
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {loaderState ? (
              <div className="flex flex-row gap 2">
                <Icons.check className=" bg-green-200 mr-2 rounded-full rotate-0 scale-100  transition-all dark:-rotate-90 dark:scale-0"></Icons.check>
                <p>Changed Successfully!</p>
              </div>
            ) : null}

            <Button
               variant={"dark"}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      
  );
  //</CardContent><CardFooter className="flex justify-between"></CardFooter></Card>
}