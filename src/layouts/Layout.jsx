import { Outlet } from 'react-router-dom'
import Index from '../views/Index'

export default function Layout() {
  return (
    <div>
        Layout

        <Outlet />
    </div>
  )
}
