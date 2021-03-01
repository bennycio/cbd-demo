


import React, {useState, lazy, Suspense} from 'react';
import './App.css';
import './App.scss';
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './Home'
import Store from './Store'
import PaymentPage from "./PaymentPage";


class App extends React.Component{

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      cart: 0
    }
  }

  handleChange(value){
    this.setState({cart: value})
  }


  render() {
    return(
      <BrowserRouter>
      <Suspense fallback={Loading}/>
      <div>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/store" cart={this.state.cart} handleChange={this.handleChange}>
            <Store />
          </Route>
          <Route path="/checkout">
            <PaymentPage cart={this.state.cart}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}





const Navbar = () => {
  return (
      <div className="menu-container">
        <nav className="menu-bar">
            <NavLink className="navbar-item" activeClassName="is-active" to="/" style={{ textDecoration: 'none' }}>
              <li>Home</li>
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/store" style={{ textDecoration: 'none' }}>
            <li>Store</li>
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/info" style={{ textDecoration: 'none' }}>
            <li>Info</li>
            </NavLink>
        </nav>
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
  )

}



export default App;
