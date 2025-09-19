'use client';

import { useSession } from 'next-auth/react';
import React from 'react'

export default function Page() {
  const m = useSession();
  console.log(m);
  // const session = await getServerSession(option);

  // if (!session) {
  //   redirect('/');
  // }
  return (
    <div>
      <h1>This is post page</h1>


    </div>
  )
}