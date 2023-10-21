import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const [brand, setBrand] = useState("")

  const handleSelectChange = (event) => {
    setBrand(event.target.value);
  }

  // console.log(product);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const image_url = form.image_url.value;
    
      console.log(brand)
    // console.log(name, brand, price, rating, description,image_url)
    const updateProduct = {
      name,
      rating,
      description,
      price,
      image_url,
      brand
    };
    console.log(updateProduct);

    // send data to server
    
    fetch(`https://shoping-store-server-7dx1wqdra.vercel.app/product/${product._id}`,{
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1> </h1>

      <div className="bg-blue-200 p-24">
        <h1 className="text-4xl text-center mb-5 font-extrabold text-red-950">
          UpdateProduct
        </h1>

        <form onSubmit={handleUpdate}>

        <div class="form-control w-full">
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


          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Product Name</span>
            </label>
            <label class="input-group">
              <input
                name="name"
                defaultValue={product.name}
                type="text"
                placeholder="Product name"
                class="input text-blue-900 input-bordered w-full"
              />
            </label>
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Price</span>
            </label>
            <label class="input-group">
              <input
                name="price"
                defaultValue={product.price}
                type="text"
                placeholder="Price"
                class="input text-blue-900 input-bordered w-full"
              />
            </label>
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Rating</span>
            </label>
            <label class="input-group">
              <input
                name="rating"
                defaultValue={product.rating}
                type="text"
                placeholder="Rating"
                class="input text-blue-900 input-bordered w-full"
              />
            </label>
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <label class="input-group">
              <input
                name="description"
                defaultValue={product.description}
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
                  defaultValue={product.image_url}
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
    </div>
  );
};

export default UpdateProduct;
