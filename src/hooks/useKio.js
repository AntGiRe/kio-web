import { useContext } from "react";
import KioContext from "../context/KioProvider";

const UseKio = () => {
    return useContext(KioContext)
}

export default UseKio