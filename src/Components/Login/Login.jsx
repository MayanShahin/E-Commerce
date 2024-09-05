import React, { useContext, useState } from 'react';
import styles from './Login.module.css';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import { TokenContext } from '../../Context/Token';
import { Helmet } from 'react-helmet';

export default function Login() {
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState("")

  let {setToken} = useContext(TokenContext)

    async function callLogin(reqBody){
      setErrorMessage("");
      setIsLoading(true);
      console.log(reqBody);
      let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, reqBody)
      .catch(err => {
        setIsLoading(false);
        setErrorMessage(err.response.data.message)})
      console.log(data);
      if(data.message == "success"){
        localStorage.setItem("userToken", data.token)
        setToken(data.token)
        navigate('/home')
        console.log("yesss");
        }
      }


// V A L I D A T I O N //
  const validationSchema = Yup.object({
    email: Yup.string().email('email not valid').required("email is required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "invalid password").required("password is required"),
  })

  const LoginForm = useFormik({
    initialValues:{
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: callLogin
  })

  return ( 
    <>
      <Helmet>
        <title>Login page</title>
      </Helmet>

    <div className="w-50 mx-auto">
    <h3 className='mb-3'>Login Now:</h3> 
    {errorMessage ?<div className='alert alert-danger'>{errorMessage}</div> : null}
    <form onSubmit={LoginForm.handleSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="Email" className='mb-1'>Email</label>
        <input type="email" id="Email" value={LoginForm.values.email} name='email' className='form-control' onChange={LoginForm.handleChange} onBlur={LoginForm.handleBlur}/>
     {LoginForm.errors.email && LoginForm.touched.email ? <div className='alert alert-danger'>{LoginForm.errors.email}</div> : null}
      </div>
      <div className="form-group mb-2">
        <label htmlFor="Password" className='mb-1'>Password</label>
        <input type="password" id="Password" value={LoginForm.values.password} name='password' className='form-control' onChange={LoginForm.handleChange} onBlur={LoginForm.handleBlur}/>
     {LoginForm.errors.password && LoginForm.touched.password ? <div className='alert alert-danger'>{LoginForm.errors.password}</div> : null}
      </div>
      <button className='btn bg-main text-white d-block ms-auto'>
      {isLoading ? <i className='fa fa-spinner fa-spin'></i> : "Login" }
        </button>
    </form>
    </div>    
    </>
  )
}

