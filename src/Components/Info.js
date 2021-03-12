import React from "react";
import "../css/Info.scss";
import { Button, Col, Divider, Row, Typography, BackTop } from "antd";
import {GiMuscleUp, GiNoseSide} from 'react-icons/gi';
import {RiPlantFill} from 'react-icons/ri';

const { Title } = Typography;

const Info = () => {
  return (
    <div className="body">
      <div class="page-header shadowed">
        <div class="page-header__bg"></div>
        <h1 class="page-header__title">Product Info</h1>
      </div>
      <div className="container">
        <section id="timeline">
          <Title>From Farm to Bottle</Title>
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
        <hr className="separator"/>
        <section className="comparison-table">
          <Title>Whats the Difference?</Title>
          <hr className="separator separator--dots"/>
          <Row justify="space-around" align="middle">
            <Col>
              <div className="comparison-column shadowed">
                <Title>Odorless</Title>
                <Title><GiNoseSide/></Title>
                <ul>
                  <li>No Odor</li>
                  <li>2oz or 3oz</li>
                  <li>1000 mg CBD</li>
                  <li>Lab Tested</li>
                  <li>Starting at $50</li>
                </ul>
                <Button type="primary">See more</Button>
              </div>
            </Col>
            <Col>
              <div className="comparison-column shadowed">
                <Title>Mint Cool</Title>
                <Title><RiPlantFill /></Title>
                <ul>
                  <li>Minty Scent</li>
                  <li>2oz or 3oz</li>
                  <li>1000 mg CBD</li>
                  <li>Lab Tested</li>
                  <li>Starting at $50</li>
                </ul>
                <Button type="primary">See more</Button>
              </div>
            </Col>
            <Col>
              <div className="comparison-column shadowed">
                <Title>Extreme</Title>
                <Title><GiMuscleUp/></Title>
                <ul>
                  <li>No Odor</li>
                  <li>2oz or 3oz</li>
                  <li>Over 9000 mg CBD</li>
                  <li>Lab Tested</li>
                  <li>Starting at $75</li>
                </ul>
                <Button type="primary">See more</Button>
              </div>
            </Col>
          </Row>
        </section>
      </div>
      <Divider />
      <div className="hotspot-container">
        <div className="lg-container">
          <img
            className="lg-image"
            src="images/hotspot.jpg"
            alt="Lady Using Cannakool"
          />
          <div
            style={{ top: "20%", left: "19.9%" }}
            className="lg-hotspot lg-hotspot--top-left"
          >
            <div className="lg-hotspot__button" onClick={selectHotspot} />
            <div className="lg-hotspot__label">
              <h4>Premium Roll</h4>
              <p>You won't stop rolling</p>
            </div>
          </div>
          <div
            style={{ top: "25%", left: "88%" }}
            className="lg-hotspot lg-hotspot--top-right"
          >
            <div className="lg-hotspot__button" onClick={selectHotspot} />
            <div className="lg-hotspot__label">
              <h4>Clean</h4>
              <p>Simple to use</p>
            </div>
          </div>
          <div
            style={{ top: "15.5%", left: "66%" }}
            className="lg-hotspot lg-hotspot--top-right"
          >
            <div className="lg-hotspot__button" onClick={selectHotspot} />
            <div className="lg-hotspot__label">
              <h4>Cool</h4>
              <p>It's in the name</p>
            </div>
          </div>
          <div
            style={{ top: "62%", left: "15%" }}
            className="lg-hotspot lg-hotspot--bottom-left"
          >
            <div className="lg-hotspot__button" onClick={selectHotspot} />
            <div className="lg-hotspot__label">
              <h4>Happy</h4>
              <p>Will make you happy!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const selectHotspot = (e) => {
  const clickedHotspot = e.target.parentElement;
  const container = clickedHotspot.parentElement;

  // only include hotspots within same image to allow one open hotspot per image; change "container" to "document" to allow only one open hotspot for entire page:
  const hotspots = container.querySelectorAll(".lg-hotspot");
  hotspots.forEach((hotspot) => {
    if (hotspot === clickedHotspot) {
      hotspot.classList.toggle("lg-hotspot--selected");
    } else {
      hotspot.classList.remove("lg-hotspot--selected");
    }
  });
};

export default Info;
