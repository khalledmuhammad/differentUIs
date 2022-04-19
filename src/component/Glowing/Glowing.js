import React from "react";
import Layout from "../Layout/Layout";
import "./Glowing.css";

function Glowing() {
  return (
    <Layout>
      <div className="parent">
        <div className=" h-100 ">
          <lottie-player
          
            src="https://assets4.lottiefiles.com/packages/lf20_qfzzCg.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
            </div>
            <div className="anime-two h-50">
          <lottie-player
            src="https://assets1.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          </div>
        <div className="glowing-text">
          <h3><b>KHALED</b></h3>
          <p><b>Reactjs</b>, my bread and butter </p>

        </div>
      </div>
    </Layout>
  );
}

export default Glowing;
