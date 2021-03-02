


import React, {useState, lazy, Suspense} from 'react';
import './css/App.scss';
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'

const Home = lazy(()=>import('./Components/Home'))
const Store = lazy(()=>import('./Components/Store'))
const PaymentPage = lazy(()=>import('./Components/PaymentPage'))
const Info = lazy(()=>import('./Components/Info'))


const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/store', name: 'Store', Component: Store },
  { path: '/checkout', name: 'Checkout', Component: PaymentPage },
  { path: '/info', name: 'Info', Component: Info},
]
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
        <Suspense fallback={Loading}>
        <BrowserRouter>
        <div>
        <Navbar />
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div>
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}

          {/* <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/store" cart={this.state.cart} handleChange={this.handleChange}>
              <Store />
            </Route>
            <Route path="/checkout">
              <PaymentPage cart={this.state.cart}/>
            </Route>
          </Switch> */}
        </div>
      </BrowserRouter>
      </Suspense>
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
