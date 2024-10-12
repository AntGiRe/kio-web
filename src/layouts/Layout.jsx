import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ProductsDrawer from '../components/Drawer'

export default function Layout() {
  return (
    <div className='md:flex'>
        <Sidebar />
        <Outlet />
    </div>
  )
}
