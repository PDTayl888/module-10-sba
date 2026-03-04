import "./App.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
