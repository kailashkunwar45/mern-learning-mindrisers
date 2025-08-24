import { Button, IconButton, Input, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useLoginUserMutation } from "./authApi.js";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../user/userSlice.js";

const valSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(3, "Password must be at least 3 characters").required("Password is required"),
});

export default function Login() {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="p-5 max-w-[400px]">

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}

        onSubmit={async (val) => {
          try {
            const response = await loginUser(val).unwrap();
            toast.success("Login Successfull");
            dispatch(setUser(response));
            nav(-1);
          } catch (err) {
            toast.error(err.data.message);
          }

        }}

        validationSchema={valSchema}

      >

        {({ values, handleChange, handleSubmit, touched, errors }) => (
          <form onSubmit={handleSubmit} className="space-y-5 ">

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
        Don't have an account ?
        <Button
          onClick={() => nav('/register')}
          size="sm" variant="text" className="font-medium text-gray-900">
          Sign Up
        </Button>
      </Typography>

    </div>
  )
}