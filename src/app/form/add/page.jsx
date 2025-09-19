'use client';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Formik } from "formik";
import { addEmployee } from "../../../lib/action";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter();
  const [isLoading, startTransition] = useTransition();


  return (
    <div>


      <Formik
        initialValues={{
          fullname: '',
          postion: '',
          age: ''
        }}

        onSubmit={(val) => {
          startTransition(async () => {
            try {
              const res = await addEmployee(val);
              toast.success(res.message);
              router.back();
            } catch (err) {
              toast.error(err.message)
            }

          })
        }}

      >
        {({ handleChange, handleSubmit, values }) => (
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Add Employee</CardTitle>
              <CardDescription>
                Enter your email detail
              </CardDescription>

            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input
                      onChange={handleChange}
                      value={values.fullname}
                      id="fullname"
                      type="text"
                      placeholder="john@gmail.com"
                      name='fullname'
                    />
                  </div>


                  <div className="grid gap-2">
                    <Label htmlFor="postion">Position</Label>
                    <Input
                      onChange={handleChange}
                      value={values.postion}
                      id="postion"
                      type="text"
                      placeholder="postion"
                      name='postion'
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      onChange={handleChange}
                      value={values.age}
                      id="age"
                      type="number"
                      placeholder="age"
                      name='age'
                    />
                  </div>




                </div>

                {isLoading ? <Button className="w-full mt-4" disabled>
                  <Loader2Icon className="animate-spin" />
                  Please wait
                </Button> : <Button type="submit" className="w-full mt-4">
                  Submit
                </Button>}




              </form>
            </CardContent>

          </Card>
        )}
      </Formik>



    </div>
  )
}