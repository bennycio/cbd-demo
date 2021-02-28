

import './App.css';
import './App.scss'
function App() {
  return (
     <div className="body">
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content />
        <meta name="author" content />
        <title>CBD Incorporated</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous" />
        <nav className="menu-bar">
            <li href="/">HOME</li>
            <li href="/store">STORE</li>
            <li href="/info">INFO</li>
        </nav>
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



export default App;
