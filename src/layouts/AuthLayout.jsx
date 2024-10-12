import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"

export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center bg-white md:rounded-xl justify-center md:gap-16">
        <img src="https://pub-bca0576333cb44d6b698d25324b2366a.r2.dev/assets/fastie.png" alt="Imagen de la mascota de Fastie, es una hamburguesa animada" className="max-w-xs pt-5 md:pt-0" />

        <div className="py-10">
            <Outlet />
        </div>
    </main>
  )
}
