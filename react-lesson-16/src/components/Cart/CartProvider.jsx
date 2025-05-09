import React, { createContext, useContext } from "react";

const CartProvider = ({ children }) => {
  const CartContext = createContext();
  const [cartItems, setCartItems] = useState([]);
  const URL = "https://67daf7d11fd9e43fe4730ef5.mockapi.io/api/march-17/cart";
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        setCartItems(response.data);
      } catch (error) {
        console.error("Error receiving data", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await axios.post(URL, product);
      setCartItems((prevItem) => [...prevItem, response.data]);
    } catch (err) {
      console.error("Error receiving data", err);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      await axios.delete(URL + `/${productId}`);
      setCartItems((prevItem) =>
        prevItem.filter((item) => item.id !== productId)
      );
    } catch (err) {
      console.error("Error deleting item from cart");
    }
  };
  return (
    <div>
      <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
