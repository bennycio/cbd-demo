import React from "react";
import "../css/Info.scss";
import { Col, Divider, Row, Typography, BackTop } from "antd";
import { GiMuscleUp, GiNoseSide } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";

const { Title } = Typography;

const Info = () => {
  return (
    <div className="body">
      <BackTop />
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
                  <span className="small">Farming</span> Grow The Stuff
                </h2>
              </div>
              <div className="body">
                <p>
                  The first step in the process of getting the CBD into your
                  body is to grow the stuff. It has to come from somewhere,
                  doesn't it?
                </p>
                <img src="images/cbdfarm.jpg" alt="CBD Farm" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step2">
              <div className="head">
                <div className="number-box">
                  <span>02</span>
                </div>
                <h2>
                  <span className="small">Refinery</span> Pure Hemp
                </h2>
              </div>
              <div className="body">
                <p>
                  We use this humungus and terrifying machine to turn the hemp
                  we farm into something that looks pretty so that you feel
                  comfortable using our product.
                </p>
                <img src="images/refinery.jpg" alt="Refinery" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step3">
              <div className="head">
                <div className="number-box">
                  <span>03</span>
                </div>
                <h2>
                  <span className="small">Extraction</span> Take It Out!
                </h2>
              </div>
              <div className="body">
                <p>
                  We spend a lot of time getting the CBD out of the refined hemp
                  because we got sued for leaving 50% of the THC in the final
                  product.
                </p>
                <img src="images/hemp.jpg" alt="Extraction" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step4">
              <div className="head">
                <div className="number-box">
                  <span>04</span>
                </div>
                <h2>
                  <span className="small">Testing</span> Consistency
                </h2>
              </div>
              <div className="body">
                <p>
                  Our product is tested many times and normally it works as
                  intended but occasionally we will throw out one because it
                  causes hallucinogenic effects in the monkeys.
                </p>
                <img src="images/labtesting.jpg" alt="Lab Testing" />
              </div>
            </div>
            <div className="timeline-card timeline-card--step5">
              <div className="head">
                <div className="number-box">
                  <span>05</span>
                </div>
                <h2>
                  <span className="small">Packing</span> Hand it Off
                </h2>
              </div>
              <div className="body">
                <p>
                  We have people manually package every bottle with love and a
                  little kiss to make sure that you feel special and so that
                  these people still have jobs.
                </p>
                <img src="images/relaxed.jpg" alt="Packaging the Product" />
              </div>
            </div>
          </div>
        </section>
        <hr className="separator" />
        <section className="comparison-table">
          <Title>Whats the Difference?</Title>
          <hr className="separator separator--dots" />
          <Row justify="space-around" align="middle">
            <Col>
              <div className="comparison-column shadowed">
                <Title>Odorless</Title>
                <Title>
                  <GiNoseSide />
                </Title>
                <ul>
                  <li>No Odor</li>
                  <li>2oz or 3oz</li>
                  <li>1000 mg CBD</li>
                  <li>Lab Tested</li>
                  <li>Starting at $50</li>
                </ul>
                <button className="btn-primary learn-more">See more</button>
              </div>
            </Col>
            <Col>
              <div className="comparison-column shadowed">
                <Title>Mint Cool</Title>
                <Title>
                  <RiPlantFill />
                </Title>
                <ul>
                  <li>Minty Scent</li>
                  <li>2oz or 3oz</li>
                  <li>1000 mg CBD</li>
                  <li>Lab Tested</li>
                  <li>Starting at $50</li>
                </ul>
                <button className="btn-primary learn-more">See more</button>
              </div>
            </Col>
            <Col>
              <div className="comparison-column shadowed">
                <Title>Extreme</Title>
                <Title>
                  <GiMuscleUp />
                </Title>
                <ul>
                  <li>No Odor</li>
                  <li>2oz or 3oz</li>
                  <li>Over 9000 mg CBD</li>
                  <li>Lab Tested</li>
                  <li>Starting at $75</li>
                </ul>
                <button className="btn-primary learn-more">See more</button>
              </div>
            </Col>
          </Row>
        </section>
      </div>
      <Divider />
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
      {/* <div className="hotspot-container">
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
      </div> */}
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
