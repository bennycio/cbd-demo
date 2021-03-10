import React, { useState, createContext } from "react";
import "./css/App.scss";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";
import "antd/dist/antd.css";
import Home from "./Components/Home";
import Store from "./Components/Store";
import AboutUs from "./Components/AboutUs";
import Info from "./Components/Info";


function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 200,
    damping: 25,
  });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.1,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.9),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
});

const App = () => {
  const [cart, setCart] = useState([]);
  const value = { cart, setCart };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
        >
          <Route exact path="/" component={Home} />
          <CartContext.Provider value={value}>
            <Route exact path="/store" component={Store} />
          </CartContext.Provider>
          <Route exact path="/info" component={Info} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route render={() => <div>Not Found</div>} />
        </AnimatedSwitch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const Navbar = () => {
  const unselectHamburger = () => {
    document.getElementById("hamburger").checked = false;
  };

  return (
    <div className="front">
      <input id="hamburger" class="hamburger" type="checkbox" />
      <label class="hamburger" for="hamburger">
        <i />
        <text>
          <close>close</close>
          <open>menu</open>
        </text>
      </label>
      <section class="drawer-list">
        <ul>
          <li>
            <NavLink className="nav-item" to="/" onClick={unselectHamburger}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-item"
              to="/store"
              onClick={unselectHamburger}
            >
              Store
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-item"
              to="/info"
              onClick={unselectHamburger}
            >
              Info
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-item"
              to="/aboutus"
              onClick={unselectHamburger}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-item"
              to="/contact"
              onClick={unselectHamburger}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-item"
              to="/labresults"
              onClick={unselectHamburger}
            >
              Lab Results
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="content">
      <div className="loading">
        <p>loading</p>
        <span></span>
      </div>
    </div>
  );
};

const Footer = () => {
  return <footer></footer>;
};

export default App;
