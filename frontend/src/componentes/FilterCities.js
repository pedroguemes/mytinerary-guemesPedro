import { useEffect } from "react";


const FilterCities = (props) => {
  const { cities, filtro } = props;
  
  useEffect(()=> window.scroll({ left: 0, top: 450, behavior: "smooth" }) )

  return (
    <div className="divCitiesSearch">
      <input
        type="text"
        className="citiesSearch"
        placeholder="Search Cities :)"
        autoComplete="off"
        name="filtro"
        onChange={(e) => filtro(cities, e.target.value)}
      />
    </div>
  );
};

export default FilterCities;
