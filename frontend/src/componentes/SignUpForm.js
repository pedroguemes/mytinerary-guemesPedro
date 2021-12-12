import React, { useEffect, useRef } from "react";
import CalltoSign from "./CalltoSign";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import {Link} from 'react-router-dom'

function SignUpForm(props) {
  const { getCountryNames, countryNames, cargarUser, newUser } = props;

    const inputFirstName = useRef()
    const inputLastName = useRef()
    const inputUserMail = useRef()
    const inputPassword = useRef()
    const inputImagenUser = useRef()
    const inputUserCountry = useRef()

  const handleSubmit = async (
    firstName,
    lastName,
    userMail,
    password,
    imagenUser,
    userCountry
  ) => {
  
    // console.log(firstName)
    
    const errores = await cargarUser(
      firstName, lastName, userMail, password, imagenUser, userCountry);
  };


 const handleSubmitInputs = (e)=> {
     e.preventDefault()
     handleSubmit(
        inputFirstName.current.value,
        inputLastName.current.value,
        inputUserMail.current.value,
        inputPassword.current.value,
        inputImagenUser.current.value,
        inputUserCountry.current.value)

        inputFirstName.current.value =""
        inputLastName.current.value =""
        inputUserMail.current.value =""
        inputPassword.current.value =""
        inputImagenUser.current.value =""
        inputUserCountry.current.value =""
 }

  // console.log(countryNames)
  
  useEffect(
    () => getCountryNames(),
    [],
    window.scroll({ left: 0, top: 145, behavior: "smooth" })
  );

  return (
    <>
      <div className="formcontainer">
        <CalltoSign />
        {/* <div>
                        <p>hola</p>
                    </div> */}
        <div className="formsignup">
          <div className="containerinterno">
            {/* <div>
                                        <p>hola</p>
                                    </div> */}
            <div>
              <form onSubmit={handleSubmitInputs}>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    ref = {inputFirstName}                 
                    placeholder="First name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    ref = {inputLastName}
                    placeholder="Last name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="userMail"
                    ref = {inputUserMail}
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                   ref = {inputPassword}
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="imagenUser"
                    ref = {inputImagenUser}
                    placeholder="Profile picture image Url"
                  />
                </div>
                <div>
                  <select
                    type="text"
                    name="userCountry"
                    ref = {inputUserCountry}
                    placeholder="Country"
                  >
                    <option>Country</option>
                    {countryNames.map((countryName) => (
                      <option key={countryName.name}>{countryName.name}</option>
                    ))}
                  </select>
                </div>
                    <input className="formButtons" type='submit' value='Create account'></input>
              </form>
              {/* <div className="formButtons"> */}
                {/* <button onClick={handleSubmit()}>Create account</button> */}
              {/* </div> */}
              <p> ..Already a member?, <Link className="signinhere" to="/signin">Sign In here ⬅</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    countryNames: state.authReducer.countryNames,
    newUser: state.authReducer.user,
  };
};

const mapDispatchToProps = {
  getCountryNames: authActions.getCountryNames,
  cargarUser: authActions.cargarUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
