

import { Button, Checkbox, Input, Option, Radio, Select, Switch, Textarea, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { addUser } from "./userSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";


const valSchema = Yup.object({
  username: Yup.string().min(5).max(50).required(),
  email: Yup.string().email().required(),
  habits: Yup.array().min(1).required(),
  gender: Yup.string().required(),
  country: Yup.string().required(),
  detail: Yup.string().min(10).max(200).required(),

});
export default function UserForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div className="p-5">

      <Formik
        initialValues={{
          username: '',
          email: '',
          habits: [],
          gender: '',
          country: '',
          detail: '',
          // accept: ''
        }}

        onSubmit={(val, { resetForm }) => {
          dispatch(addUser({ ...val, id: nanoid() }));
          nav(-1);

        }}
        validationSchema={valSchema}
      >

        {({ handleChange, setFieldValue, handleSubmit, values, errors, touched }) => (
          <form onSubmit={handleSubmit} className="max-w-[350px] space-y-5">

            <div>
              <Input
                onChange={handleChange}
                value={values.username}
                label="Username" name="username" />
              {errors.username && touched.username && <h1 className="text-pink-500">{errors.username}</h1>}
            </div>
            <div>
              <Input
                value={values.email}
                onChange={handleChange}
                label="Email" name="email" />
              {errors.email && touched.email && <h1 className="text-pink-500">{errors.email}</h1>}
            </div>

            <div>
              <Typography>Select your habits</Typography>
              <Checkbox
                onChange={handleChange}
                label='Dancing'
                value={'dancing'}
                name="habits"
              />
              <Checkbox
                onChange={handleChange}
                label='Singing'
                value={'singing'}
                name="habits" />
              {errors.habits && touched.habits && <h1 className="text-pink-500">{errors.habits}</h1>}
            </div>

            <div>
              <Typography>Select your Gender</Typography>
              <Radio
                onChange={handleChange}
                label='Male'
                value={'male'}
                color="blue"
                name="gender"
              />
              <Radio
                onChange={handleChange}
                label='Female'
                color="pink"

                value={'female'}
                name="gender" />
              {errors.gender && touched.gender && <h1 className="text-pink-500">{errors.gender}</h1>}
            </div>

            <div>
              <Select

                onChange={(e) => setFieldValue('country', e)}
                name="country"
                label="Select Country">
                <Option value="India">India</Option>
                <Option value="china">China</Option>
                <Option value="Nepal">Nepal</Option>

              </Select>
              {errors.country && touched.country && <h1 className="text-pink-500">{errors.country}</h1>}
            </div>

            <div>
              <Textarea label="detail" name="detail" onChange={handleChange} />
              {errors.detail && touched.detail && <h1 className="text-pink-500">{errors.detail}</h1>}

            </div>

            {/* <div>
              <Switch
                onChange={handleChange}
                name="accept"
                label='Accept Terms and Condition' />
            </div> */}

            <Button type="submit">Submit</Button>

          </form>
        )}


      </Formik>





    </div>
  )
}