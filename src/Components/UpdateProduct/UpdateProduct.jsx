import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {


 const product = useLoaderData();

 console.log(product)




 const handleUpdate = (e) => {

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const taste = form.taste.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateProduct = {name, quantity, taste, supplier, category, details, photo};
    console.log(updateProduct)

    // send data to server 
   fetch(`https://shoping-store-server-hiw8rwnzo.vercel.app/product/${product._id}`,{
    method: 'PUT',
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(updateProduct)
   })
   .then(res => res.json())
   .then(data =>{
    console.log(data);
    if(data.modifiedCount > 0){
        Swal.fire({
            title: 'success',
            text: 'Update successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
   })



   }




    return (
        <div>
            <h1> </h1>

            <div className="bg-blue-200 p-24">
      <h1 className="text-4xl font-extrabold text-red-950">UpdateProduct</h1>

      <form onSubmit={handleUpdate}>
        <div className="flex gap-5">
          <div class="form-control md:w-1/2">
            <label class="label">
              <span class="label-text">Product Name</span>
            </label>
            <label class="input-group">
              <input name="name" defaultValue={product.name}
                type="text"
                placeholder="Product name"
                class="input input-bordered w-full"
              />
            </label>
          </div>

          <div class="form-control md:w-1/2">
            <label class="label">
              <span class="label-text">Available Quantity</span>
            </label>
            <label class="input-group">
              <input name="quantity" 
                type="text"
                placeholder="Available Quantity"
                class="input input-bordered w-full"
              />
            </label>
          </div>
        </div>



        <div className="flex gap-5">
          <div class="form-control md:w-1/2">
            <label class="label">
              <span class="label-text">Supplier</span>
            </label>
            <label class="input-group">
              <input name="supplier" 
                type="text"
                placeholder="Supplier name"
                class="input input-bordered w-full"
              />
            </label>
          </div>

          <div class="form-control md:w-1/2">
            <label class="label">
              <span class="label-text">Category</span>
            </label>
            <label class="input-group">
              <input name="category" 
                type="text"
                placeholder="Category"
                class="input input-bordered w-full"
              />
            </label>
          </div>
        </div>


        <div className="flex gap-5">
          <div class="form-control md:w-1/2">
            <label class="label">
              <span class="label-text">Details</span>
            </label>
            <label class="input-group">
              <input name="details" 
                type="text"
                placeholder="Details..."
                class="input input-bordered w-full"
              />
            </label>
          </div>

          <div class="form-control md:w-1/2">
            <label class="label">
              <span class="label-text">Taste</span>
            </label>
            <label class="input-group">
              <input name="taste" 
                type="text"
                placeholder="Taste"
                class="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

         <div>  
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Photo URL</span>
            </label>
            <label class="input-group">
              <input name="photo" 
                type="text"
                placeholder="Photo URL"
                class="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

       <div className="mt-5">
       <input type="submit" value="Update Product" className="btn btn-block bg-blue-950 text-white" />
       </div>

      </form>
    </div>

         

        </div>
    );
};


export default UpdateProduct;