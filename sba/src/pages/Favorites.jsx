import { useContext } from 'react';
import RecipeCard from "../components/RecipeCard";
import FavoritesProvider from '../context/FavoritesContext';

const Favorites = () => {
    const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useContext(FavoritesProvider);

  return (
    <div>
      <h1>My Favorite Recipes</h1>

      {favorites.length === 0 ? (
        <p>ADD RECIPES</p>
      ) : (
        <div>
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
