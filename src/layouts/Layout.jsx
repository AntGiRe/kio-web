import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ProductsDrawer from '../components/Drawer'

export default function Layout() {
  return (
    <div className='md:flex'>
      <ProductsDrawer />
      <Sidebar />
      <main className='flex-1 h-screen overflow-y-scroll p-3'>
        <Outlet />
      </main>
    </div>
  )
}
