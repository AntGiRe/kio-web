import { Outlet } from "react-router-dom"

export default function AuthLayout() {
    return (
        <>
            <div className="flex justify-center pt-5">
                <img src="https://pub-bca0576333cb44d6b698d25324b2366a.r2.dev/assets/fastie_font.png" className="w-28" alt="Imagen con las letras: Fastie Burgers" />
            </div>
            <main className="mb-36 max-w-4xl m-auto mt-5 md:mt-16 flex flex-col md:flex-row items-center bg-white md:rounded-xl justify-center md:gap-16">
                <img src="https://pub-bca0576333cb44d6b698d25324b2366a.r2.dev/assets/fastie.png" alt="Imagen de la mascota de Fastie, es una hamburguesa animada" className="max-w-xs pt-5 md:pt-0" />

                <div className="py-10">
                    <Outlet />
                </div>
            </main>
        </>
    )
}
