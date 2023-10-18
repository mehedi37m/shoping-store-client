import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn, user, setUser,signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // const [user, setUser] = useState(null);

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password)

    signIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate login

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "please enter your email and password",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const logInUser = result.user;
        setUser(logInUser);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(user.displayName);
  // console.log(user);

  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center  ">
              <h1 className="text-5xl font-bold text-blue-900 lg:pt-10">
                Login now!
              </h1>
             
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="font-bold text-center mb-5">
                No Account ?{" "}
                <Link to="/register" className="underline text-blue-400">
                  Register
                </Link>
              </p>

              <p className="mb-8 ml-8 text-center">
              <div className="flex justify-center">
              <FcGoogle className=" text-2xl"></FcGoogle>
              </div>
                <Link
                  onClick={handleGoogleSignIn}
                  className="underline text-blue-500 text-xl"
                >
                  Google
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
