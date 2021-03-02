import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {


    render() {
      return (
          <div className="body">
            <div className="header" style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/cbd.jpg'})`}}>
              <div className="brand-box">
                <img src="images/logo.jpg" className="brand"/>
              </div>
              <div className="text-box">
                <h1 className="heading-primary">
                  <span className="heading-primary-main">CBD Incorporated</span>
                  <span className="heading-primary-sub">The Absolute Best CBD</span>
                </h1>
                <NavLink className="btn btn-white btn-animated" to="/store" style={{ textDecoration: 'none' }}>Get Some Now</NavLink>
              </div>
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
                  <p><NavLink className="btn btn-primary learn-more" to="/store" style={{ textDecoration: 'none' }}>View details »</NavLink></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="shadowed card">
                  <img className="img-circle mx-3" src="/images/cbd.jpg" alt="Generic placeholder image" width={140} height={140} />
                  <h2>Ultimate</h2>
                  <p>Our mid-tier oil, providing an experience that will pull you away from reality but not so far where you can no longer reach over to grab the oil bottle for a second go.</p>
                  <p><NavLink className="btn btn-primary learn-more" to="/store" style={{ textDecoration: 'none' }}>View details »</NavLink></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="shadowed card">
                  <img className="img-circle" src="images/cbd.jpg" alt="Generic placeholder image" width={140} height={140} />
                  <h2>Soul-Wrencher</h2>
                  <p>This product will take you to a new dimension and is our most refined option.</p>
                  <p><NavLink className="btn btn-primary learn-more" to="/store" style={{ textDecoration: 'none' }}>View details »</NavLink></p>
                </div>
              </div>
            </div>
            <div className="container quote-container">
              <blockquote>
                This is really the best stuff I've ever tried,<br /> and believe me, I am a certified FaceBook CBD connoisseur
                <span class="author"><i>James Bond</i></span>
              </blockquote>
              <hr className="separator separator--dots"/>
            </div>
             <hr className="separator separator--dotter"/>
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">Try it out. <span className="text-muted">It'll blow your mind.</span></h2>
                <p className="lead">You won't be going back to those grimy old oils you have in your kitchen cabinet</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-responsive center-block shadowed-img" src="images/cbdscience.jpg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
              </div>
            </div>
             <hr className="separator separator--dotter"/>
            <div className="row featurette">
              <div className="col-md-7 col-md-push-5">
                <h2 className="featurette-heading">Refined for a purpose. <span className="text-muted">For people like you.</span></h2>
                <p className="lead">This is not any average CBD oil. Our CBD oil is specifically designed for people like you who want unmatched quality and effectiveness</p>
              </div>
              <div className="col-md-5 col-md-pull-7">
                <img className="featurette-image img-responsive center-block shadowed-img" src="images/cbdoil.jpeg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
              </div>
            </div>
             <hr className="separator separator--dotter"/>
            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading">Experience the relax. <span className="text-muted">There is no feeling like it.</span></h2>
                <p className="lead">Other CBD oils can relieve anxiety, but none can relieve the problems underneath the anxiety. Our product will not only alleviate pain and anxiety but cure the underlying conditions causing them.</p>
              </div>
              <div className="col-md-5">
                <img className="featurette-image img-responsive center-block shadowed-img" src="images/relaxed.jpg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
              </div>
            </div>
             <hr className="separator separator--dotter"/>
            <footer>
              <p className="pull-right"><a href="#">Back to top</a></p>
              <p>© 2021 CBD Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
          </div>
        </div>
        );
    }
  }

  export default Home;