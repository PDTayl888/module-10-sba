import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";

const Category = () => {
  const { categoryName } = useParams();
  console.log(`######## ${categoryName}`)

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
  );

  if (loading)

    return (
      <div>
        LOADING...
      </div>
    );
if (error) return <ErrorMessage message={error} />;
  return (
    <div>
      <h1>
        {categoryName} Recipes
      </h1>

      <div>
        {data.meals.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />))}
      </div>
    </div>
  );
};

export default Category;
