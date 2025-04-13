import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import PhoneFiltr from "./pages/phoneFiltr/PhoneFiltr";
import ProductCard from "./components/productCard/ProductCard";
import ProductPanel from "./components/productPanel/ProductPanel";
import ProductBox from "./components/productBox/ProductBox";
import PhoneFiltrAlot from "./pages/phoneFiltrAlot/PhoneFiltrAlot";
import Product from "./pages/product/Product";
import Liked from "./pages/liked/Liked";
import Comparison from "./pages/comparison/Comparison";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Bounce, ToastContainer } from "react-toastify";
function App() {
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState(null)
  // getData Function
  const getData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/products/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProducts(result);
      })
      .catch((error) => console.error(error));
  };
  // getUser Function
  const getUser = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("mixelToken")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://abzzvx.pythonanywhere.com/users/me", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
      })
      .catch((error) => console.error(error));
  };
  if (localStorage.getItem("mixelToken")) {
    useEffect(() => {
      getUser();
      getData();
    }, []);
  }

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home products={products} getData={getData} />}
        />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/productPanel" element={<ProductPanel />} />
        <Route path="/productBox" element={<ProductBox />} />
        <Route path="/phoneFiltr" element={<PhoneFiltr />} />
        <Route path="/phoneFiltrAlot" element={<PhoneFiltrAlot />} />
        <Route path="/product" element={<Product />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route
          path="/dashboard"
          element={<Dashboard userData={userData} getUser={getUser} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
