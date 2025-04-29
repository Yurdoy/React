import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import CartProvider from "./Components/Cart/CartProvider";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
