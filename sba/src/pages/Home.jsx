import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );
  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div>
      <h1>CATEGORIES</h1>
            {data?.meals?.map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
    </div>
  );
};

export default Home;
