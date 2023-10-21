import React from 'react';
import Lottie from "lottie-react";
import shoes from "../../assets/shoes.json"

const ExtraSection = () => {
    return (
        <div className='container mx-auto'>
            
            <div className="my-10">
      <h1 className="text-4xl font-extrabold mb-6 text-center italic text-blue-900">Boost Your body</h1>

      <section className="grid justify-items-center  lg:grid-cols-3 ">
        {/* left side  */}
        <div>
               <div data-aos="fade-down-right" 
          data-aos-easing="linear"
         data-aos-duration="1000" class="card card-side w-96 bg-base-100 shadow-xl mb-5">
                <figure>
                  <img className=" h-full w-full"
                    src="https://i.ibb.co/dGKGC54/alora-griffiths-JNe-YWQncbj8-unsplash.jpg"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title text-blue-900">BODY BUILDING!</h2>
                  <p className='text-blue-900'>
                  Bodybuilding is the best sport when it comes to making your body proportionally shaped and fit.This sport is not only about the body.
                  </p>
                </div>
                </div>

               <div data-aos="fade-up-right" 
          data-aos-easing="linear"
         data-aos-duration="1000" class="card card-side w-96 bg-base-100 shadow-xl">
                <figure>
                  <img className="h-full w-full"
                    src="https://i.ibb.co/4tb8BJ1/tusik-only-4-Pu-Kn-Py9-YAw-unsplash.jpg"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title text-blue-900">OUTSIDE ACTIVITIES</h2>
                  <p className='text-blue-900'>
                  Outdoor activities includes walking, fishing, running, playing, mountain hiking, biking, horseback riding, boating and fishing, picnicking ,swimming.
                  </p>
                </div>
                </div>
        </div>

        {/* middle */}
        <div className="flex items-center">
        <Lottie animationData={shoes} loop={true} />
        </div>

        {/* right side  */}
        <div>






        <div data-aos="fade-down-left" 
          data-aos-easing="linear"
         data-aos-duration="1000" class="card card-side w-96 bg-base-100 shadow-xl mb-5">
                
                <div class="card-body">
                  <h2 class="card-title text-blue-900">PERSONAL TRAINING</h2>
                  <p className='text-blue-900'> 
                  A personal trainer is an individual who creates and delivers safe and effective exercise programs for healthy individuals and groups.
                  </p>
                </div>
                <figure>
                  <img className="h-full w-full"
                    src="https://i.ibb.co/2Z3KcYh/nathan-dumlao-NXMZxyg-Mw8o-unsplash.jpg"
                    alt="Movie"
                  />
                </figure>
                </div>







        <div data-aos="fade-up-left" 
          data-aos-easing="linear"
         data-aos-duration="1000"
         class="card card-side bg-base-100 w-96 shadow-xl ">
               
                <div class="card-body">
                  <h2 class="card-title text-blue-900">ULTIMATE GAMES</h2>
                  <p className='text-blue-900'>
                  play can promote the acquisition of a variety of skills and abilities including creative thinking, problem solving, adaptability and resourcefulness, and leadership skills.
                  </p>
                </div>
                <figure>
                  <img className="h-full w-full"
                    src="https://i.ibb.co/2ScwV1R/silvana-carlos-5-Qajp1-80-BA-unsplash.jpg"
                    alt="Movie"
                  />
                </figure>
                </div>


              


        </div>
      </section>
    </div>



        </div>
    );
};

export default ExtraSection;