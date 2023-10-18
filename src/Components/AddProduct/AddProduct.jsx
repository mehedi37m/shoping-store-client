import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {




    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const newProduct = {name, quantity, taste, supplier, category, details, photo};
        console.log(newProduct)
    
        // send data to server 
       fetch('https://shoping-store-server-hiw8rwnzo.vercel.app/product',{
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(newProduct)
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'success',
                text: 'user added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
       })
    
    
    }
    
    
    
    
      return (
        <div className="bg-blue-200 p-24">
          <h1 className="text-4xl font-extrabold text-red-950">addProduct</h1>
    
          <form onSubmit={handleAddProduct}>
            <div className="flex gap-5">
              <div class="form-control md:w-1/2">
                <label class="label">
                  <span class="label-text">Product Name</span>
                </label>
                <label class="input-group">
                  <input name="name"
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
           <input type="submit" value="Add Product" className="btn btn-block bg-blue-950 text-white" />
           </div>
    
          </form>
        </div>
      );
    };

export default AddProduct;