

import { Button, Checkbox, Input, Option, Radio, Select, Switch, Textarea, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { valSchema } from "./UserForm";
import { updateUser } from "./userSlice";



export default function UpdateForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { users } = useSelector((state) => state.userSlice);
  const user = users.find((user) => user.id === id);


  return (
    <div className="p-5">

      <Formik
        initialValues={{
          username: user.username,
          email: user.email,
          habits: user.habits,
          gender: user.gender,
          country: user.country,
          detail: user.detail,

        }}

        onSubmit={(val, { resetForm }) => {
          dispatch(updateUser({ ...val, id: id }));
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
                checked={values.habits.includes('dancing')}
                value={'dancing'}
                name="habits"
              />
              <Checkbox
                onChange={handleChange}
                label='Singing'
                value={'singing'}
                checked={values.habits.includes('singing')}
                name="habits" />
              {errors.habits && touched.habits && <h1 className="text-pink-500">{errors.habits}</h1>}
            </div>

            <div>
              <Typography>Select your Gender</Typography>
              <Radio
                onChange={handleChange}
                label='Male'
                checked={values.gender === 'male'}
                value={'male'}
                color="blue"
                name="gender"
              />
              <Radio
                onChange={handleChange}
                label='Female'
                color="pink"
                checked={values.gender === 'female'}
                value={'female'}
                name="gender" />
              {errors.gender && touched.gender && <h1 className="text-pink-500">{errors.gender}</h1>}
            </div>

            <div>
              <Select
                value={values.country}
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
              <Textarea label="detail"
                value={values.detail}
                name="detail" onChange={handleChange} />
              {errors.detail && touched.detail && <h1 className="text-pink-500">{errors.detail}</h1>}

            </div>



            <Button type="submit">Submit</Button>

          </form>
        )}


      </Formik>





    </div>
  )
}