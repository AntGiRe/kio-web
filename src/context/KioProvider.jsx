import { createContext } from "react"

const KioContext = createContext();

const KioProvider = ({children}) => {
    const hola = "hola";
    return (
        <KioContext.Provider
            value={{
                hola
            }}
        >{children}</KioContext.Provider>
    )
}

export {
    KioProvider
}
export default KioContext