import axios from "axios";

const authActions = {
        getCountryNames: () => {
            return async (dispatch, getState) => {
            let response = await   axios.get('https://restcountries.com/v2/all?fields=name')
            //chequear fetch console.log(response.data)
            dispatch({ type: "Get_countryNames", payload: response.data});
        };
  },
};
export default authActions;