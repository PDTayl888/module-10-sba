import FavoritesProvider from "../context/FavoritesContext";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strMealThumb } = recipe;
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const favorited = isFavorite(idMeal);
  const toggleFav = (e) => {
    e.preventDefault();

    if (favorited) {
      removeFromFavorites(idMeal);
    } else {
      addToFavorites(recipe);
    }
  };

  return (
    <div style={{ border: '5px solid white'}}>
      <Link to={`/recipe/${idMeal}`}>
        <img
          style={{
            width: "50%",
            maxWidth: "200px",
            height: "150px",
            objectFit: "cover",
          }}
          src={strMealThumb}
          alt={strMeal}
        />
        <h2>{strMeal}</h2>
      </Link>
      <button onClick={toggleFav}>{favorited ? "unfav" : "fav"}</button>
      <p>Favorited: {favorited ? "yes" : "no "}</p>
    </div>
  );
};

export default RecipeCard;
