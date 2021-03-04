import React from 'react';
import { NavLink } from 'react-router-dom';
import {Row, Col, Card} from 'antd';

export default class Home extends React.Component {


    render() {
      return (
          <div className="body">
            
            <header style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/background.jpeg'})`}}>
              <div className="overlay">
                <h1>Find your peace again</h1>
                <h2>With Canna Kool</h2>
                <hr className="separator separator--dots" />
                <NavLink to="/store" style={{ textDecoration: 'none' }} > 
                  <button>See More</button>
                </NavLink>
              </div>
            </header>
          <div className="container marketing">
            <Row gutter={24} className="top-pad">
              <Col span={8}>
                <Card className="shadowed home-card">
                  <img className="img-circle" src="images/product1.jpg" alt="Generic placeholder image" width={140} height={140} />
                  <h2>Premium</h2>
                  <p>A powerful oil that will alleviate all pains and anxiety, leaving you feeling at peace with the universe.</p>
                  <p><NavLink className="btn btn-primary learn-more" to="/store" style={{ textDecoration: 'none' }}>View details »</NavLink></p>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="shadowed home-card">
                  <img className="img-circle" src="/images/product2.jpg" alt="Generic placeholder image" width={140} height={140} />
                  <h2>Ultimate</h2>
                  <p>Our mid-tier oil, providing an experience that will pull you away from reality but not so far where you can no longer reach over to grab the oil bottle for a second go.</p>
                  <p><NavLink className="btn btn-primary learn-more" to="/store" style={{ textDecoration: 'none' }}>View details »</NavLink></p>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="shadowed home-card">
                  <img className="img-circle " src="images/product3.jpg" alt="Generic placeholder image" width={140} height={140} />
                  <h2>Soul-Wrencher</h2>
                  <p>This product will take you to a new dimension and is our most refined option.</p>
                  <p><NavLink className="btn btn-primary learn-more" to="/store" style={{ textDecoration: 'none' }}>View details »</NavLink></p>
                </Card>
              </Col>
            </Row>
            <div className="container quote-container">
              <blockquote>
                This is really the best stuff I've ever tried,<br /> and believe me, I am a certified FaceBook CBD connoisseur
                <span class="author"><i>James Bond</i></span>
              </blockquote>
              <hr className="separator separator--dots"/>
            </div>
             <hr className="separator separator--line"/>
            <Row className="featurette" gutter={30}>
              <Col span={12}>
                <h2 className="featurette-heading">Try it out. <span className="text-muted">It'll blow your mind.</span></h2>
              </Col>
              <Col span={12}>
                <img className="featurette-image img-responsive center-block shadowed" src="images/cbdscience.jpg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
              </Col>
            </Row>
             <hr className="separator separator--line"/>
            <Row className="featurette">
              <Col span={12}>
                <img className="featurette-image img-responsive center-block shadowed" src="images/cbdoil.jpeg" data-src="holder.js/500x500/auto" alt="Generic placeholder image" />
              </Col>
              <Col span={12}>
                <h2 className="featurette-heading">Refined for a purpose. <span className="text-muted">For people like you.</span></h2>
              </Col>
            </Row>
             <hr className="separator separator--line"/>
            <footer>
              <p className="pull-right"><a href="#">Back to top</a></p>
              <p>© 2021 CBD Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
          </div>
        </div>
        );
    }
  }