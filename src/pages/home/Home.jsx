import React, { useEffect, useState } from "react";
// import React, { useRef, useState } from 'react';
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import ProductCard from "../../components/productCard/ProductCard";
import ProductBox from "../../components/productBox/ProductBox";
import ProductPanel from "../../components/productPanel/ProductPanel";
import { Link } from "react-router-dom";

function Home({ categories, getCategories, products, getData }) {
  console.log(products);
  // getBanner function
  const [banner, setBanner] = useState(null);
  const getBanner = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/galary/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setBanner(result);
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="home">
      <div>
        <div className="hero">
          <div className="container">
            {banner && (
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
                {banner?.results.map((item) => {
                  return (
                    <SwiperSlide>
                      <div className="heroBanner">
                        <img src={item?.image} alt="" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}{" "}
            {!banner && (
              <Skeleton
                variant="rectangular"
                style={{ marginTop: "60px", marginBottom: "10px" }}
                width={1300}
                height={324}
              />
            )}
          </div>
        </div>
        <main>
          <section className="section1">
            <div className="container">
              <div className="section1Title">
                <h3>Горящие предложения</h3>
                <p>Посмотреть все →</p>
              </div>
              <div className="Box1">
                {products?.results?.map((item) => {
                  return (
                    <ProductBox key={item.id} item={item} getData={getData} />
                  );
                }) ||
                  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item) => {
                    return (
                      <div className="loadingSkeletons">
                        <Skeleton
                          variant="rectangular"
                          width={240}
                          height={210}
                        />
                        <Skeleton
                          variant="rectangular"
                          style={{ marginTop: "30px" }}
                          width={240}
                          height={18}
                        />
                        <Skeleton
                          variant="rectangular"
                          style={{ marginTop: "20px" }}
                          width={240}
                          height={32}
                        />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                          className="skeletonButtons"
                        >
                          <Skeleton
                            variant="rectangular"
                            style={{ marginTop: "20px" }}
                            width={50}
                            height={42}
                          />
                          <Skeleton
                            variant="rectangular"
                            style={{ marginTop: "20px" }}
                            width={50}
                            height={42}
                          />
                          <Skeleton
                            variant="rectangular"
                            style={{ marginTop: "20px" }}
                            width={50}
                            height={42}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
          <section className="section2">
            <div className="container">
              <h3>Популярные категории</h3>
              <div className="box2">
                <Swiper
                  slidesPerView={4}
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
                  {categories?.results?.map((category) => {
                    return (
                      <SwiperSlide>
                        <Link
                          to={`/phoneFiltr/:${category.id}`}
                          className="box2-1"
                        >
                          <h4>{category?.name}</h4>
                          <div className="categoryImg">
                            <img src={category?.image} alt="" />
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
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
                  <img src="/imgs/892 1.png" alt="" />
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
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
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
                  <img src="/imgs/newHotRus 1.png" alt="" />
                </div>
                <div className="box5-2">
                  {products?.results?.map((item) => {
                    if (item.discount) {
                      return <ProductBox item={item} />;
                    } else {
                      return;
                    }
                  })}
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
                  <img src="/imgs/Layer 48 copy 1.svg" alt="" />
                </div>
                <div className="box6-1">
                  <img src="/imgs/Layer 48 copy 1.svg" alt="" />
                </div>
                <div className="box6-1">
                  <img src="/imgs/Layer 48 copy 1.svg" alt="" />
                </div>
                <div className="box6-1">
                  <img src="/imgs/Layer 48 copy 1.svg" alt="" />
                </div>
                <div className="box6-1">
                  <img src="/imgs/Layer 48 copy 1.svg" alt="" />
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

[
  {
    brand: [
      { title: "acer", id: 0 },
      { title: "Hp", id: 1 },
    ],
    ozu: [
      {
        title: "16 gb",
        id: 0,
      },
      {
        title: "32 gb",
        id: 1,
      },
    ],
  },
];
