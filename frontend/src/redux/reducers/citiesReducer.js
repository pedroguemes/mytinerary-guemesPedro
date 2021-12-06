const initialState = {
  cities: [],
  auxiliar: [],
  city: {},
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Get_cities":
      return {
        ...state,
        cities: action.payload,
        auxiliar: action.payload,
      };
    case "filter_cities":
      const filteredCities = action.payload.cities.filter(
        (city) =>
          city.nombreCiudad
            .toLowerCase()
            .trim()
            .startsWith(action.payload.inputValue.toLowerCase().trim()) ||
          city.pais
            .toLowerCase()
            .trim()
            .startsWith(action.payload.inputValue.toLowerCase().trim())
      );
      return {
        ...state,
        cities: filteredCities,
      };
    case "Get_city":
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default citiesReducer;
