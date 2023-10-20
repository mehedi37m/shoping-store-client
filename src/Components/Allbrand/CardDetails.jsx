import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Lottie from "lottie-react";
import hot from "../../assets/hotproduct.json"

const CardDetails = () => {

  const allDetails = useLoaderData();
  const {id} = useParams();

 const card = allDetails.find(card =>  card._id == id);



 const addToCart = () => {

  
  fetch("http://localhost:5000/productCart", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(card),
      })
          .then((res) => res.json())
          .then((result) => {
            if(result.acknowledged){
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'add Successfully',
                showConfirmButton: false,
                timer: 1500
      
              })
            }
          
            console.log(result)
          });
};


    return (
        <div>
            <div  class="card grid lg:grid-cols-2 card-side  bg-base-100 shadow-xl mb-5">
                
                <div class="p-10 bg-slate-50 text-center">
                  <h2 class=" font-bold mb-5 text-3xl">{card.name}</h2>
                  <p className='mb-5'>
                 {card.description}
                  </p>
                  <p className='text-2xl'>
                  <span className='text-blue-900 font-bold'>Price</span> : ${card.price}
                  </p>
                
                  <p className='font-bold py-4'>Rating: {card.rating}* </p>


                  <button onClick={()=>addToCart(card)} className='btn btn-accent '>Add to Cart</button>
                
                </div>
               
                  <img className="h-96 w-full rounded-r-lg"
                    src={card.image_url}
                    alt="Movie"
                  />
                
                </div>

          
          <div>
          <Lottie style={{height:'400px'}} animationData={hot} loop={true} />
          </div>
        </div>
    );
};

export default CardDetails;