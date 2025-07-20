import { Button, Input, Textarea } from "@material-tailwind/react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useAddBlogMutation } from "./blogApi";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export const valSchema = Yup.object({
  title: Yup.string().min(10).max(100).required(),
  detail: Yup.string().min(20).max(500).required()
});

export default function BlogForm() {
  const [addBlog, { isLoading }] = useAddBlogMutation();
  const nav = useNavigate();

  return (
    <div className="max-w-[400px] p-5">
      <Formik
        initialValues={{
          title: '',
          detail: ''
        }}

        onSubmit={async (val) => {
          try {
            await addBlog(val).unwrap();
            toast.success('Blog added successfully');
            nav(-1);
          } catch (err) {
            toast.error('Failed to add blog. Please try again.');
          }
        }}
        validationSchema={valSchema}

      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                onChange={handleChange}
                name="title" label="TItle" value={values.title} />
              {errors.title && touched.title && <h1 className="text-pink-700">{errors.title}</h1>}
            </div>
            <div>
              <Textarea
                onChange={handleChange}
                value={values.detail}
                name="detail" label="Detail" />
              {errors.detail && touched.detail && <h1 className="text-pink-700">{errors.detail}</h1>}
            </div>
            <Button loading={isLoading} type="submit">Submit</Button>
          </form>
        )}

      </Formik>

    </div>
  )
}
