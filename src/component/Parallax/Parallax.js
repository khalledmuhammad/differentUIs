import React from "react";
import Layout from "../Layout/Layout";
import "./Parallax.css";
import { Parallax, Background } from "react-parallax";
function ParallaxEffect() {
  return (
    <Layout>
      <div className="parallax-effect">
        <Parallax strength={500}>
          <Background>
            <img
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
              alt="laptop"
            />
          </Background>
          <div className="parallax-content">
            <h1>KHALEd</h1>
            <h5>fullstack developer </h5>
            <button>get Started</button>
          </div>
        </Parallax>
       <div className="bottom-content">
       <div className="lottie-anime p-5 m-5 w-80" >
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_kyu7xb1v.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="some-quotes">
            <p>
                through my journey as a developer i have learnt and gained alot of skills 
            </p>
        </div>
       </div>
       <div className="footer">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#224665" fill-opacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path>
</svg>
<div className="footer-content">
    <p>designed and developed by</p>
    <hr />
    <h4>KHALED MOHAMED</h4>
    </div> 
       </div>
      </div>
    </Layout>
  );
}

export default ParallaxEffect;
