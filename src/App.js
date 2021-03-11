import React, { createContext } from "react";
import "./css/App.scss";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { IconContext } from "react-icons";
import { Row, Col, Form, Input, Button } from "antd";
import { useList } from "react-use";
import "antd/dist/antd.css";
import Home from "./Components/Home";
import Store from "./Components/Store";
import AboutUs from "./Components/AboutUs";
import Info from "./Components/Info";
import Contact from "./Components/Contact"

export const CartContext = createContext({
  cart: [],
  set: () => {},
  push: () => {},
  updateAt: () => {},
  insertAt: () => {},
  update: () => {},
  updateFirst: () => {},
  upsert: () => {},
  sort: () => {},
  filter: () => {},
  removeAt: () => {},
  clear: () => {},
  reset: () => {},
});

const App = () => {
  const [
    cart,
    {
      set,
      push,
      updateAt,
      insertAt,
      update,
      updateFirst,
      upsert,
      sort,
      filter,
      removeAt,
      clear,
      reset,
    },
  ] = useList([]);

  const value = {
    cart,
    set,
    push,
    updateAt,
    insertAt,
    update,
    updateFirst,
    upsert,
    sort,
    filter,
    removeAt,
    clear,
    reset,
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <IconContext.Provider value={{ className: "icon-context" }}>
            <Route exact path="/" component={Home} />
            <CartContext.Provider value={value}>
              <Route exact path="/store" component={Store} />
            </CartContext.Provider>
            <Route exact path="/info" component={Info} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />
          </IconContext.Provider>
        </Switch>
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
  return (
    <footer className="page-footer">
      <div className="container footer-container">
        <Row gutter={24}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <ul>
              <li>Home</li>
              <li>Store</li>
              <li>Info</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Lab Results</li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <ul>
              <li>Privacy</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>About Us</li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div class="form-container">
              <h2>Subscribe to Our Newsletter</h2>
              <Subscribe />
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

const Subscribe = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="subscribe"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      requiredMark={"optional"}
    >
      <Form.Item
        name="Email"
        rules={[
          { required: true, message: "Input Email to Sign Up for Newsletter" },
        ]}
      >
        <Input size="large" placeholder="cooldude@gmail.com" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Subscribe
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
