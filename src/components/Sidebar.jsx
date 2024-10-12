import { Button } from "@material-tailwind/react"
import CategoriesList from "../views/CategoriesList"

export default function Sidebar() {
  return (
    <aside className="hidden md:w-72 bg-white min-h-screen md:flex flex-col">
      <div className="p-2">
        <img src="https://pub-bca0576333cb44d6b698d25324b2366a.r2.dev/assets/logo500.png" className="w-48 mx-auto" alt="Imagen de la mascota de Fastie, es una hamburguesa animada" />
      </div>

      <div className="flex-grow">
        <CategoriesList/>
      </div>
      <div className="p-4">
        <Button color="red" className="w-full">Leave Order</Button>
      </div>
    </aside>
  )
}
