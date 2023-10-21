import React, { useEffect, useState } from "react";

import AllBrandCard from "../Allbrand/AllBrandCard";

const Category = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("Nike");
  useEffect(() => {
    fetch(`https://shoping-store-server-7dx1wqdra.vercel.app/product`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filterData = data?.filter((d) => d.brand == active);
        setData(filterData);
      });
  }, [active]);
  return (
    <div className="container mx-auto">

     <div>
        <h1 className="font-extrabold text-5xl text-center text-blue-900 my-6">Brand of Category</h1>
     </div>


      <div >
        <div className="border-none bg-red-200 p-5 rounded-xl md:justify-center md:flex gap-[3vw]">
          <button 
            onClick={() => setActive("Nike")}
            className={`${
              active === "Nike"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold justify-center px-3 w-40 h-40 py-2 rounded-lg border flex items-center gap-3`}
          >
            Nike
          </button>
          <button 
            onClick={() => setActive("Adidas")}
            className={`${
              active === "Adidas"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold justify-center px-3 w-40 h-40 py-2 rounded-lg border flex items-center gap-3`}
          >
            Adidas
          </button>
          <button 
            onClick={() => setActive("Reebok")}
            className={`${
              active === "Reebok"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold justify-center px-3 w-40 h-40 py-2 rounded-lg border flex items-center gap-3`}
          >
            ReeBook
          </button>
          <button 
            onClick={() => setActive("Puma")}
            className={`${
              active === "Puma"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold justify-center px-3 w-40 h-40 py-2 rounded-lg border flex items-center gap-3`}
          >
            Puma
          </button>
          <button 
            onClick={() => setActive("Jordan")}
            className={`${
              active === "Jordan"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold justify-center px-3 w-40 h-40 py-2 rounded-lg border flex items-center gap-3`}
          >
           Jordan
          </button>
          <button 
            onClick={() => setActive("NewBalance")}
            className={`${
              active === "NewBalance"
                ? "text-[#3C65F5] border-[#3C65F5]"
                : "border-gray"
            } font-semibold justify-center px-3 w-40 h-40 py-2 rounded-lg border flex items-center gap-3`}
          >
           NewBalance
          </button>



        </div>

        <div  className="grid my-10 grid-cols-1 lg:grid-cols-3 gap-3">
          {data.map((item, index) => {
            return <AllBrandCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
