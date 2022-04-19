import React from "react";
import Layout from "../Layout/Layout";
import "./Home.css";

function Home() {
  return (
    <Layout>
      <div className="home-page">
        <div className="d-flex flex-direction-column parts">
          <div className="leftH">
            <div className="h-50">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_iorpbol0.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h3 className="text-white text-center mt-5" data-aos="slide-right">
            <b>  programmer</b>
            </h3>
          </div>
          <div className="rightH" >
          <h3 className="text-white text-center" data-aos="slide-left">
              <b>  Working out</b>
              </h3>
            <div  style={{ height:"50%"}}>
             
            <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_Pkg2zS.json"
                background="transparent"
                speed="1"
                loop
                
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
        <div className="seprator">
          <span>
            KHALED
          </span>
          </div>
      </div>
    </Layout>
  );
}

export default Home;
