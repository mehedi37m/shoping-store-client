import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {

  const allDetails = useLoaderData();
  const {id} = useParams();

  console.log(id)


//   const intId = parseInt(_id);
 const card = allDetails.find(card =>  card._id == id);


    return (
        <div>
            <div  class="card grid lg:grid-cols-2 card-side  bg-base-100 shadow-xl mb-5">
                
                <div class="p-10">
                  <h2 class="card-title font-bold mb-5 text-3xl">{card.name}</h2>
                  <p className='mb-5'>
                 {card.description}
                  </p>
                  <p className='text-2xl'>
                  <span className='text-blue-900 font-bold'>Price</span> : ${card.price}
                  </p>
                </div>
               
                  <img className="h-96 w-full rounded-r-lg"
                    src={card.image_url}
                    alt="Movie"
                  />
                
                </div>
        </div>
    );
};

export default CardDetails;