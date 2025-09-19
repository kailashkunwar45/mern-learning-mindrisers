import axios from 'axios';
import React from 'react'
import EditForm from '../../../../components/EditForm';





export default async function Page({ params }) {
  const { id } = await params;
  const response = await axios.get(`https://6878a22f63f24f1fdc9ec3af.mockapi.io/employees/${id}`);

  return (
    <div>

      <EditForm employee={response.data} />

    </div>
  )
}