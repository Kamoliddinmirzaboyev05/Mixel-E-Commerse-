import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
function ProductCard({ item, getData }) {
  const shortenedName = item.name.length > 13 ? `${item.name.slice(0,13 )}...` : item.name;
  const shortenedPrice = item.price.toString().length > 10 ? `${item.price.toString().slice(0, 10)}...` : item.price;

  return (
    <div className="box1-1">
      <Link to={`/product/${item.id}`} >
        <img src={item.images.image} alt="" />
        <div className="chegirma">
          <div>
            <p>
              -3%
            </p>
          </div>
        </div>
        <div className="Box1Narx">
          <div>
            <h3>
              {shortenedPrice}
            </h3>
          </div>
          <div>
            <p>
              <span>moony/</span>
              {item.monthly_price}
            </p>
          </div>

        </div>
        <h3 className='Title'>
          {shortenedName}
        </h3>
        <p className='Title2'>
          Предложение заканчивается через:
        </p>
        <div className="Box1Data">
          <div className='ДНЕЙ'>
            <h3>
              27
            </h3>
            <p>
              ДНЕЙ
            </p>
          </div>
          <div className='ЧАСОВ'>
            <h3>
              21
            </h3>
            <p>
              ЧАСОВ
            </p>
          </div>
          <div className='МИНУТ'>
            <h3>
              32
            </h3>
            <p>
              МИНУТ
            </p>
          </div>
          <div className='СЕКУНД'>
            <h3>
              05
            </h3>
            <p>
              СЕКУНД
            </p>
          </div>
        </div>
        <div className="Box1Tovar">
          <div>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className='hear'>
            <i class="fa-regular fa-heart"></i>
          </div>
          <div>
            <i class="fa-solid fa-scale-balanced"></i>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
