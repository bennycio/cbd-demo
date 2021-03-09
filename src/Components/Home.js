import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Card, Typography } from "antd";
import "../css/Home.scss";
import { FaFlask, FaDollarSign, FaRunning, FaStar } from "react-icons/fa";

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
          <h1 class="hero-title">Find Peace Again With</h1>
          <h1 class="hero-title">Canna Kool</h1>
        </header>
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
        <footer class="hero-footer">
          <NavLink class="button button-primary" to="/store">
            Shop Now
          </NavLink>
          <NavLink class="button" to="/info">
            Learn More
          </NavLink>
        </footer>
      </section>
      <div className="marketing">
        <div className="centered margin-top-bottom">
          <Title level={1}>
            Introducing Canna Kool. <br />
            An all natural solution that makes it easy <br />
            to get the relief that you need.
          </Title>
        </div>
        <div className="container text-center">
          <Row gutter={[30, 24]} justify="center">
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
              This is really the best stuff I've ever tried,
              <br /> and believe me, I am a certified FaceBook CBD connoisseur
            </Title>
            <Paragraph class="author"> - James Bond</Paragraph>
            <h4 className="small-padding-top-bottom">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </h4>
          </blockquote>
        </div>
        <div className="container-fluid call-for-action margin-top raised-box">
          <div className="container">
            <Row gutter={[24, 24]}>
              <Col
                className="call-text"
                xs={24}
                sm={24}
                md={8}
                lg={8}
                xl={8}
                style={{ justifyContent: "center" }}
              >
                <h1>Find what's right for you.</h1>
                <h3>We have choice for those from every walk of life.</h3>
                <div className="separator"></div>
                <NavLink
                  className="btn btn-primary call"
                  to="/store"
                  style={{ textDecoration: "none" }}
                >
                  Discover Now »
                </NavLink>
              </Col>
              <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <img src="images/hemp.png" alt="Farmer farming hemp" />
              </Col>
            </Row>
          </div>
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
                  <h2 className="top-pad">Scentless</h2>
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

        <hr className="separator separator--line" />
      </div>
    </div>
  );
});
export default Home;
