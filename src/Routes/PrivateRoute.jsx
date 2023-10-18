import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const PrivateRoute = ({children}) => {

const {user, loading} = useContext(AuthContext);
const location = useLocation();

if(loading){
    return <div  >
       {/* <Lottie animationData={loadingLottie}></Lottie> */}
       <h1 className='text-3xl font-extrabold'>Loading</h1>
    </div>
}
  if (user){
    return children;
  }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;