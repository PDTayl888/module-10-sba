import { useState, useEffect } from "react";

const useLocalStorage = (recipes) => {
    const [saveRecipes, setSaveRecipes] = useState(() => {
        const item = localStorage.getItem('fav-recipes');
        return item ? JSON.parse(item) : recipes;
    });



useEffect(() => {
    localStorage.setItem('fav-recipes', saveRecipes)
}, [saveRecipes]);

    return saveRecipes;
};

export default useLocalStorage;