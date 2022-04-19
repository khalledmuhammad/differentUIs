import './App.css';
import {Switch , Route } from "react-router-dom"
import Home from "./component/Home/Home"
import Glowing from "./component/Glowing/Glowing"
import Rotated from "./component/Rotated/Rotated"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Parallax from './component/Parallax/Parallax';
// ..
AOS.init({
  duration : 800
});



function App() {
  return (
    <div className='App'>
      <Switch>
             
             <Route path="/" exact component={Home} />
             <Route path="/glowing"  component={Glowing} />
             <Route path="/Rotated"  component={Rotated} />
             <Route path="/parallax"  component={Parallax} />




</Switch>
</div>
  );
}

export default App;
