const FilterCities = (props) => {
  const { cities, filtro } = props;

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
