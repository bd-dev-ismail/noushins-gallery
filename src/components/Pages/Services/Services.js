import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleServices from './SingleServices';

const Services = () => {
    const {data: products = [], isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async()=> {
            const res = await fetch("http://localhost:5000/products");
            const data = await res.json();
            return data;
        }
    })
    return (
      <div>
        <div className="text-center font-semibold my-4">
          <p className="text-primary">Special Offer</p>
          <h3 className="text-3xl ">Top Collection</h3>
          <div className="flex justify-center items-center">
            <div className="divider  w-28 "></div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
          {products.map((product) => (
            <SingleServices product={product} key={product._id}></SingleServices>
          ))}
        </div>
      </div>
    );
};

export default Services;