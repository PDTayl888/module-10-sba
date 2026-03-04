import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  console.log("@@@@ HOME LOADED @@@@@@@");
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );

  const showCategories = data?.categories?.slice(0, 2) || [];
  //console.log(showCategories[0].strCategory);

  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR Home</p>;

  return (
    <div>
      <h3>CATEGORIES</h3>
      <ul>
        {showCategories.map((cat) => (
          <li key={cat.idCategory}>
            <Link to={`/category/${cat.strCategory}`}>{cat.strCategory}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
