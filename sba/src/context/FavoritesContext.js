import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export const FavoritesProvider = () => {
    const [favorite, setFavorites] = useLocalStorage('')

}