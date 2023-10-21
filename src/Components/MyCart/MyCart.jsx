import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";


const MyCart = () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://shoping-store-server-7dx1wqdra.vercel.app/productCart`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCart(data);
      });
  }, [loading]);

  const handleDelete = (_id) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://shoping-store-server-7dx1wqdra.vercel.app/productCart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setLoading(true);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto">
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-item-center">
        {cart.map((item, index) => (
          <div key={index} item={item}>
            <div>
          
            <div className="card card-compact glass w-96 bg-base-100 shadow-xl">
                  <figure><img className='h-60 w-full' src={item.image_url} alt="Shoes" /></figure>
                <div className="card-body">
              <h2 className="card-title text-blue-900">{item.name}</h2>
            
            <div className="card-actions justify-end">
            <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-sm bg-red-600 text-white"
              >
                X
              </button>
                </div>
               </div>
               </div>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
