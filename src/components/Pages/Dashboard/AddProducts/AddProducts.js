import React from 'react';

const AddProducts = () => {
    return (
      <div>
        <h3 className="text-3xl text-center mb6">Add Products</h3>
        <div>
          <div className="hero ">
            <div className="hero-content">
              <div className="card w-full lg:w-[500px]  shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div>
                      <label className="label">
                        <span className="label-text">Price</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Product Price"
                        className="input input-bordered"
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text">Size</span>
                      </label>
                      <select className="select select-bordered w-full max-w-xs">
                        <option>Small -S</option>
                        <option>Medium -M</option>
                        <option>Large -L</option>
                        <option>Extra Large -XL</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Image</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Image"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Description"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Upload Product</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProducts;