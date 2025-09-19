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
import { Formik } from "formik"
import { Loader2Icon } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
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
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Link href={'/form/register'}>Sign Up</Link>
          </CardAction>
        </CardHeader>
        <CardContent>

          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={(val) => {
              startTransition(async () => {
                const res = await signIn('credentials', {
                  email: val.email,
                  password: val.password,
                  redirect: false
                });
                if (res.ok) {
                  toast.success('Successfully logged in');
                  router.back();

                } else {
                  toast.error(res.error);
                }

              });


            }}
          >
            {({ handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
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
                    Login
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


