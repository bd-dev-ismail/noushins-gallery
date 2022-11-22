import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      produtDiscount: 10,
      productShipping: 30,
    },
  });
  const handelAddProduct = (data)=> {
    const image = data.productImage[0];
  const formData = new FormData();
  formData.append("image", image);
    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`
    , {
      method: 'POST',
      body: formData
    }).then(res => res.json())
    .then(imgData => {
      console.log(imgData);
      if(imgData.success){
        console.log(imgData.data.display_url);
        const img = imgData.data.display_url;
        const products = {
          name: data.productName,
          price: data.productPrice,
          shipping: data.shipping,
          productSize: data.productSize,
          image: img,
          desc: data.desc
        }
        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(products),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.acknowledged){
              //toast dekaw products added
            }
          });
      }
    })
    
  }
    return (
      <div>
        <h3 className="text-3xl text-center my-6">Add Products</h3>
        <div>
          <div className="hero ">
            <div className="hero-content">
              <div className="card w-full lg:w-[500px]  shadow-2xl bg-base-100">
                <form
                  onSubmit={handleSubmit(handelAddProduct)}
                  className="card-body"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      {...register("productName", {
                        required: "Product Name field is Required",
                      })}
                      type="text"
                      placeholder="Product Name"
                      className="input input-bordered"
                    />
                    {errors.productName && (
                      <p className="text-red-600 my-2">
                        {errors.productName?.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div>
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        {...register("productPrice", {
                          required: "Product Price Field is Required",
                        })}
                        type="number"
                        placeholder="Product Price"
                        className="input input-bordered"
                      />
                      {errors.productPrice && (
                        <p className="text-red-600 my-2">
                          {errors.productPrice?.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text">Size</span>
                      </label>
                      <select
                        {...register("productSize", {
                          required: "Product Size Field is Required",
                        })}
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option selected>Small -S</option>
                        <option>Medium -M</option>
                        <option>Large -L</option>
                        <option>Extra Large -XL</option>
                      </select>
                      {errors.productSize && (
                        <p className="text-red-600 my-2">
                          {errors.productSize?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="form-control grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div>
                      <label className="label">
                        <span className="label-text">Shipping Cost</span>
                      </label>
                      <input
                        {...register("productShipping")}
                        type="number"
                        disabled
                        placeholder="Shipping Cost"
                        className="input input-bordered"
                      />
                      
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text">Discount Price(TK)</span>
                      </label>
                      <input
                        type="number"
                        {...register("produtDiscount", {
                          required: "Product Discount Field is Required",
                        })}
                        disabled
                        placeholder="Discount Price"
                        className="input input-bordered"
                      />
                      {errors.productDiscount && (
                        <p className="text-red-600 my-2">
                          {errors.productDiscount?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Image</span>
                    </label>
                    <input
                      {...register("productImage")}
                      type="file"
                      
                      id=""
                    />
                   
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>

                    <textarea
                      {...register("productDesc", {
                        required: "Product Description is Required",
                      })}
                      className="textarea textarea-bordered h-24"
                      placeholder="Product Description"
                    ></textarea>
                    {errors.productDesc && (
                      <p className="text-red-600 my-2">
                        {errors.productDesc?.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Upload Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProducts;