import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Card, Typography, Skeleton } from "antd";
import "../css/Home.scss";
import { FaFlask, FaDollarSign, FaRunning, FaStar } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import LazyLoad from "react-lazyload";

const { Title, Paragraph } = Typography;

const Home = memo(() => {
  return (
    <div className="body">
      {/* style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${process.env.PUBLIC_URL + 'images/background.jpg'})`}} */}
      <section class="hero">
        <header id="header">
          <NavLink id="logo" to="/">
            logo
          </NavLink>
        </header>
        <header class="hero-header">
          <h1 class="hero-title">Find Peace Again With <br />Canna Kool</h1>
        </header>
        {/* <video autoPlay muted loop className="header-video">
          <source src="videos/headervideo.mp4" type="video/mp4" />
        </video> */}
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="hero-footer">
          <NavLink class="button button-primary" to="/store">
            Shop Now
          </NavLink>
          <NavLink class="button" to="/info">
            Learn More
          </NavLink>
        </div>
      </section>
      <div className="marketing">
        <div className="centered margin-top-bottom">
          <Title level={1}>
            Introducing Canna Kool. <br />
            An all natural solution that makes it easy <br />
            to get the relief that you need.
          </Title>
        </div>
        <div className="container centered">
          <Row gutter={[30, 24]} justify="center" align="middle">
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <i className="large-icon">
                <FaFlask />
              </i>
              <Title level={2} style={{ paddingTop: "3%" }}>
                Lab Tested Hemp
              </Title>
              <Paragraph>
                Developed sustainably with 100% natural ingredients and proven
                refinery techniques to provide a safe and satisfying experience.
              </Paragraph>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <i className="large-icon">
                <FaDollarSign />
              </i>
              <Title level={2} style={{ paddingTop: "3%" }}>
                Unmatched Value
              </Title>
              <Paragraph>
                Never overpay again for the relief that you deserve. Achieve
                ultimate relaxation at a bargain with our product.
              </Paragraph>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <i className="large-icon">
                <FaRunning />
              </i>
              <Title level={2} style={{ paddingTop: "3%" }}>
                Real Results
              </Title>
              <Paragraph>
                Over 100x stronger than the average CBD Roll-on and designed
                with hard workers in mind, you won't find a more powerful relief
                solution.
              </Paragraph>
            </Col>
          </Row>
        </div>
        <div className="container quote-container square-brackets-quote">
          <blockquote>
            <Title level={1}>
              Rigourously tested so that you don't have <br />
              to worry about spontaneous combustion
            </Title>
            <h4>
              <GiTestTubes size={"3em"} />
            </h4>
            <NavLink
              className="btn-primary learn-more margin-bottom"
              to="/store"
              style={{ textDecoration: "none" }}
            >
              See Lab Results »
            </NavLink>
          </blockquote>
        </div>
        <LazyLoad placeholder={<Skeleton />}>
          <div class="image-container">
            <div class="box">
              <img src="https://source.unsplash.com/1000x800" alt="" />
            </div>
            <div class="box">
              <img src="https://source.unsplash.com/1000x802" alt="" />
            </div>
            <div class="box">
              <img src="https://source.unsplash.com/1000x804" alt="" />
            </div>
            <div class="box">
              <img src="https://source.unsplash.com/1000x806" alt="" />
            </div>
          </div>
        </LazyLoad>
        <div className="alternating-info">
        <div className="info-right">
          <div className="info-text right">
            <h1 className="title">Homegrown, Homeowned</h1>
            <p className="info">
              No corpos running this business. Only the self-made, hardworking,
              pragmatic cannabis farmers, distributors, scientists, and
              entreprenuers.
            </p>
          </div>
        </div>
        <img
          src="images/homegrown.jpg"
          className="info-pic left shadowed"
          alt="Woman In her Shop"
        />
      </div>
      <div className="alternating-info">
        <div className="info-center">
          <div className="info-text center">
            <h1 className="title">Potent Solution</h1>
            <p className="info">
              Designed for people who want a powerful solution to body pain at a
              price that makes it easy to feel good.
            </p>
          </div>
        </div>
        <img
          src="images/discovery.png"
          className="info-pic center-left"
          alt="Woman In her Shop"
        />
        <img
          src="images/parachute.png"
          className="info-pic center-right"
          alt="Woman In her Shop"
        />
      </div>
      <div className="alternating-info">
        <div className="info-left">
          <div className="info-text left">
            <h1 className="title">Safe, Safe, and Safe</h1>
            <p className="info">
              The fact of the matter is, we test each an every bottle
              individually on a monkey before we ship it to you, so that you can
              feel trust in us that your Canna Kool will do the job.
            </p>
          </div>
        </div>
        <img
          src="images/labtesting.jpg"
          className="info-pic right shadowed"
          alt="Woman In her Shop"
        />
      </div>
      <div className="final-info centered">
        <Row justify="space-around">
          <Col>
            <img src="images/discovering.png" alt="Discovering new things" />
            <h1>Sustainably Designed</h1>
          </Col>
          <Col>
            <img src="images/qualityproduct.png" alt="Quality Product" />
            <h1>Highest Quality, Lowest Price</h1>
          </Col>
        </Row>
      </div>
        <div className="container-fluid home-card-container">
          <div className="small-margin">
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Card className="shadowed home-card">
                  <img
                    className="img-circle"
                    src="images/product1.jpg"
                    alt="Scentless CBD Roll-on Product"
                    width={140}
                    height={140}
                  />
                  <h2 className="top-pad">Odorless</h2>
                  <p>
                    A powerful roll-on that will alleviate pain, leaving you
                    feeling at peace with the universe.
                  </p>
                  <p>
                    <NavLink
                      className="btn btn-primary learn-more"
                      to="/store"
                      style={{ textDecoration: "none" }}
                    >
                      View details »
                    </NavLink>
                  </p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Card className="shadowed home-card">
                  <img
                    className="img-circle"
                    src="/images/product2.jpg"
                    alt="Minty Fresh CBD Roll-on Product"
                    width={140}
                    height={140}
                  />
                  <h2 className="top-pad">Minty Fresh</h2>
                  <p>
                    A refreshing experience with the cool scent of minty aroma
                    breathing through your body.
                  </p>
                  <p>
                    <NavLink
                      className="btn btn-primary learn-more"
                      to="/store"
                      style={{ textDecoration: "none" }}
                    >
                      View details »
                    </NavLink>
                  </p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Card className="shadowed home-card">
                  <img
                    className="img-circle "
                    src="images/product3.jpg"
                    alt="Extremely Powerful CBD Roll-on Product"
                    width={140}
                    height={140}
                  />
                  <h2 className="top-pad">Extreme</h2>
                  <p>
                    A roll-on designed for the hardest workers who need an
                    extraordinary pain relief solution.
                  </p>
                  <p>
                    <NavLink
                      className="btn btn-primary learn-more"
                      to="/store"
                      style={{ textDecoration: "none" }}
                    >
                      View details »
                    </NavLink>
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Home;
