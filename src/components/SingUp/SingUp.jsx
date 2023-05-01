import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
const SingUp = () => {

      const { createUser}=useContext(AuthContext);
      const [error,setError]=useState('');
      const handleSignUp=(event)=>{
            setError("");
event.preventDefault();
const form=event.target;
const email=form.email.value;
const password=form.password.value;
const confirm=form.confirm.value;
if(password!==confirm) {
      setError("your password not match");
      return 
}
createUser(email,password)
.then((result)=>{
      const singUser=result.user;
      console.log(singUser);
})
.catch((error)=>{
      setError(error.message);
})
      }
      return (
            <div className='mt-10'>
                  <h1 className='text-center text-2xl '>Sign Up</h1>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                        <form  onSubmit={handleSignUp} className="card-body">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered"  required/>
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered"  required/>

                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirm' placeholder="password" className="input input-bordered" required />

                              </div>

                              <input type="submit" className='btn' value="Sign Up" />

                        </form>
                        <label className=" text-center">
                              <Link to="/login" className="label-text-alt link link-hover">Already acount? <button className='btn-link'>go to log in</button></Link>
                        </label>

                        <div className='text-center text-red-700'>
                              {error&& error}
                        </div>
                  </div>
            </div>
      );
};

export default SingUp; <h1>sign up here </h1>