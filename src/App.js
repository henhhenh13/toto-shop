import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/product:id" element={<ProductPage />} />
        <Route path="/category-page" element={<CategoryPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;
