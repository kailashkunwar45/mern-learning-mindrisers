import { Button, IconButton, Input, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useRegisterUserMutation } from "./authApi.js";
import toast from "react-hot-toast";

const valSchema = Yup.object().shape({
  username: Yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(3, "Password must be at least 3 characters").required("Password is required"),
});

export default function Register() {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div className="p-5 max-w-[400px]">

      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}

        onSubmit={async (val) => {
          try {
            await registerUser(val).unwrap();
            toast.success("Registration Successfully");
            nav(-1);
          } catch (err) {
            toast.error(err?.data?.message || err?.error || err.message);
          }

        }}

        validationSchema={valSchema}

      >

        {({ values, handleChange, handleSubmit, touched, errors }) => (
          <form onSubmit={handleSubmit} className="space-y-5 ">

            <div>
              <Input
                name="username"
                label="Username"
                value={values.username}
                onChange={handleChange}


              />
              {touched.username && errors.username && <p className="text-red-500">{errors.username}</p>}
            </div>


            <div>
              <Input
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}

              />
              {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>



            <div className="relative flex w-full">
              <Input
                type={show ? "text" : "password"}
                label="Password"
                value={values.password}
                onChange={handleChange}
                name="password"
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />

              <IconButton
                onClick={() => setShow(!show)}
                size="sm"
                variant="text"
                className="!absolute right-1 top-1 rounded"
              >
                <i className={`fas fa-${show ? "unlock" : "lock"} fa-lg`} />
              </IconButton>

            </div>

            <Button loading={isLoading} type="submit">Submit</Button>
          </form>
        )}

      </Formik>

      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account ?
        <Button
          onClick={() => nav(-1)}
          size="sm" variant="text" className="font-medium text-gray-900">
          Login
        </Button>
      </Typography>

    </div>
  )
}