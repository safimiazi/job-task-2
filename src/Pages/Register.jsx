import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <p  className="label-text-alt "><span>Already Register?</span> <Link to={"/login"}><span className="underline">Please Login</span></Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-400 hover:bg-green-500">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;