import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FavoritesContext } from "../context/FavoritesContext";
import { useContext } from "react";
import Spinner from '../components/Spinner';

const RecipeDetail = () => {
  const { id } = useParams();
  console.log(id,id,id,);
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const favorited = isFavorite(id);
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  console.log(data);

  if (loading) return <Spinner></Spinner>;
  if (error || !data?.meals) return <p>Error loading recipe.</p>;

  const recipe = data.meals[0];
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div>
      <h2>INGREDIENTS</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>INSTRUCTIONS</h2>
      <p>{recipe.strInstructions}</p>
      <button
        onClick={() =>
          favorited ? removeFromFavorites(id) : addToFavorites(recipe)
        }
      >
        {favorited ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default RecipeDetail;
