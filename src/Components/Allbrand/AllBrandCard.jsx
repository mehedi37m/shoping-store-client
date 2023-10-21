import React from "react";
import { Link } from "react-router-dom";

const AllBrandCard = ({item}) => {





  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500" className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={item.image_url}
          alt="Shoes"
          className="rounded-xl h-44 w-full"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-extrabold text-blue-900">{item.name}</h2>
         <p className="font-bold text-blue-900">Price:${item.price}</p>
         <p className="font-bold text-blue-900">Rating :{item.rating}*</p>
        <div className="card-actions">
        
         <Link to={`/details/${item._id}`}> <button className="btn btn-primary font-extrabold bg-blue-500 border-none">Details</button></Link>
         <Link to={`/updateProduct/${item._id}`}> <button className="btn btn-primary font-extrabold bg-blue-500 border-none">UpDate</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AllBrandCard;
