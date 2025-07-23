import { Button, Input } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate, useSearchParams } from 'react-router'

export default function SearchInput({ isNav, setSearchParams }) {

  const nav = useNavigate();
  return (
    <div className='flex'>
      <Formik
        initialValues={
          {
            query: ''
          }
        }
        onSubmit={(val, { resetForm }) => {
          if (isNav) {
            nav(`/movie-search/?query=${val.query}`)
          } else {
            setSearchParams({ query: val.query })
          }

          resetForm();
        }}

      >
        {({ handleChange, values, handleSubmit }) => (
          <form

            onSubmit={handleSubmit} className='p-5 sticky top-0 flex gap-5'>
            <div className='w-[300px]'>
              <Input

                label='Search'
                value={values.query}
                onChange={handleChange}
                name='query'
                icon={<i className='fas fa-search' />}

              />
            </div>
            <Button type='submit'>Search</Button>

          </form>


        )}
      </Formik>

    </div>
  )
}
