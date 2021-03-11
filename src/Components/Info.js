import React, { memo } from "react";
import "../css/Info.scss";
import { Typography } from "antd";

const { Title } = Typography;

const Info = () => {
  return (
    <div className="body">
      <div className="container-fluid info-header shadowed">
        <Title
          className="padding-left small-padding-top-bottom"
          style={{ color: "#ffffff" }}
        >
          Info
        </Title>
      </div>
      <div className="hotspot-container">
        <div className="lg-container">
          <img className="lg-image" src="images/hotspot.jpg" />
          <div
            style={{ top: "20%", left: "19.9%" }}
            className="lg-hotspot lg-hotspot--top-left"
          >
            <div className="lg-hotspot__button" onClick={selectHotspot}/>
            <div className="lg-hotspot__label">
              <h4>Premium Roll</h4>
              <p>
                You won't stop rolling
              </p>
            </div>
          </div>
          <div
            style={{ top: "25%", left: "88%" }}
            className="lg-hotspot lg-hotspot--top-right"
          >
            <div className="lg-hotspot__button" onClick={selectHotspot}/>
            <div className="lg-hotspot__label">
              <h4>Clean</h4>
              <p>
                Simple to use
              </p>
            </div>
          </div>
          <div
            style={{ top: "15.5%", left: "66%" }}
            className="lg-hotspot lg-hotspot--top-right"
          >
            <div className="lg-hotspot__button" onClick={selectHotspot}/>
            <div className="lg-hotspot__label">
              <h4>Cool</h4>
              <p>It's in the name</p>
            </div>
          </div>
          <div
            style={{ top: "62%", left: "15%" }}
            className="lg-hotspot lg-hotspot--bottom-left"
          >
            <div className="lg-hotspot__button" onClick={selectHotspot}/>
            <div className="lg-hotspot__label">
              <h4>Happy</h4>
              <p>Will make you happy!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
