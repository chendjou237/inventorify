import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import getTest from '../functions/test';

export default function Root() {
    const [data, setData] = useState<string>('no data');
    useEffect(() => {
      getTest().then((res) => {
        setData(res.message);
      }).catch((err) => {
        setData(err);
      })
    }, []);
  return (
<>
<div className="container">

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <p className="py-6 w-64">This is just a test it was just to check the connection between the backend, the frontend with database through a crud operation</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="let me scam your email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Whats up?" className="input input-bordered" />
          <label className="label">
            {/* <a href="" className="label-text-alt link link-hover">Forgot password?</a> */}
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder= "if you are a girl enter your phone number" className="input input-bordered" />
          <label className="label">
            {/* <a href="" className="label-text-alt link link-hover">Forgot password?</a> */}
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</>
  )
}
