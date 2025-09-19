import React from 'react'
import axios from "axios"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Button } from "../components/ui/button";
import RemoveButton from "../components/RemoveButton";

export default async function Employees() {
  const response = await axios.get('https://6878a22f63f24f1fdc9ec3af.mockapi.io/employees');
  const employees = response.data;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">
      {employees.map((employee) => (
        <Card
          key={employee.id}
          className="max-w-[400px] rounded-2xl shadow-md hover:shadow-lg transition-shadow"
        >
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {employee.fullname}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {employee.position}
            </CardDescription>
            <CardAction>
              <span className="px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                Age: {employee.age}
              </span>
            </CardAction>
          </CardHeader>

          <CardFooter className="flex justify-between items-center border-t pt-4">
            <Link
              href={`/employees/${employee.id}`}
              className="text-purple-600 font-medium hover:underline"
            >
              Go to employee
            </Link>

            <div className="flex gap-3">
              <Link href={`/form/edit/${employee.id}`}>
                <Button
                  size="sm"
                  className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg"
                >
                  Update
                </Button>
              </Link>
              <RemoveButton id={employee.id} />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
