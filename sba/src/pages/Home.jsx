import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Spinner from '../components/Spinner';

const Home = () => {
  console.log("@@@@ HOME LOADED @@@@@@@");
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );

  const showCategories = data?.categories?.slice(0, 15) || [];
  //console.log(showCategories[0].strCategory);

  if (loading) return <Spinner></Spinner>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <p>CATEGORIES</p>
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
