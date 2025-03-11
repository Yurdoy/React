import React from "react";

const CitySelector = ({ cities, onSelectCity }) => {
  const handleChange = (event) => {
    const city = cities.find((city) => city.name === event.target.value);
    onSelectCity(city);
  };

  return (
    <div>
      <h2>Choose City</h2>
      <select onChange={handleChange}>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
