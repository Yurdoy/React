function ShoppingList({ items }) {
  return (
    <div className="ShoppingList">
      {items.length === 0 ? (
        <p>List is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;
