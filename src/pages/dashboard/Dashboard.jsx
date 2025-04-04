import React from "react";
import "./Dashboard.css";
import Switch from "@mui/material/Switch";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const label = {
  inputProps: { "aria-label": "Switch demo", "aria-label": "Checkbox demo" },
};
function Dashboard() {
  return (
    <div className="dashboardPage">
      <div className="container">
        <div className="pageWay">
          <p>Главная </p>
          <p>&gt;</p>
          <p>Личный кобинет</p>
        </div>
        <div className="mainContent">
          <div className="accountSidebar">
            <div className="userData">
              <div className="iconImg">
                <img src="/public/user.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Shukurillo Tojonazarov</p>
                <p>+998 99 0333848</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/public/cart.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Мои рассрочки</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/public/file-text.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Мои рассрочки</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/public/clock.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Мои рассрочки</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/public/log-out.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Мои рассрочки</p>
              </div>
            </div>
          </div>
          <div className="leftForms">
            <div className="accountCol">
              <div className="personalData">
                <div className="personalTop">
                  <div className="rowItem">
                    <div className="iconImg">
                      <img src="/public/user.svg" alt="" />
                    </div>
                    <div className="userInfo">
                      <p>Личные данные</p>
                    </div>
                  </div>
                  <button className="editBtn">Изменит</button>
                </div>
                <div className="personalMain">
                  <p>Shukurillo Tojinazarov</p>
                  <p>Телефон: +998 99 0333848</p>
                </div>
              </div>
              <div className="personalData">
                <div className="personalTop">
                  <div className="rowItem">
                    <div className="iconImg">
                      <img src="/public/credit-card.svg" alt="" />
                    </div>
                    <div className="userInfo">
                      <p>Моя карта</p>
                    </div>
                  </div>
                </div>
                <div className="personalMain">
                  <p>Отсутствует</p>
                </div>
              </div>
            </div>
            <div className="accountCol">
              <div className="personalData">
                <div className="personalTop">
                  <div className="rowItem">
                    <div className="iconImg">
                      <img src="/public/mail.svg" alt="" />
                    </div>
                    <div className="userInfo">
                      <p>Уведомления</p>
                    </div>
                  </div>
                </div>
                <div className="personalMain">
                  <p>Получать информацию об акциях и скидках</p>
                  <div>
                    <div className="switch">
                      <Switch
                        sx={{
                          "& .MuiSwitch-thumb": {
                            backgroundColor: "#ED3729", // Thumb rangini o'zgartirish
                            color: "#ED3729",
                          },
                          "& .MuiSwitch-track": {
                            backgroundColor: "#ED3729B2", // Track rangini o'zgartirish (orqa fon)
                          },
                          "&.Mui-checked .MuiSwitch-track": {
                            backgroundColor: "#ED3729B2", // Tanlangan holatda track rangini saqlash
                          },
                          "&.Mui-checked .MuiSwitch-thumb": {
                            backgroundColor: "#ED3729B2", // Tanlangan holatda thumb rangini o'zgartirish
                          },
                        }}
                        {...label}
                        defaultChecked
                      />
                      <p>По SMS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="personalData">
                <div className="personalTop">
                  <div className="rowItem">
                    <div className="iconImg">
                      <img src="/public/truck.svg" alt="" />
                    </div>
                    <div className="userInfo">
                      <p>Адрес доставки</p>
                    </div>
                  </div>
                  <button className="editBtn">Добавить</button>
                </div>
                <div className="personalMain">
                  <input type="text" className="street" placeholder="Улица" />
                  <div className="rowInputs">
                    <input type="text" className="street" placeholder="Дом" />
                    <input
                      type="text"
                      className="street"
                      placeholder="Квартира"
                    />
                  </div>
                  <div className="defoultAddress">
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                    <p>Адрес по умолчанию</p>
                  </div>
                  <div className="personalDataBtn">
                    <button className="saveBtn">Сахранит</button>
                    <button className="cancelBtn">Отмена</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
