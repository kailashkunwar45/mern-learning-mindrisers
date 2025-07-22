


import { Input } from "@material-tailwind/react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-black text-white px-5 py-2 flex items-baseline justify-between sticky top-0">
      <h1 className="text-2xl">RTK Query</h1>
      <nav className="space-x-9">
        <NavLink to={'/popular'}>Popular</NavLink>
        <NavLink to={'/top_rated'}>TopRated</NavLink>
        <NavLink to={'/upcoming'}>Upcoming</NavLink>

      </nav>

    </div>
  )
}