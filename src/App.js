


import React, {useState} from 'react';
import './App.css';
import './App.scss';
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component{


  render() {
    return(
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}



class Index extends React.Component {


  render() {
    return (
        <div className="body">
             <Navbar />
        <div id="mainCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#mainCarousel" data-slide-to="0" className="active" />
            <li data-target="#mainCarousel" data-slide-to="1" />
            <li data-target="#mainCarousel" data-slide-to="2" />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img className="first-slide img-responsive" src="images/cbd.jpg" alt="First slide" />
              <div className="container">
                <div className="carousel-caption bg-dark">
                  <h1>Premium CBD Products</h1>
                  <p>Absolutely awesome CBD</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Buy Today</a></p>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="second-slide img-responsive" src="images/cbd.jpg" alt="Second slide" />
              <div className="container">
                <div className="carousel-caption bg-dark">
                  <h1>Quick Shipping</h1>
                  <p>Hand delivered to your doorstep by a paid actor</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn More</a></p>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="third-slide img-responsive" src="images/cbd.jpg" alt="Third slide" />
              <div className="container">
                <div className="carousel-caption bg-dark">
                  <h1>Unmatched Effects</h1>
                  <p>You'll never be more relaxed in your life</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn More</a></p>
                </div>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#mainCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#mainCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="progress-container">
          <div className="progress" id="progressBar" /></div>
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <div className="shadowed card">
                <img className="img-circle" src="images/cbd.jpg" alt="Generic placeholder image" width={140} height={140} />
                <h2>Premium</h2>
                <p>A powerful oil that will alleviate all pains and anxiety, leaving you feeling at peace with the universe.</p>
                <p><a className="btn btn-default" href="#" role="button">View details »</a></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadowed card">
                <img className="img-circle mx-3" src="/images/cbd.jpg" alt="Generic placeholder image" width={140} height={140} />
                <h2>Ultimate</h2>
                <p>Our mid-tier oil, providing an experience that will pull you away from reality but not so far where you can no longer reach over to grab the oil bottle for a second go.</p>
                <p><a className="btn btn-default" href="#" role="button">View details »</a></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadowed card">
                <img className="img-circle" src="images/cbd.jpg" alt="Generic placeholder image" width={140} height={140} />
                <h2>Soul-Wrencher</h2>
                <p>This product will take you to a new dimension and is our most refined option.</p>
                <p><a className="btn btn-default" href="#" role="button">View details »</a></p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Try it out. <span className="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">You won't be going back to those grimy old oils you have in your kitchen cabinet</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-responsive center-block shadowed-img" src="images/cbdscience.jpg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
            </div>
          </div>
          <hr />
          <div className="row featurette">
            <div className="col-md-7 col-md-push-5">
              <h2 className="featurette-heading">Refined for a purpose. <span className="text-muted">For people like you.</span></h2>
              <p className="lead">This is not any average CBD oil. Our CBD oil is specifically designed for people like you who want unmatched quality and effectiveness</p>
            </div>
            <div className="col-md-5 col-md-pull-7">
              <img className="featurette-image img-responsive center-block shadowed-img" src="images/cbdoil.jpeg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
            </div>
          </div>
          <hr />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Experience the relax. <span className="text-muted">There is no feeling like it.</span></h2>
              <p className="lead">Other CBD oils can relieve anxiety, but none can relieve the problems underneath the anxiety. Our product will not only alleviate pain and anxiety but cure the underlying conditions causing them.</p>
            </div>
            <div className="col-md-5">
              <img className="featurette-image img-responsive center-block shadowed-img" src="images/relaxed.jpg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
            </div>
          </div>
          <hr />
          <footer>
            <p className="pull-right"><a href="#">Back to top</a></p>
            <p>© 2021 CBD Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
          </footer>
        </div>
      </div>
      );
  }
}

class Store extends React.Component {

  render(){
      return (
          <div className="body">
              <Navbar />
              <div className="container products-container">
              <div className="container">
              </div>
              <hr />
              <div className="row">
                  <div className="col-lg-4">
                  <div className="container page-wrapper">
                      <div className="page-inner">
                      <div className="row">
                          <div className="el-wrapper">
                          <div className="box-up">
                              <img className="img" src="images/storecbd.png}" alt="" />
                              <div className="img-info">
                              <div className="info-inner">
                                  <span className="p-type">Premium</span>
                                  <span className="p-tag">I feel like royalty</span>
                              </div>
                              <div className="a-size">Streng <span className="size">100 mg per serving</span></div>
                              </div>
                          </div>
                          <div className="box-down">
                              <div className="h-bg">
                              <div className="h-bg-inner" />
                              </div>
                              <a className="cart" href="store/1">
                              <span className="price">$25</span>
                              <span className="add-to-cart">
                                  <span className="txt">Add to cart</span>
                              </span>
                              </a>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
                  <div className="col-lg-4">
                  <div className="container page-wrapper">
                      <div className="page-inner">
                      <div className="row">
                          <div className="el-wrapper">
                          <div className="box-up">
                              <img className="img" src="images/storecbd.png}" alt="" />
                              <div className="img-info">
                              <div className="info-inner">
                                  <span className="p-type">Ultimate</span>
                                  <span className="p-tag">I've never felt so chill</span>
                              </div>
                              <div className="a-size">Streng <span className="size">250 mg per serving</span></div>
                              </div>
                          </div>
                          <div className="box-down">
                              <div className="h-bg">
                              <div className="h-bg-inner" />
                              </div>
                              <a className="cart" href="store/2}">
                              <span className="price">$50</span>
                              <span className="add-to-cart">
                                  <span className="txt">Add to cart</span>
                              </span>
                              </a>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
                  <div className="col-lg-4">
                  <div className="container page-wrapper">
                      <div className="page-inner">
                      <div className="row">
                          <div className="el-wrapper">
                          <div className="box-up">
                              <img className="img" src="images/storecbd.png}" alt="" />
                              <div className="img-info">
                              <div className="info-inner">
                                  <span className="p-type">Soul-Wrencher</span>
                                  <span className="p-tag">I'm on the moon</span>
                              </div>
                              <div className="a-size">Streng <span className="size">500 mg per serving</span></div>
                              </div>
                          </div>
                          <div className="box-down">
                              <div className="h-bg">
                              <div className="h-bg-inner" />
                              </div>
                              <a className="cart" href="store/3}">
                              <span className="price">$100</span>
                              <span className="add-to-cart">
                                  <span className="txt">Add to cart</span>
                              </span>
                              </a>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              <hr />
              <footer>
                  <p className="pull-right"><a href="#">Back to top</a></p>
                  <p>© 2021 CBD Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
              </footer>
              </div>
          </div>
      );
  }
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
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



export default App;
