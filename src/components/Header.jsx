import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header className='bg-black text-white flex gap-5 p-4 font-bold italic justify-end'>
        <NavLink to='/'
          className={({ isActive }) =>
            isActive ? 'underline underline-offset-4 flex items-center gap-3' : ''
          }
        >
          Popular

        </NavLink>

        <NavLink to='/alcoholic'
          className={({ isActive }) =>
            isActive ? 'underline underline-offset-4 flex items-center gap-3' : ''
          }
        >
          Alcholic

        </NavLink>
        <NavLink to='/non-alcoholic'
          className={({ isActive }) =>
            isActive ? 'underline underline-offset-4 flex items-center gap-3 ' : ''
          }
        >
          Non-Alcholic

        </NavLink>





      </header>
    </div>
  )
}
