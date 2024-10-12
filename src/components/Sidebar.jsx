import { List, ListItem, ListItemPrefix } from "@material-tailwind/react"
import { categories } from "../data/categories"

export default function Sidebar() {
  return (
    <aside className="md:w-72 bg-white min-h-screen">
        <div className="p-2">
            <img src="https://pub-bca0576333cb44d6b698d25324b2366a.r2.dev/assets/logo500.png" className="w-48 mx-auto" alt="Imagen de la mascota de Fastie, es una hamburguesa animada" />
        </div>

        <div>
        <List>
            {categories.map( category => (
                <ListItem>
                <ListItemPrefix>
                  <img src={category.icon} alt="" className="h-5 w-5" />
                </ListItemPrefix>
                {category.name}
              </ListItem>
            ))}
        </List>
        </div>
    </aside>
  )
}
