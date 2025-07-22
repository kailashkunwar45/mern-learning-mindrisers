import { Input } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router'

export default function SearchInput({ isNav }) {
  const nav = useNavigate();
  return (
    <div>
      <Formik
        initialValues={
          {
            query: ''
          }
        }
        onSubmit={(val, { resetForm }) => {
          if (isNav) nav(`/movie-search/${val.query}`)
          resetForm();
        }}

      >
        {({ handleChange, values, handleSubmit }) => (
          <form

            onSubmit={handleSubmit} className='p-5 sticky top-0'>
            <div>
              <Input

                label='Search'
                value={values.query}
                onChange={handleChange}
                name='query'

              />
            </div>
          </form>


        )}
      </Formik>
    </div>
  )
}
