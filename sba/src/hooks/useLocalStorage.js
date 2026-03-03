import { useState, useEffect } from "react";

const useLocalStorage = () => {
    const [saveRecipes, setSaveRecipes] = useState(() => {
        const item = localStorage.getItem('fav-recipes');
       
    });

};

export default useLocalStorage;