import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { nanoid } from "nanoid";
import { Card } from "../ui/card";

export default function BasicTable({ data, colNames = ["Default"] }: any) {
  return (
    <Card className="w-1/2">
      <Table>
        <TableHead>
          <TableRow className="bg-[#f4f4f3ba] dark:bg-slate-600 rounded-xl">
            {colNames.map((colName: any) => (
              <TableCell
                align="center"
                className="text-lg dark:text-[#F4f4f1]  capitalize underline underline-offset-4"
                key={nanoid()}
              >
                {colName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow key={nanoid()}>
              <TableCell
                key={nanoid()}
                align="center"
                className="text-lg  font-semibold dark:text-white"
              >{row.name} 
              </TableCell>
              <TableCell
                key={nanoid()}
                align="center"
                className="text-md  dark:text-white"
              >
                {row.id}

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
