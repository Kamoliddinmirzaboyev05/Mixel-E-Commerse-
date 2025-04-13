import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link, useParams } from "react-router-dom";
import ProductPanel from "../../components/productPanel/ProductPanel";
function Product() {
  const id = useParams();

  const [oneProductData, setOneProductData] = useState(null);
  const getOneProductData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://abzzvx.pythonanywhere.com/products/${id.id}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setOneProductData(result);
        console.log(result);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getOneProductData();
    window.scrollTo({
      top: "0",
    });
  }, []);
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="basicTitle">
            <div className="basicTitleLeft">
              <div>
                <p>Главная</p>
                <div>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div>
                <p>Ноутбуки</p>
                <div>
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div>
                <p>Apple</p>
              </div>
            </div>
          </div>
          <div className="productCards">
            <div className="productCardImgs">
              <div className="productCardImg">
                <img src={oneProductData?.images[0]?.image} alt="" />
              </div>
              <div className="productCardImgssss">
                <div>
                  <img src={oneProductData?.images[1]?.image} alt="" />
                </div>
                <div>
                  <img src={oneProductData?.images[2]?.image} alt="" />
                </div>
                <div>
                  <img src={oneProductData?.images[3]?.image} alt="" />
                </div>
                <div>
                  <img src={oneProductData?.images[0]?.image} alt="" />
                </div>
              </div>
            </div>
            <div className="ProductTitle">
              <h1>{oneProductData?.name}</h1>
              <div className="productPrise">
                <div>
                  <p>{oneProductData?.price} cум</p>
                </div>
                <div className="Box5Tovar">
                  <div>
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="hear">
                    <i class="fa-regular fa-heart"></i>
                  </div>
                  <div>
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                </div>
              </div>
              <p className="vip">
                {" "}
                <i class="fa-regular fa-comments"></i>
                VIP скидки для VIP клиентов
              </p>
              <div className="productBtn">
                <div>
                  <button>
                    Купить <br />
                    сейчас
                  </button>
                </div>
                <div>
                  <button>
                    Купить в рассрочку <br />
                    сейчас
                  </button>
                </div>
              </div>
              <div className="ProductMinText">
                <div>
                  <p className="productMinSiz">Название для договора</p>
                  <p>
                    {oneProductData?.name} {oneProductData?.details}
                  </p>
                </div>
              </div>
              <div className="ProductMinText">
                <h3>Технические параметры</h3>
                <div>
                  <p className="productMinSiz">Название</p>
                  <p>MacBook Pro 13 MXK32ZP/A Space Gray</p>
                </div>
                <div>
                  <p className="productMinSiz">Состояние</p>
                  <p>Новый</p>
                </div>
                <div>
                  <p className="productMinSiz">Технические параметры</p>
                  <p>
                    MacBook Pro 13 MXK32ZP/A <br /> Space Gray
                  </p>
                </div>
              </div>
              <div className="ProductMinText">
                <h3>Дисплей</h3>
                <div>
                  <p className="productMinSiz">Поверхность</p>
                  <p>Матовая</p>
                </div>
                <div>
                  <p className="productMinSiz">Сенсорный экран</p>
                  <p>Нет</p>
                </div>
                <div>
                  <p className="productMinSiz">Частота смены кадров</p>
                  <p>60 Гц</p>
                </div>
                <div>
                  <p className="productMinSiz">Тип матрицы</p>
                  <p>IPS</p>
                </div>
              </div>
            </div>
            <div className="Productservices">
              <div className="ProductservicesCard">
                <div>
                  <i class="fa-solid fa-arrows-rotate fa-spin"></i>
                </div>
                <div>
                  <h4>30 дней на обмен и возврат.</h4>
                  <p>
                    Если купите товар сегодня, до 06 мая <br /> можете вернуть
                    или обменять.
                  </p>
                  <Link>Подробнее о программе.</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section1Title">
            <h3>Недавно просмотренные</h3>
            <p>Посмотреть все →</p>
          </div>
          <div className="smartfonRightCards">
            <ProductPanel />
            <ProductPanel />
            <ProductPanel />
            <ProductPanel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
