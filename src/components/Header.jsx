import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-black text-white px-5 py-2 flex items-baseline justify-between">
      <h1 className="text-2xl">Redux</h1>
      <nav>
        <NavLink to={'/add-user'}>Add tasks</NavLink>
      </nav>

    </div>
  )
}