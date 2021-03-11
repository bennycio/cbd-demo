import React from "react";
import { Col, Row, Typography } from "antd";
import "../css/AboutUs.scss";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div className="body">
      <div className="container-fluid aboutus-header shadowed">
        <Title
          className="padding-left small-padding-top-bottom"
          style={{ color: "#ffffff" }}
        >
          About Us
        </Title>
      </div>
      <div className="container">
        <section id="timeline">
          <Title>Our Product's Timeline</Title>
          <div className="timeline-card-wrapper">
            <div className="timeline-card timeline-card--step1">
              <div className="head">
                <div className="number-box">
                  <span>01</span>
                </div>
                <h2>
                  <span className="small">Subtitle</span> Technology
                </h2>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta reiciendis deserunt doloribus consequatur, laudantium
                  odio dolorum laboriosam.
                </p>
                <img src="http://placehold.it/1000x500" alt="Graphic" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step2">
              <div className="head">
                <div className="number-box">
                  <span>02</span>
                </div>
                <h2>
                  <span className="small">Subtitle</span> Confidence
                </h2>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta reiciendis deserunt doloribus consequatur, laudantium
                  odio dolorum laboriosam.
                </p>
                <img src="http://placehold.it/1000x500" alt="Graphic" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step3">
              <div className="head">
                <div className="number-box">
                  <span>03</span>
                </div>
                <h2>
                  <span className="small">Subtitle</span> Adaptation
                </h2>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta reiciendis deserunt doloribus consequatur, laudantium
                  odio dolorum laboriosam.
                </p>
                <img src="http://placehold.it/1000x500" alt="Graphic" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step4">
              <div className="head">
                <div className="number-box">
                  <span>04</span>
                </div>
                <h2>
                  <span className="small">Subtitle</span> Consistency
                </h2>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta reiciendis deserunt doloribus consequatur, laudantium
                  odio dolorum laboriosam.
                </p>
                <img src="http://placehold.it/1000x500" alt="Graphic" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step5">
              <div className="head">
                <div className="number-box">
                  <span>05</span>
                </div>
                <h2>
                  <span className="small">Subtitle</span> Conversion
                </h2>
              </div>
              <div className="body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta reiciendis deserunt doloribus consequatur, laudantium
                  odio dolorum laboriosam.
                </p>
                <img src="http://placehold.it/1000x500" alt="Graphic" />
              </div>
            </div>
          </div>
        </section>
        <hr className="separator separator--dots"/>
        <Title className="centered">Get to Know Us</Title>
        <Row gutter={30} align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12} push="2">
            <div className="profile-card-wrapper">
              <div className="profile-card">
                <div className="profile-card-image">
                  <img src="images/troll.png" alt="profile one" />
                </div>

                <ul className="social-icons">
                  <li>
                    <a href="">
                      <i className="fab">
                        <FaFacebook size={"1.2em"} />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab">
                        {" "}
                        <FaInstagram size={"1.2em"} />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab">
                        <FaTwitter size={"1.2em"} />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab">
                        <FaLinkedin size={"1.2em"} />
                      </i>
                    </a>
                  </li>
                </ul>

                <div className="details">
                  <h2>
                    Jonathan BeVier
                    <br />
                    <span className="job-title">CEO</span>
                  </h2>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="profile-info">
            <Title level={2}>Jonathan BeVier</Title>
            <Title level={3}>Big Man</Title>
            <Paragraph>
              Jonathan is an experienced entrepreneur with a passion for being
              cool and also dogs. He has been desiging and producing premium
              hemp products since the beginning of time.
            </Paragraph>
          </Col>
        </Row>
        <Row gutter={30} align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12} push="2">
            <div className="profile-card-wrapper">
              <div className="profile-card">
                <div className="profile-card-image">
                  <img src="images/Benny.jpg" alt="profile one" />
                </div>

                <ul className="social-icons">
                  <li>
                    <a href="">
                      <i className="fab">
                        <FaGithub size={"1.2em"} />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab">
                        {" "}
                        <FaInstagram size={"1.2em"} />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab">
                        <FaTwitter size={"1.2em"} />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fab">
                        <FaLinkedin size={"1.2em"} />
                      </i>
                    </a>
                  </li>
                </ul>

                <div className="details">
                  <h2>
                    Benny Conn
                    <br />
                    <span className="job-title">Website Developer</span>
                  </h2>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="profile-info">
            <Title level={2}>Benny Conn</Title>
            <Title level={3}>Website Developer</Title>
            <Paragraph>
              Benny is a software engineer with a passion for programming
              languages and is currently interested in the language, Golang. He
              is also a jazz musician and enjoys listening to artists like John
              Coltrane and Oscar Peterson.
            </Paragraph>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
