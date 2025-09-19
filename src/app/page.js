

// export const revalidate = 5;
//export const dynamic = 'force-dynamic';

import { Suspense } from "react";
import Employees from "../components/Employees";
import Loading from "./loading";

export default function Page() {

  return (
    <div className="p-5">
      <h1>Hello jii  </h1>
      <Suspense fallback={<Loading />}>
        <Employees />
      </Suspense>





    </div>
  )
}