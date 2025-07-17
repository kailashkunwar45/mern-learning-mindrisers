import Header from './Header'
import { Outlet } from 'react-router'

export default function RootLayOut() {
  return (
    <div>
      <Header />
      <Outlet />

    </div>
  )
}