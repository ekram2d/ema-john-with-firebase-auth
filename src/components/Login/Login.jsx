import React, { useContext, useState } from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
const Login = () => {
    const [error,setError]=useState('');
    const {logIn} =useContext(AuthContext);
   const navigate=useNavigate();
   const location=useLocation();
   const from = location.state?.from?.pathname || '/' ;
   
    const handleform = (event) => {
        event.preventDefault();
        setError("");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        logIn(email,password)
        .then((result)=>{
            const logUser=result.user;
            navigate(from,{replace:true})
            // console.log(logUser);
        })
        .catch(error=>{
            setError(error.message);
            
        })
    }
    return (
        <div className='mt-10 '>
            <h1 className='text-center text-2xl'>Login</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                <form onSubmit={handleform} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered"  required/>
                        
                    </div>
                    
                    <input type="submit" className='btn' value="Login"/>
                   
                </form>
                <label className=" text-center">
                    <Link to="/signup" className="label-text-alt link link-hover">new to eme-jhon? <button className='btn-link'>creat new account</button></Link>
                </label>
            </div>
        </div>
    );
};

export default Login;