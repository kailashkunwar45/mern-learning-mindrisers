

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className=" bg-black text-white px-5 py-2 flex items-baseline justify-between">
      <h1 className="text-2xl">RTK Query</h1>
      <nav>
        <NavLink to={'/add-form'}>Add Blog</NavLink>

      </nav>





    </div>
  )
}