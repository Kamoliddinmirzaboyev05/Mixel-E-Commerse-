import React from "react";
import "./Dashboard.css";
import Switch from "@mui/material/Switch";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const label = {
  inputProps: { "aria-label": "Switch demo", "aria-label": "Checkbox demo" },
};

function Dashboard({ userData, getUser }) {
  return (
    <div className="dashboardPage">
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
              <p>Личный кобинет</p>
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="accountSidebar">
            <div className="userData">
              <div className="iconImg">
                <img src="/user.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Shukurillo Tojonazarov</p>
                <p>+998 99 0333848</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/cart.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Мои рассрочки</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/file-text.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Мои рассрочки</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/clock.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Мои рассрочки</p>
              </div>
            </div>
            <div className="rowItem">
              <div className="iconImg">
                <img src="/log-out.svg" alt="" />
              </div>
              <div className="userInfo">
                <p>Мои рассрочки</p>
              </div>
            </div>
          </div>
          <div className="rightForm">
            <form action="#">
              <h2 className="formTitle">Edit Your Profile</h2>
              <div className="row">
                <div className="rowItem">
                  <label>First Name</label>
                  <input required type="text" placeholder="Md" />
                </div>
                <div className="rowItem">
                  <label>Last Name</label>
                  <input required type="text" placeholder="Rimel" />
                </div>
              </div>
              <div className="row">
                <div className="rowItem">
                  <label>Username</label>
                  <input required type="text" placeholder="Username" />
                </div>
                <div className="rowItem">
                  <label>Card Number</label>
                  <input
                    required
                    type="text"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
              </div>
              <div className="rowItem">
                <label>Phone</label>
                <input required type="text" placeholder="+998 (12) 345 67 89" />
              </div>
              <div className="passwordChanges">
                <h2>Password Changes</h2>
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Confirim New Password" />
                <div className="formBtns">
                  <button className="cancelBtn">Cancel</button>
                  <button className="saveBtn">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
