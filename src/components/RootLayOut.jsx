

import { Toaster } from 'react-hot-toast'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import SearchInput from '../features/Search/SearchInput'

export default function RootLayOut() {
  return (
    <div>
      <Header />

      <Toaster />
      <Outlet />
    </div>
  )
}
