import React, {useEffect} from "react";
import CalltoSign from "./CalltoSign";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";


          
       
function SignUpForm(props) {

    const { getCountryNames,  countryNames } = props;

    console.log(countryNames)

    useEffect(() => getCountryNames(), [])
    
return (    
        <>
          <div className="formcontainer">
              <CalltoSign/>
                    {/* <div>
                        <p>hola</p>
                    </div> */}
                    <div className="formsignup">
                            <div className="containerinterno">
                                    {/* <div>
                                        <p>hola</p>
                                    </div> */}
                                    <div>
                                        <form>
                                                <div>
                                                    <input type="text" name="firstName" placeholder="First name" />
                                                </div>
                                                <div>
                                                    <input type="text" name="lastName" placeholder="Last name" />
                                                </div>
                                                <div>
                                                    <input type="email" name="email" placeholder="Email" />
                                                </div>
                                                <div>
                                                    <input type="password" name="password" placeholder="Password"/>
                                                </div>
                                                <div>
                                                    <input type="url" name="profilePhoto" placeholder="Url profile picture" />
                                                </div>
                                                <div>
                                                    <select type="text" name="country" placeholder="Country">
                                                        <option>Country</option>
                                                        {countryNames.map(countryName => <option key={countryName.name}>{countryName.name}</option>)}
                                                    </select>
                                                </div>
                                            </form>
                                            <div className="formButtons">
                                                <button >Create account</button>
                                            </div>
                                    </div>
                                 </div>
                            </div>
                </div>
            </>      
          )
    }


    const mapStateToProps = (state) => {
        return {
          countryNames: state.authReducer.countryNames,
        };
      };
      
      const mapDispatchToProps = {
        getCountryNames: authActions.getCountryNames,
      };
      
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
      