import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const product = useLoaderData();

  // console.log(product);

  const handleUpdate = (e) => {
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const sizes = form.sizes.value;
    const image_url = form.image_url.value;
    const updateProduct = {
      name,
      rating,
      description,
      price,
      sizes,
      image_url,
    };
    console.log(updateProduct);

    // send data to server
    
    fetch(`https://shoping-store-server-mhd9jf0ym.vercel.app/product/${product._id}`,{
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
                class="input input-bordered w-full"
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
                class="input input-bordered w-full"
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
                class="input input-bordered w-full"
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
                class="input input-bordered w-full"
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
                  class="input input-bordered w-full"
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
