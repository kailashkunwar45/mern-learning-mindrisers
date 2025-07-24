import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchInput({ isNav, setSearchParams }) {
  const nav = useNavigate();

  return (
    <div className="p-5">
      <Formik
        initialValues={{
          query: ""
        }}
        onSubmit={(values, { resetForm }) => {
          if (isNav) {
            nav(`/search/?query=${values.query}`);
          } else {
            setSearchParams({ query: values.query });
          }
          resetForm();
        }}
      >
        {({ handleChange, values, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="flex gap-5">
            <div className="w-[300px]">
              <Input
                name="query"
                value={values.query}
                onChange={handleChange}
                label="Search Drink"
                icon={<i className="fas fa-search" />}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}
