import React from "react";
import { Col, Divider, Row, Typography } from "antd";
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
      <div class="page-header shadowed">
        <div class="page-header__bg"></div>
        <h1 class="page-header__title">About Us</h1>
      </div>
      <div className="container">
        <Divider />
        <Title className="centered">Who are We?</Title>
        <Row align="middle">
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
        <Row align="middle">
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
