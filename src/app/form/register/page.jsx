'use client';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios";
import { Formik } from "formik"
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  return (
    <div className="p-5">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Register to your account</CardTitle>
          <CardDescription>
            Enter your detail below to register to your account
          </CardDescription>
          <CardAction>
            <Button onClick={() => router.back()} variant="link">Login</Button>
          </CardAction>
        </CardHeader>
        <CardContent>

          <Formik
            initialValues={{
              name: '',
              email: '',
              password: ''
            }}
            onSubmit={(val) => {
              startTransition(async () => {
                try {
                  await axios.post('http://localhost:3000/api/auth/register', val);
                  toast.success('Successfully registered');
                  router.back();
                } catch (err) {
                  toast.error(err.message)
                }
              });


            }}
          >
            {({ handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">

                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      name="name"
                      onChange={handleChange}
                      id="username"
                      type="text"
                      placeholder="john@gmail.com"

                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="email"
                      onChange={handleChange}
                      id="email"
                      type="email"
                      placeholder="m@example.com"

                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      name="password"
                      onChange={handleChange}
                      id="password"
                      type="password"
                      placeholder="*********"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  {isPending ? <Button size="sm" disabled className={"w-full"}>
                    <Loader2Icon className="animate-spin " />
                    Please wait
                  </Button> : <Button type="submit" className="w-full">
                    Submit
                  </Button>}
                </div>


              </form>

            )}
          </Formik>



        </CardContent>

      </Card>
    </div>
  )
}


