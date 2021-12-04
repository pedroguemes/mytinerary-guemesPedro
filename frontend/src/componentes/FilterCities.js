const FilterCities = (props) => {

    const { cities, filtro} = props;

    return (
        <div className="contenedor-botones">
            <input type="text" className="input" autoComplete="off" name="filtro" onChange={(e) => filtro(cities, e.target.value)} placeholder="Search" />
        </div>
    )
}

export default FilterCities