

const initialState = {
    cities:[],
    auxiliar:[],
    city:{}
}

const citiesReducer = (state = initialState, action) => {
        switch (action.type){
            case "Get ciudades":
                return {
                    ...state,
                    cities: action.playload
                }
            default: return state
        }
}

export default citiesReducer