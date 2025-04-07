import React, { useState } from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
function Navbar() {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="OneNav">
        <div className="navTop">
          <div className="container">
            <div className="NavTopLeft">
              <div>
                <p>Ташкент</p>
              </div>
              <div>
                <p>Наши магазины</p>
                <p>B2B продажи</p>
                <p>Покупка в рассрочку</p>
                <p>Способы оплаты</p>
                <p>Гарантия на товары</p>
              </div>
            </div>
            <div className="NavbarTopRight">
              <div>
                <p>+998 95 123 55 88</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <Link to={"/"}>
              <div className="logo">
                <div>
                  <img src="/imgs/logo.svg" alt="" />
                </div>
                <div>
                  <h2>MIXEL.UZ</h2>
                </div>
              </div>
            </Link>
            <div className="NavSearch">
              <div>
                <p>Все категории</p>
              </div>
              <div>
                <input type="text" placeholder="Телефоны и бытовая" />
              </div>
              <div className="mikrafon">
                <i class="fa-solid fa-microphone"></i>
              </div>
              <div>
                <button>
                  <div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div>
                    <p>Поиск</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="NavIcon">
              <Link to={"/dashboard"}>
                <div>
                  <i class="fa-regular fa-user"></i>
                  <br />
                  <p>Войти</p>
                </div>
              </Link>
              <div>
                <i class="fa-regular fa-user"></i>
                <br />
                <p>Сравнение</p>
              </div>
              <Link to={"/liked"}>
                <div>
                  <i class="fa-regular fa-user"></i>
                  <br />
                  <p>Избранное</p>
                </div>
              </Link>
              <div>
                <i class="fa-regular fa-user"></i>
                <br />
                <p>Корзина</p>
              </div>
            </div>

          </div>
        </nav>
        <div className="navCategori">
          <div className="container">
            <div className="MenuCategori">
              <button onClick={() => setOpen(true)}>
                <div>
                  <i class="fa-solid fa-list"></i>
                </div>
                <div >
                  <p>Категории</p>
                </div>
              </button>
            </div>
            <div className="CategoryTovar">
              <p>Наши магазины</p>
              <p>Моноблоки</p>
              <Link to={"phoneFiltr"}>
                <p>Телефоны, планшеты</p>
              </Link>
              <p>Ноутбуки</p>
              <p>Комплектующие</p>
              <p>Сетевое оборудование</p>
              <p>Оргтехника</p>
              
             
            </div>
          </div>
        </div>
        {
          open && (
            <div className="categoriyaModal" >
              <div className="ModalContainer">
                <div className="container">
                  <div className="categoriyaLeft">
                    <div>
                      <div className="ModalLeft">
                        <div className="ModalLeftBlock">
                          <div ><  img src="/imgs/phone.svg" alt="" /></div>
                          <div><p>Телефоны, планшеты</p></div>
                        </div>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className="ModalLeft">
                        <div className="ModalLeftBlock">
                          <div><img src="/imgs/leptop.svg" alt="" /></div>
                          <div><p>Ноутбуки</p></div>
                        </div>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className="ModalLeft">
                        <div className="ModalLeftBlock">
                          <div><img src="/imgs/wife.svg" alt="" /></div>
                          <div><p>Сетевое оборудование</p></div>
                        </div>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className="ModalLeft">
                        <div className="ModalLeftBlock">
                          <div><img src="/imgs/kamera.svg" alt="" /></div>
                          <div><p>Видеонаблюдение</p></div>
                        </div>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className="ModalLeft">
                        <div className="ModalLeftBlock">
                          <div><img src="/imgs/tv.svg" alt="" /></div>
                          <div><p>Компьютеры</p></div>
                        </div>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className="ModalLeft">
                        <div className="ModalLeftBlock">
                          <div><img src="/imgs/print.svg" alt="" /></div>
                          <div><p>Техника для офиса</p></div>
                        </div>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className="ModalLeft">
                        <div className="ModalLeftBlock">
                          <div><img src="/imgs/aip.svg" alt="" /></div>
                          <div><p>Аксессуары</p></div>
                        </div>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className="ModalLeft">
                        <div className="ModalLeftBlock">
                          <div><img src="/imgs/termiz.svg" alt="" /></div>
                          <div><p>Товары для дома</p></div>
                        </div>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className="ModalLeft">
                        <div className="ModalLeftBlock">
                          <div><img src="/imgs/mais.svg" alt="" /></div>
                          <div><p>Периферийные устройства</p></div>
                        </div>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                      <div className="ModalLeft">
                        <div className="ModalLeftBlock">
                          <div><img src="/imgs/tel.svg" alt="" /></div>
                          <div><p>IP Телефония</p></div>
                        </div>
                        <div>
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="categoriyaModal2">
                      <h3>
                        Сетевое <br /> оборудование
                      </h3>
                      <p>Коммутаторы</p>
                      <p>Точки доступа Wi-Fi</p>
                      <p>Медиаконверторы</p>
                      <p>ADSL роутеры</p>
                      <p>Сетевые адаптеры</p>
                      <p>Wi-Fi роутеры и маршрутизаторы</p>
                      <p>Инжекторы</p>
                      <p>Повторители сигнала</p>
                      <p>Прочее сетевое оборудование</p>
                      <p>Сетевой кабель (Ethernet)</p>
                    </div>
                  </div>
                  <div className="categoriyaRight">
                    <img onClick={() => setOpen(false)} src="/imgs/Group 460.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div >

    </>
  )
}

export default Navbar