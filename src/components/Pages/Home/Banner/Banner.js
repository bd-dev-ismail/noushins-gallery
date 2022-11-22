import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import  banner1 from "../../../../assets/home/hero3.webp";
import  banner2 from "../../../../assets/home/hero1.webp";
import  banner3 from "../../../../assets/home/hero2.webp";
import { Link } from 'react-router-dom';
const Banner = () => {
    SwiperCore.use([Autoplay]);
    return (
      <div>
        <Swiper
          pagination={true}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          
          autoplay
        >
          <SwiperSlide>
            <div
              className="hero lg:h-[85vh] h-[50vh]"
              style={{
                backgroundImage: `url(${banner1})`,
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-white">
                <div className="max-w-md">
                  <h1 className="mb-5 lg:text-8xl text-5xl font-bold">
                    Fashion <br /> Changing <br /> Always
                  </h1>

                  <Link to="/services">
                    <button className="btn btn-primary">Shop Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero lg:h-[85vh] h-[50vh]"
              style={{
                backgroundImage: `url(${banner2})`,
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-white">
                <div className="max-w-md">
                  <h1 className="mb-5 lg:text-8xl text-5xl font-bold">
                    Fashion <br /> Changing <br /> Always
                  </h1>

                  <Link to="/services">
                    <button className="btn btn-primary">Services</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero lg:h-[85vh] h-[50vh]"
              style={{
                backgroundImage: `url(${banner3})`,
              }}
            >
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-white">
                <div className="max-w-md">
                  <h1 className="mb-5 lg:text-8xl text-5xl font-bold">
                    Fashion <br /> Changing <br /> Always
                  </h1>

                  <Link to="/services">
                    <button className="btn btn-primary">Services</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;
