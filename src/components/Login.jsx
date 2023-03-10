import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { authActions } from '../store/AuthSlice';
import { useAppDispatch } from '../store/redux-hooks';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState(false)

    const changeHandler = (e,key) =>{
        if(key==='email'){
            console.log(e);
            setEmail(e.target.value)
            localStorage.setItem('email', email);
            // console.log(email);
            console.log(localStorage.getItem('email'));
        }
        else if(key==='password'){
            setPassword(e.target.value)
            localStorage.setItem('password', password);
            // console.log(password);

        }                     
    }

    const loginHandler=()=>{
      if (email === 'admin@gmail.com' && password === 'admin') {
          dispatch(authActions.login())
        setLoginStatus(true)
        console.log(email);
            // navigate('/admin-panel')
        }
      else {
        dispatch(authActions.login());
        setLoginStatus(true);
        navigate('/home')
        }

    }
    return (
    <div>
        <section className="vh-100">
            
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt='imag'/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <h1 className='mb-1'>SignIn</h1>
        <form>
          {/* Email input  */}
          <div className="form-outline mb-1">
            <input type="email" id="form1Example13" placeholder='Enter Email' className="form-control form-control-lg" required  onBlur={(e)=>{changeHandler(e, 'email')}} />
            <label className="form-label" htmlFor="form1Example13">Email address</label>
          </div>

          {/* Password input */}
          <div className="form-outline mb-1">
            <input type="password" placeholder='Enter Password'  id="form1Example23" className="form-control form-control-lg" required  onBlur={(e)=>{changeHandler(e, 'password')}}/>
            <label className="form-label" htmlFor="form1Example23">Password</label>
          </div>

           {/* Submit button  */}
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={loginHandler}>Sign in</button><br/><hr/>
          <p>Don't have an account?</p><Link to='/register' className='btn btn-warning mt-1'>Create an Account</Link>

        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login