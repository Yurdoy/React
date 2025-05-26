import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/header/Header";
import MainPage from "./pages/MainPage";
import CategoriesPage from "./pages/CategoriesPage";
import AllProductsPage from "./pages/AllProductsPage";
import AllSalesPage from "./pages/AllSalesPage";
import CartPage from "./pages/CartPage";
import CategoryProducts from "./pages/CategoryProducts";
import Footer from "./components/layouts/footer/Footer";

function App() {
  return (
    <>
      <Header cartItemCount={0} />
      <main>
        <Routes>
          <Route>
            <Route path="/" element={<MainPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:id" element={<CategoryProducts />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/sales" element={<AllSalesPage />} />
            <Route path="/categories/:id" element={<CategoryProducts />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
