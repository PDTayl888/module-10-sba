import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { favorites } = useFavorites();

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
