/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const {googleSignIn} = useAuth()
  const handleGoogle = ()=>{
    googleSignIn()
    .then((result)=>{
      console.log(result.user)
      if(result?.user?.email)
        {
          const userInfo = {
            name:result?.user?.displayName,
            photoURL: result?.user?.photoURL,
            email:result?.user?.email
          };
          fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
        }
    })
  }
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  Don't have an account?
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover"
                  >
                    Register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="mb-10 text-center">
             
              <button 
              className="btn btn-circle btn-outline"
              onClick={handleGoogle}
              >
              <FcGoogle size={30}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
