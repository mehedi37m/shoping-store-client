
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {

  const { user, logOutEmail, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutEmail()
      .then((result) => {
        console.log(result.user);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };





  
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
      <NavLink to='/addProduct'>Add Product</NavLink>
      </li>
    </>
  );

  return (
    <div className="pb-10 ">
      <div className="navbar bg-cyan-400 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className=" normal-case font-extrabold text-blue-900 text-3xl">
            Sports shoes
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
       
        <div className="flex gap-2 items-center">
            <p>{user && user.displayName}</p>
            {user && (
              <div
                title={user.displayName}
                className="mask h-12 w-12 mask-circle"
              >
                <img src={user.photoURL} />
              </div>
            )}
          </div>

          {user ? (
            <button onClick={handleLogOut} className="btn btn-secondary border-none">
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Login Now</button>
            </Link>
          )}
    
        </div>
      </div>
    </div>
  );
};

export default Navbar;
