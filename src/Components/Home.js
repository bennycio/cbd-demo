import React, {memo} from 'react';
import { NavLink } from 'react-router-dom';
import {Row, Col, Card, Typography} from 'antd';
import '../css/Home.scss'
import {FaFlask, FaDollarSign, FaRunning, FaAllergies} from 'react-icons/fa'

const {Title, Paragraph} = Typography;

const Home = memo(() => {


      return (
          <div className="body">
            {//style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'images/background.jpeg'})`}}
            }
            <section class="hero" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${process.env.PUBLIC_URL + 'images/background.jpg'})`}}>
              <header id="header">
                <a id="logo" href="#">logo</a>
              </header>
              <header class="hero-header">
                <h1 class="hero-title">Find Peace Again With</h1>
                <h1 class="hero-title">Canna Kool</h1>
              </header>
              <footer class="hero-footer">
                <NavLink class="button button-primary" to="/store">Shop Now</NavLink>
                <NavLink class="button" to="/info">Learn More</NavLink>
              </footer>
            </section>
          <div className="container-fluid marketing">
            <div className="centered margin-top-bottom"><Title level={1}>Introducing Canna Kool. <br />An all natural solution that makes it easy <br />to get the relief that you need.</Title></div>
            <div className="small-margin">
              <Row gutter={16} className="margin">
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                  <i className="large-icon"><FaFlask /></i>
                  <Title level={2} style={{paddingTop: '3%'}}>Lab Tested Hemp</Title>
                  <Paragraph>Developed sustainably with 100% natural ingredients and proven refinery techniques to provide a safe and satisfying experience.</Paragraph>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                <i className="large-icon"><FaDollarSign /></i>
                  <Title level={2} style={{paddingTop: '3%'}}>Unmatched Value</Title>
                  <Paragraph>Never overpay again for the relief that you deserve. Achieve ultimate relaxation at a bargain with our product.</Paragraph>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                <i className="large-icon"><FaRunning /></i>
                  <Title level={2} style={{paddingTop: '3%'}}>Real Results</Title>
                  <Paragraph>Over 100x stronger than the average CBD Roll-on and designed with hard workers in mind, you won't find a more powerful solution to pain and anxiety.</Paragraph>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                <i className="large-icon"><FaAllergies /></i>
                  <Title level={2} style={{paddingTop: '3%'}}>No Unpleasant Surprises</Title>
                  <Paragraph>Designed with a scent free and skin safe formula, you will never have to worry about awkward sensations and pungent smells ruining your experiences.</Paragraph>
                </Col>
              </Row>
            </div>
            <div className="container-fluid home-card-container raised-box">
            <div className="small-margin">
            <Row gutter={30}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Card className="shadowed home-card">
                  <img className="img-circle" src="images/product1.jpg" alt="Generic placeholder image" width={140} height={140} />
                  <h2>Premium</h2>
                  <p>A powerful oil that will alleviate all pains and anxiety, leaving you feeling at peace with the universe.</p>
                  <p><NavLink className="btn btn-primary learn-more" to="/store" style={{ textDecoration: 'none' }}>View details »</NavLink></p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Card className="shadowed home-card">
                  <img className="img-circle" src="/images/product2.jpg" alt="Generic placeholder image" width={140} height={140} />
                  <h2>Ultimate</h2>
                  <p>Our mid-tier oil, providing an experience that will pull you away from reality but not so far where you can no longer reach over to grab the oil bottle for a second go.</p>
                  <p><NavLink className="btn btn-primary learn-more" to="/store" style={{ textDecoration: 'none' }}>View details »</NavLink></p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Card className="shadowed home-card">
                  <img className="img-circle " src="images/product3.jpg" alt="Generic placeholder image" width={140} height={140} />
                  <h2>Soul-Wrencher</h2>
                  <p>This product will take you to a new dimension and is our most refined option.</p>
                  <p><NavLink className="btn btn-primary learn-more" to="/store" style={{ textDecoration: 'none' }}>View details »</NavLink></p>
                </Card>
              </Col>
            </Row>
            </div>
            </div>
            <div className="container quote-container">
              <blockquote>
                <Title level={1}>This is really the best stuff I've ever tried,<br /> and believe me, I am a certified FaceBook CBD connoisseur</Title>
                <Paragraph class="author"> - James Bond</Paragraph>
              </blockquote>
            </div>
            <div className="container-fluid">
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
            </div>
             <hr className="separator separator--line"/>
          </div>
        </div>
        );
  });
  export default Home;