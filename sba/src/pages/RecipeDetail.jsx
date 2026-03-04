import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const RecipeDetail = () => {
  const { id } = useParams();

  const { data } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

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
    </div>
  );
};

export default RecipeDetail;
