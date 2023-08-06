import { Payment, columns } from "@/components/ui/data/columns";
import { DataTable } from "@/components/data-table";
import axios from "axios";
import { DeleteForm, ProfileForm } from "@/components/sub/form-table";
import { FormSelect } from "@/components/sub/form-selector";
import * as dotenv from 'dotenv';


dotenv.config()
 
const Azure_GET="http://localhost:3030/table/Get";


async function getDataTableLike(): Promise<Payment[]> {
  // Fetch data from your API here.
 try{
  const { data, status } = await axios.get(Azure_GET);

  // Id and Name data is found in first position. 
  const { idData } = data[0];   // Returns all of the Id data 
  const { nameData } = data[0]; // Returns all of the Name data

  // Create array with data from API.
  var jsonArr: Payment[] = [];
  for (let i = 0; i < idData.length; i++) {
    jsonArr.push({
      id: idData[i],
      name: nameData[i],
      role: "Client",
      email: `Test${i}@me.com`,
    });
  }
  return jsonArr;}
  catch(error){
    var jsonArr: Payment[] = [];
  for (let i = 0; i < 1; i++) {
    jsonArr.push({
      id: 1,
      name: "Error",
      role: "Client",
      email: `Error${i}@me.com`,
    });
  }
  return jsonArr;
   }

}

export default async function DemoPage() {
  // Get data from function and save.
  const data = await getDataTableLike();

  // Pass data to the data table component. 
  return (
    <div className="container mx-auto py-10">
      <div className=" flex flex-row justify-evenly  mt-8 ">
        <FormSelect />
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
