import React, { useState } from 'react';
import styles from './Register.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Register() {

  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState("")

    async function callRegister(reqBody){
      setErrorMessage("");
      setIsLoading(true);
      console.log(reqBody);
      let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, reqBody)
      .catch(err => {
        setIsLoading(false);
        setErrorMessage(err.response.data.message)})
      console.log(data);
      if(data.message == "success"){
        navigate('/Login')
        console.log("yesss");
        }
      }


// V A L I D A T I O N //
  const validationSchema = Yup.object({
    name: Yup.string().min(3,"name is too short").max(10, "name is too long").required("Name is required"),
    email: Yup.string().email('email not valid').required("email is required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "invalid password").required("password is required"),
    rePassword: Yup.string().oneOf([Yup.ref('password'), "password and repassword should match"]).required("Repassword is required"),
    phone: Yup.string().matches(/^01[0125][0-9]{8}$/,"invalid phone").required("phone is required"),
  })

  const registerForm = useFormik({
    initialValues:{
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: callRegister
  })

  return (
    <>
      <Helmet>
        <title>Register page</title>
      </Helmet>

    <div className="w-50 mx-auto">
    <h3 className='mb-3'>Register Now:</h3> 
    {errorMessage ?<div className='alert alert-danger'>{errorMessage}</div> : null}
    <form onSubmit={registerForm.handleSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="fullName" className='mb-1'>Full Name</label>
        <input type="text" id="fullName" value={registerForm.values.name} name='name' className='form-control' onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
     {registerForm.errors.name && registerForm.touched.name ? <div className='alert alert-danger'> {registerForm.errors.name}</div> : null}
      </div>
      <div className="form-group mb-2">
        <label htmlFor="Email" className='mb-1'>Email</label>
        <input type="email" id="Email" value={registerForm.values.email} name='email' className='form-control' onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
     {registerForm.errors.email && registerForm.touched.email ? <div className='alert alert-danger'>{registerForm.errors.email}</div> : null}
      </div>
      <div className="form-group mb-2">
        <label htmlFor="Password" className='mb-1'>Password</label>
        <input type="password" id="Password" value={registerForm.values.password} name='password' className='form-control' onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
     {registerForm.errors.password && registerForm.touched.password ? <div className='alert alert-danger'>{registerForm.errors.password}</div> : null}
      </div>
      <div className="form-group mb-2">
        <label htmlFor="RePassword" className='mb-1'>RePassword</label>
        <input type="password" id="RePassword" value={registerForm.values.rePassword} name='rePassword' className='form-control' onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
        {registerForm.errors.rePassword && registerForm.touched.rePassword ? <div className='alert alert-danger'>{registerForm.errors.rePassword}</div> : null}
      </div>
      <div className="form-group mb-2">
        <label htmlFor="Phone" className='mb-1'>Phone</label>
        <input type="tel" id="Phone" value={registerForm.values.phone} name='phone' className='form-control' onChange={registerForm.handleChange} onBlur={registerForm.handleBlur}/>
        {registerForm.errors.phone && registerForm.touched.phone? <div className='alert alert-danger'>{registerForm.errors.phone}</div> : null}
      </div>
      <button className='btn bg-main text-white d-block ms-auto' disabled={!(registerForm.isValid && registerForm.dirty)}>
      {isLoading ? <i className='fa fa-spinner fa-spin'></i> : "Register" }
        </button>
    </form>
    </div>    
    </>
  )
}

