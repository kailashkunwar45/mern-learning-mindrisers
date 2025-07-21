

import { Button, IconButton } from "@material-tailwind/react";
import { useGetBlogsQuery, useLazyGetBlogsQuery } from "./blogApi"
import RemoveButton from "./RemoveButton";
import { useNavigate } from "react-router";

export default function BlogList() {
  const { data, error, isLoading } = useGetBlogsQuery();

  const nav = useNavigate();

  //const [func, { data, error, isLoading }] = useLazyGetBlogsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>
  }



  if (error) {
    return <h1>{error.message || error.data}</h1>
  }


  return (
    <div className="p-5">
      {/* <Button onClick={() => func()} >Click Me</Button> */}
      {data && data.map((blog) => {
        return <div key={blog.id} className="mb-6 shadow p-2 max-w-[400px]">
          <h1 className="text-xl font-semibold">{blog.title}</h1>
          <p className="text-gray-800 italic">{blog.detail}</p>
          <div className="flex justify-end mt-2 gap-5">
            <IconButton onClick={() => nav(`/update-form/${blog.id}`)} size="sm" >
              <i className="fas fa-edit" />
            </IconButton>
            <RemoveButton id={blog.id} />
          </div>
        </div>
      })}

    </div>
  )
}