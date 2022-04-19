import React from "react";
import Layout from "../Layout/Layout";
import "./Rotated.css"

function Rotated() {
  return (
    <Layout>
      <div className="rotated-parent">
        <div className="row align-items-center h-70">
          
        <div className="col-md-6" >
          <div className="h-60">
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_qhrndegx.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-md-6 rotated-text " >
          <div>
            <h1 data-aos="slide-right" >
              <b>KHALED</b>
            </h1>
            <p data-aos="slide-left">
              Fullstack <b>Developer</b> , Student
            </p>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
}

export default Rotated;
