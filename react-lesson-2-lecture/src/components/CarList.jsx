function CarList() {
  const cars = ["Mercedes", "BMW", "Audi", "Porsche", "Ferrari"];

  return (
    <ul className="CarList">
      {cars.map((car) => (
        <li key={car}>{car}</li>
      ))}
    </ul>
  );
}

export default CarList;
