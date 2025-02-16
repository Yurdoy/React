import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/orderStatus";

function App() {
  const items = ["Shoes", "Hat", "Dress"];
  const orders = [
    { orderId: 1, status: "Processed" },
    { orderId: 2, status: "Delivery in progress" },
    { orderId: 3, status: "Delivered" },
  ];
  return (
    <>
      <Greeting name="Yuriy" />
      <h3>List of Items</h3>
      <ShoppingList items={items} />
      <h3>Orders Status</h3>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </>
  );
}

export default App;
