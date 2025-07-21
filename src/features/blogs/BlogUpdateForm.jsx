

import { useNavigate, useParams } from "react-router";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { useGetBlogQuery, useUpdateBlogMutation } from "./blogApi";
import { Formik } from "formik";
import { valSchema } from "./BlogForm";
import toast from "react-hot-toast";

export default function BlogUpdateForm() {
  const { id } = useParams();
  const nav = useNavigate();

  const { data, error, isLoading } = useGetBlogQuery(id);
  const [updateBlog, { isLoading: isLoad }] = useUpdateBlogMutation();

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error.message || error.data}</h1>
  }

  return (
    <div>

      {data &&
        <div className="max-w-[400px] p-5">
          <Formik
            initialValues={{
              title: data.title,
              detail: data.detail
            }}

            onSubmit={async (val) => {
              try {
                await updateBlog({
                  id: id,
                  data: val
                }).unwrap();
                toast.success('Blog updated successfully');
                nav(-1);
              } catch (err) {
                console.log(err);
                toast.error(err?.error);
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
                <Button loading={isLoad} type="submit">Submit</Button>
              </form>
            )}

          </Formik>

        </div>}

    </div>
  )
}