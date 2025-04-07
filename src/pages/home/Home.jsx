
import React from 'react'
// import React, { useRef, useState } from 'react';
import "./Home.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ProductCard from '../../components/productCard/ProductCard';
import ProductBox from '../../components/productBox/ProductBox';
import ProductPanel from '../../components/productPanel/ProductPanel';



function Home() {
  return (
    <div className="home">
      <div>
        <div className="hero">
          <Swiper
            slidesPerView={1}
            spaceBetween={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><div className="container">

            </div></SwiperSlide>
            <SwiperSlide><div className="container">

            </div></SwiperSlide>
            <SwiperSlide><div className="container">

            </div></SwiperSlide>
            <SwiperSlide><div className="container">

            </div></SwiperSlide>
            <SwiperSlide><div className="container">

            </div></SwiperSlide>
            <SwiperSlide><div className="container">

            </div></SwiperSlide>
            <SwiperSlide><div className="container">

            </div></SwiperSlide>
            <SwiperSlide><div className="container">

            </div></SwiperSlide>
            <SwiperSlide><div className="container">

            </div></SwiperSlide>
          </Swiper>
        </div>
        <main>
          <section className="section1">
            <div className="container">
              <div className="section1Title">
                <h3>Горящие предложения</h3>
                <p>Посмотреть все →</p>
              </div>
              <div className="Box1">
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              </div>
            </div>
          </section>
          <section className="section2">

            <div className="container">
              <h3>Популярные категории</h3>
              <div className="box2">
                <div className="box2-1">
                  <h4>Компьютеры</h4>
                  <div>
                    <img src="/public/imgs/Computer 1.svg" alt="" />
                  </div>
                </div>
                <div className="box2-1">
                  <h4>Компьютеры</h4>
                  <div>
                    <img src="/public/imgs/Computer 1.svg" alt="" />
                  </div>
                </div>
                <div className="box2-1">
                  <h4>Компьютеры</h4>
                  <div>
                    <img src="/public/imgs/Computer 1.svg" alt="" />
                  </div>
                </div>
                <div className="box2-1">
                  <h4>Компьютеры</h4>
                  <div>
                    <img src="/public/imgs/Computer 1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section3">
            <div className="container">
              <div className="box3">
                <div>
                  <h1>Apple iPhone X 64 ГБ</h1>
                  <h5>
                    Совершенно новый дисплей Super Retina с <br /> диагональю
                    5,8 дюйма, который удобно лежит в руке <br /> и потрясающие
                    выглядит, — это и есть iPhone X.
                  </h5>
                </div>
                <div className="Box3Img">
                  <img src="/public/imgs/892 1.png" alt="" />
                </div>
                <div className="Box3-1">
                  <h2>1 250 900 Сум</h2>
                  <p>2 220 900 Сум</p>
                  <button>Показать еще</button>
                </div>
              </div>
            </div>
          </section>
          <section className="section4">
            <div className="container">
              <div className="section1Title">
                <h3>Товары дешевле:</h3>
                <p>Посмотреть все →</p>
              </div>
              <div className="Box4">
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>

              </div>
            </div>
          </section>
          <section className="section5">
            <div className="container">
              <div className="section1Title">
                <h3>Рекомендуем</h3>
                <p>Посмотреть все →</p>
              </div>
              <div className="Box5">
                <div className="box5-3">
                  <img src="/public/imgs/newHotRus 1.png" alt="" />
                </div>
                <div className="box5-2">
                <ProductPanel/>
                <ProductPanel/>
                <ProductPanel/>
                <ProductPanel/>
                <ProductPanel/>
                <ProductPanel/>
                <ProductPanel/>
                <ProductPanel/>
                </div>
              </div>
            </div>
          </section>
          <section className="section6">
            <div className="container">
              <div className="section1Title">
                <h3>Бренды</h3>
                <p>← →</p>
              </div>
              <div className="Box6">
                <div className="box6-1">
                  <img src="/public/imgs/Layer 48 copy 1.svg" alt="" />
                </div>
                <div className="box6-1">
                  <img src="/public/imgs/Layer 48 copy 1.svg" alt="" />
                </div>
                <div className="box6-1">
                  <img src="/public/imgs/Layer 48 copy 1.svg" alt="" />
                </div>
                <div className="box6-1">
                  <img src="/public/imgs/Layer 48 copy 1.svg" alt="" />
                </div>
                <div className="box6-1">
                  <img src="/public/imgs/Layer 48 copy 1.svg" alt="" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
