import React, { useState } from "react";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";
import Lottie from "lottie-react";
import add from "../../assets/addnew.json"

const AddProduct = () => {

  const [brand, setBrand] = useState("")

 console.log(brand)
  const handleSelectChange = (event) => {
    setBrand(event.target.value);
  }


  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    // const brand = form.brand.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
   
   
    const image_url = form.image_url.value;
    

    console.log(brand)
    const newProduct = {
      name, 
      brand,
      rating,
      description,
      price,
      image_url
    
    };
    console.log(newProduct);

    // send data to server
    fetch("https://shoping-store-server-7dx1wqdra.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "user added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>

    <div>
    <Lottie style={{height:'300px'}} animationData={add} loop={true} />
    </div>


    <div className="bg-blue-200 p-24">
      <h1 className="text-4xl text-center mb-5 font-extrabold text-red-950">AddProduct</h1>

      <form onSubmit={handleAddProduct}>
        <div className="lg:grid grid-cols-2 gap-5">
          <div class="form-control ">
            <label class="label">
              <span class="label-text">Product Name</span>
            </label>
            <label class="input-group">
              <input
                name="name"
                type="text"
                placeholder="Product name"
                class="input text-blue-900 input-bordered w-full"
              />
            </label>
          </div>

          <div class="form-control ">
            <label class="label">
              <span class="label-text">Brand name</span>
            </label>
            <label class="w-full">
              <select value={brand} onChange={handleSelectChange} class="w-full text-blue-900 py-2">
                <option value="">Select Brand</option>
                <option value="Adidas">Adidas</option>
                <option value="Nike">Nike</option>
                <option value="Reebok">Reebok</option>
                <option value="Puma">Puma</option>
                <option value="NewBalance">NewBalance</option>
                <option value="Jordan">Jordan</option>
              </select>
            </label>
          </div>

        </div>

        <div className="flex gap-5">
          <div class="form-control  md:w-1/2">
            <label class="label">
              <span class="label-text">Price</span>
            </label>
            <label class="input-group ">
              <input
                name="price"
                type="text"
                placeholder="Price"
                class="input input-bordered text-blue-900 w-full"
              />
            </label>
          </div>

          <div class="form-control md:w-1/2">
            <label class="label">
              <span class="label-text">Rating</span>
            </label>
            <label class="input-group">
              <input
                name="rating"
                type="text"
                placeholder="Rating"
                class="input text-blue-900 input-bordered w-full"
              />
            </label>
          </div>
        </div>

       
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <label class="input-group">
              <input
                name="description"
                type="text"
                placeholder="Description..."
                class="input text-blue-900 input-bordered w-full"
              />
            </label>
          </div>

         
       

      

        <div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Photo URL</span>
            </label>
            <label class="input-group">
              <input
                name="image_url"
                type="text"
                placeholder="image_url"
                class="input text-blue-900 input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            value="Add Product"
            className="btn btn-block bg-blue-950 text-white"
          />
        </div>
      </form>

      
    </div>

  

  <Footer></Footer>
    </div>
  );
};

export default AddProduct;
