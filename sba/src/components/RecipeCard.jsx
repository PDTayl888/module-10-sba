import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

const RecipeCard = ({ recipe }) => {
    const { idMeal, strMeal, strMealThumb } = recipe;
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
    const favorited = isFavorite(idMeal);
    const toggleFav = (e) => {
        e.preventDefault();

        if (favorited) {
            removeFromFavorites(idMeal);
        } else {
            addToFavorites(idMeal);
        }
    }

    return (
        <div>
            <img src={strMealThumb} alt={strMeal} />
            <h2>{strMeal}</h2>
            <button onClick={toggleFav}></button>
            {favorited ? 'yes' : 'no '}
        </div>
    )
};

export default RecipeCard;