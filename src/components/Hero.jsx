import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
import img1 from "../assets/img/img1.avif";
import img2 from "../assets/img/img2.avif";
import img3 from "../assets/img/img03.avif";
import img4 from "../assets/img/img04.avif";
import img5 from "../assets/img/img05.avif";
import img6 from "../assets/img/img07.avif";
import img7 from "../assets/img/img06.avif";

function Hero() {
  return (
    <main className="container mt-32">
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between items-center pt-10 gap-20">
        <div className="text-white w-full md:w-[500px] lg:w-[650px] text-2xl lg:text-4xl leading-10 tracking-wide">
          <span className="lg:text-5xl text-2xl text-green-400 font-bold">
            Discover the Most Premium, Unique and Exclusive NFT Collections{" "}
          </span>
          <span className="text-blue-400">Open Sea</span> is one of the world's
          largest NFT marketplace where you can buy & trade a lot of top digital
          Assets.
        </div>
        <div className=" z-0 md:z-0 hidden md:flex">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <img src={img1} alt="hero" width="400px" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={img2} alt="hero" width="400px" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={img3} alt="hero" width="400px" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={img4} alt="hero" width="400px" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={img5} alt="hero" width="400px" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={img6} alt="hero" width="400px" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={img7} alt="hero" width="400px" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default Hero;
