import React, { useEffect, useState } from "react";
import AllBrandCard from "./AllBrandCard";

const AllBrand = () => {
  const [first, setFirst] = useState([]);
  useEffect(() => {
    fetch(`https://shoping-store-server-7dx1wqdra.vercel.app/product`).then(res=>res.json()).then(data=>{
        // const nike = data.filter(data=>data.brand == 'Nike')
        setFirst(data)
        // console.log(data)
    })
  }, []);
  return (
    <div className="container mx-auto"> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {first.map((item,index)=>{
           return <AllBrandCard key={index} item={item} />
        })}
      </div>
    </div>
  );
};

export default AllBrand;
