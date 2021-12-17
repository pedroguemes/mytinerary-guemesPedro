import React, { useEffect, useRef, useState } from "react";
import CalltoSign from "./CalltoSign";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login'
// import toasty from "./Toast"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function SignUpForm(props) {
  
  useEffect(
    () => getCountryNames(),
    [],
    window.scroll({ left: 0, top: 145, behavior: "smooth" })
  );
  
   const [ error, setError] = useState({})

console.log(props)

  const { getCountryNames, countryNames, cargarUser} = props;

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
  
    console.log(firstName)
    const cargarUserRes = await cargarUser({firstName, lastName, userMail, password, imagenUser, userCountry});
    // const cargarUserRes = await cargarUser( firstName, lastName, userMail, password, imagenUser, userCountry);
    
    console.log(cargarUserRes)
    console.log(cargarUserRes.error)
    
    // if (cargarUserRes.errores){
      //   cargarUserRes.errores.map(e => toast(e.message,{
        //   position:"bottom-right",
        //   autoClose:4000,
        //   hideProgressBar:false,
        //   newestOnTop:false,
        //   closeOnClick:true,
        //   rtl:false,
        //   pauseOnFocusLoss:false,
        //   draggable:false,
        //   pauseOnHover:false}))
        // }
        
        if (cargarUserRes.error){
      console.log(cargarUserRes.error)
      const error={}
        cargarUserRes.error.forEach(err=>{
          let key = err.context.key
          error[key] = err.message
        })
        console.log(error)
        setError(error)
    }
    
    // else{
    //   const success = "Signed Up successfully."
    //   toast(success,{
    //       position:"bottom-right",
    //       autoClose:4000,
    //       hideProgressBar:false,
    //       newestOnTop:false,
    //       closeOnClick:true,
    //       rtl:false,
    //       pauseOnFocusLoss:false,
    //       draggable:false,
    //       pauseOnHover:false})
        
    //     }
    

  };


  const responseGoogle = async (res) => {
      
      console.log(res)
      let googleUser = {
        firstName:res.profileObj.givenName,
        lastName:res.profileObj.familyName,
        userMail: res.profileObj.email,
        password: res.profileObj.googleId,
        imagenUser:  res.profileObj.imageUrl,
        userCountry:"argentina",
        google: true, 
      }

      //  await cargarUser(googleUser.firstName,googleUser.lastName,googleUser.userMail,googleUser.password,googleUser.imagenUser,googleUser.google)
       await cargarUser(googleUser)
      .then((response) => {
          console.log(response)
          if (response.data.success){
              alert('Your account has been created. 👍')

          }
          else{
          alert(response.map(err =>err.message))
          }

      })
      .catch((error) => {
          console.log(error)
          alert('Something went wrong! Come back later!')

      })

  
}


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
                  {error.firstName && <p>{error.firstName}</p> }
                
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    ref = {inputLastName}
                    placeholder="Last name"
                  />
             {error.lastName && <p>{error.lastName}</p> }
                </div>
                <div>
                  <input
                    type="email"
                    name="userMail"
                    ref = {inputUserMail}
                    placeholder="Email"
                    />
                </div>
                  {error.userMail && <p>{error.userMail}</p> }
                <div>
                  <input
                    type="password"
                    name="password"
                    ref = {inputPassword}
                    placeholder="Password"
                    />
                    {error.password && <p>{error.password}</p> }
                </div>
                <div>
                  <input
                    type="text"
                    name="imagenUser"
                    ref = {inputImagenUser}
                    placeholder="Profile picture image Url"
                    />
                    {error.imagenUser && <p>{error.imagenUser}</p> }
                </div>
                <div>
                  <select
                    type="text"
                    name="userCountry"
                    ref = {inputUserCountry}
                    placeholder="Country"
                    >
                    {error.userCountry && <p>{error.userCountry}</p> }
                    <option>Country</option>
                    {countryNames.map((countryName) => (
                      <option key={countryName.name}>{countryName.name}</option>
                    ))}
                  </select>
                </div>
                    <input className="formButtons" type='submit' value='Create account'></input>
              </form>
              <GoogleLogin className="formButtons"
                clientId="378148122283-d1dapvv0m2ni54j49ol1pk2qbgdoqnms.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'} />
              {/* <div className="formButtons"> */}
                {/* <button onClick={handleSubmit()}>Create account</button> */}
              {/* </div> */}
              <p> ..Already a member?, <Link className="signinhere" to="/signin">Sign In here ⬅</Link></p>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}/> */}
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
  cargarUser: authActions.signUpUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
