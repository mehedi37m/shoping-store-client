import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../Provider/AuthProvider';



const Register = () => {

const [register, setRegister] = useState('');
const {createUserLogIn , user,setUser } = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();

const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


    
    if(password.length < 6){
      setRegister('password upto 6 characters or longer');
      return;
    }
    else if(!/[A-Z]/.test(password)){
      setRegister('please enter password 1 uppercase');
      return ;
    }
    else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
      setRegister('Password need 1 special character')
      return ;
    }

    setRegister('');

    // create user
    createUserLogIn(email, password)
    .then(result => {
       
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 1500

        })
        // update profile 
        updateProfile(result.user,{
          displayName:name,
          photoURL:photo
        })
        .then((result) => {
          console.log('profile updated');
          setUser(result.user);
        })
        .catch(error => {
          console.log(error)
        })
    })
    .catch(error => {
       
        Swal.fire({
          title: 'Error!',
          text: 'please correct information',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
    })

    navigate(location?.state ? location.state : "/");

}


    return (
        <div>
            
            <div>
          
         

           <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-blue-900 font-bold ">Register now!</h1>
     
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Your full Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="Type Strong Password" className="input input-bordered" required />
          <label className="label">
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      
      <p className='font-bold text-center mb-5'>Already Account ? <Link to="/login" className='underline text-blue-400'>Login</Link></p>

      <div className='px-5 py-3 text-center font-bold text-red-700'>
    {
  register && <p>{register}</p>
 }
    </div>
    </div>
   
  </div>
  
</div>

           </div>

        </div>


        </div>
    );
};

export default Register;