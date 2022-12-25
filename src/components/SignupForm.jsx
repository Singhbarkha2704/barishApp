import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import {  Link, useNavigate } from 'react-router-dom';

const initialValues = {
    email: '',
    password:''
}

// const onSubmit = values => {

//     console.log(`form values `, values);
//     Navigate('/')
// }

const validationSchema = Yup.object().shape({
    email: Yup
        .string()
        .email("Invalid Email Format!")
        .required("Please Enter Email"),
    
    password: Yup
        .string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .required("Please enter password")
})

const SignupForm = () => {
    const navigate=useNavigate()
    const onSubmit = values => {
    console.log(`form values `, values);
    navigate('/')
}

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    console.log(`errors`, formik.errors);
    console.log(`visited fields`, formik.touched);
    console.log(`is error object empty? `, Object.keys(formik.errors).length === 0 );
  return (
    <div>
        <h1 className='text-success'>Signup Form</h1>

          <form onSubmit={formik.handleSubmit} >
              <div className='mt-2'>
                  <label htmlFor='email'>Email</label><br/>
                  <input
                    type='email'  
                    className='form-control-sm'
                    id='email'
                    name='email'
                    {...formik.getFieldProps('email')}  
                  />
              </div>
              {formik.touched.email && formik.errors.email ? <div className='text-danger bg-gradient'>{formik.errors.email}</div> : null} 
              
              <div className='mt-2'>
                  <label htmlFor='password'>Password</label><br/>
                  <input
                    type='password'  
                    className='form-control-sm'  
                    id='password'
                    name='password'
                    {...formik.getFieldProps('password')}  
                  />
              </div>
              {formik.touched.password && formik.errors.password ? <div className='text-danger bg-gradient'>{formik.errors.password}</div> : null} 
              
              <div className='mt-2'>
                  <button className='btn btn-outline-success' type='submit' disabled={!Object.keys(formik.errors).length === 0}>Signup</button><br /><hr />
                  <p>Already have an account?</p>
                  <Link to='/'>
                      <button className='btn btn-warning'>Login</button> 
                  </Link>
              </div>
          </form> 
    </div>
  )
}

export default SignupForm
//getFieldProps is a function which accepts value of name as a parameter. used in the place of onClick,onBlur