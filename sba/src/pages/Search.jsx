import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
  );

  return (
    <div>
      <h1>SEARCH FOR RECIPE: </h1>
 
      <input
        type="text"
        placeholder="search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <hr />
      <hr />
      {loading && <p>LOADING</p>}
      {error && <p>ERROR: {error}</p>}

      <div>
        {data?.meals?.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default Search;
