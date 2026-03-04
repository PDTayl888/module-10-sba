import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export const FavoritesProvider = () => {
    const [saveRecipes, setSaveRecipes] = useLocalStorage([]);

    const addToFavorites = (recipe) => {
        setSaveRecipes(...saveRecipes, recipe);
    }

    const removeFromFavorites = (recipe) = {
        setSaveRecipes(saveRecipes.filter(recipe => ))
    }

    isFavorite = () => {
        return 
    }

    return (
        <FavoritesContext.Provider value={{ saveRecipes, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}