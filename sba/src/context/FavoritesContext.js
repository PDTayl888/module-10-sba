import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export const FavoritesProvider = () => {
    const [saveRecipes, setSaveRecipes] = useLocalStorage('');

    const addToFavorites = () => {

    }

    const removeFromFavorites = () = {

    }

    isFavorite = () => {

    }

    return (
        <FavoritesContext.Provider value={{ saveRecipes, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}