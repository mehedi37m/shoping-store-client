import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import error from "../../src/assets/errornew.json"


const ErrorPage = () => {
    return (
        <div className=" flex justify-center items-center mt-10">

           
            <Link  to="/"><button className='btn btn-success'>Return Home</button></Link>
            
             <div className='flex justify-center items-center h-[100vh]'>
                    <Lottie animationData={error} /> </div>
           
                    
        </div>
    );
};

export default ErrorPage;