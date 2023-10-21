import React from "react";
import Marquee from "react-fast-marquee";

const UpComing = () => {
  return (
    <div >
     
     <div className="my-10">
        <h1 className="text-5xl font-extrabold text-blue-900 text-center">Coming Soon...</h1>
     </div>

     <Marquee>
        <div className="flex gap-3">
             
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            src="https://i.ibb.co/1QPbY52/hermes-rivera-d-II8z-RTK6lo-unsplash.jpg"
            alt="Shoes"
            className="rounded-xl h-56"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-blue-900">Nike</h2>
          <p className="text-blue-900">this shoes is coming soon..</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            src="https://i.ibb.co/2gmTR4z/chuttersnap-CLAWRo-Ztl-Ag-unsplash.jpg"
            alt="Shoes"
            className="rounded-xl h-56"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-blue-900">Adidas</h2>
          <p className="text-blue-900">this shoes is coming soon..</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            src="https://i.ibb.co/tYz4xzq/maksim-larin-ezdrvz-A1h-Zw-unsplash.jpg"
            alt="Shoes"
            className="rounded-xl h-56"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-blue-900">New Balance</h2>
          <p className="text-blue-900">this shoes is coming soon..</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            src="https://i.ibb.co/tDM14Zx/the-dk-photography-NUo-PWImmj-CU-unsplash.jpg"
            alt="Shoes"
            className="rounded-xl h-56"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-blue-900">Puma</h2>
          <p className="text-blue-900">this shoes is coming soon..</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            src="https://i.ibb.co/wrCRjbT/braden-hopkins-ro-FQpe-Ly-U5-I-unsplash.jpg"
            alt="Shoes"
            className="rounded-xl h-56"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-blue-900">Jordan</h2>
          <p className="text-blue-900">this shoes is coming soon..</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            src="https://i.ibb.co/KrscxdQ/felipepelaquim-SJTIIUk-SI08-unsplash.jpg"
            alt="Shoes"
            className="rounded-xl h-56"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-blue-900">Rebook</h2>
          <p className="text-blue-900">this shoes is coming soon..</p>
        </div>
      </div>

        </div>
     </Marquee>

 



    </div>
  );
};

export default UpComing;
