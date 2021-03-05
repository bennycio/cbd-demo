


import React, {lazy, Suspense} from 'react';
import './css/App.scss';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { spring, AnimatedSwitch } from 'react-router-transition';
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';

const Home = lazy(()=>import('./Components/Home'))
const Store = lazy(()=>import('./Components/Store'))
const PaymentPage = lazy(()=>import('./Components/PaymentPage'))
const Info = lazy(()=>import('./Components/Info'))
const AboutUs = lazy(()=>import('./Components/AboutUs'))

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 200,
    damping: 25,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.1,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.9),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      cart: [],
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
          <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/store" ><Store cart={this.state.cart} handleChange={this.handleChange}/></Route>
            <Route exzact path="/info" component={Info} />
            <Route exact path="/checkout" component={PaymentPage} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route render={() => <div>Not Found</div>} />
          </AnimatedSwitch>
          <Footer/>
        </div>
      </BrowserRouter>
      </Suspense>
    )
  }
}





class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.unselectHamburger = this.unselectHamburger.bind(this)
  }


  unselectHamburger(){
    document.getElementById('hamburger').checked = false;
  }

  render(){
    return (
      
    <div className="front">
      <input id="hamburger" class="hamburger" type="checkbox"/>
      <label class="hamburger" for="hamburger">
        <i />
        <text>
          <close>close</close>
          <open>menu</open>
        </text>
      </label>
      <section class="drawer-list">
            <ul>
              <li><NavLink className="nav-item" to="/" onClick={this.unselectHamburger}>Home</NavLink></li>
              <li><NavLink className="nav-item" to="/store" onClick={this.unselectHamburger}>Store</NavLink></li>
              <li><NavLink className="nav-item" to="/info" onClick={this.unselectHamburger}>Info</NavLink></li>
              <li><NavLink className="nav-item" to="/aboutus" onClick={this.unselectHamburger}>About Us</NavLink></li>
              <li><NavLink className="nav-item" to="/contact" onClick={this.unselectHamburger}>Contact</NavLink></li>
              <li><NavLink className="nav-item" to="/labresults" onClick={this.unselectHamburger}>Lab Results</NavLink></li>
            </ul>
      </section>
    </div>
    )
  }
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


class Footer extends React.Component {


  render(){
    return (
      <footer>
    </footer>
    )
  }
}


