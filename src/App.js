


import React, {lazy, Suspense} from 'react';
import './css/App.scss';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { spring, AnimatedSwitch } from 'react-router-transition';

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
      cart: 0,
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
            <Route exact path="/store" component={Store} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/checkout" component={PaymentPage} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route render={() => <div>Not Found</div>} />
          </AnimatedSwitch>
        </div>
      </BrowserRouter>
      </Suspense>
    )
  }
}





const Navbar = () => {
  return (
        <nav className="menu-container">
            <NavLink className="navbar-item" activeClassName="is-active" to="/" style={{ textDecoration: 'none' }} >
              Home
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/store" style={{ textDecoration: 'none' }} > 
            Store
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/info" style={{ textDecoration: 'none' }}>
            Info
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/aboutus" style={{ textDecoration: 'none' }} >
            About Us
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/aboutus" style={{ textDecoration: 'none' }} >
            Contact
            </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/aboutus" style={{ textDecoration: 'none' }} >
             Lab Results
            </NavLink>
        </nav>
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

