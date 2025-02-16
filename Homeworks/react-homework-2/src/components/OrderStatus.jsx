function OrderStatus({ orderId, status }) {
  return (
    <div className="OrderStatus">
      <p>
        Order {orderId}: {status}
      </p>
    </div>
  );
}

export default OrderStatus;
