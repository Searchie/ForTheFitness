import React from "react";
import Card from "./card";
// import fighting from "../media/fighting.jpg";
// import blog from "../media/blog.png";
// import question from "../media/question.jpg";
// import hangboard from "../media/hangboard.jpg";

const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor";

const Features = () => {
  return (
    <React.Fragment>
      <div className="section">
        <h2 className="title has-text-white has-text-centered">
          AMAZING <span className="has-text-warning">FEATURES</span>
        </h2>
        <span className="line"></span>
      </div>

      <div className="container">
        <div className="columns is-desktop">
          <div className="column">
            <Card
              icon='slider'
              title="Global Leagues"
              content={dummyText}
            />
          </div>

          <div className="column">
            <Card
              icon="dumbell"
              title="Training"
              content={dummyText}
            />
          </div>

          <div className="column">
            <Card
              icon="camera"
              title="Blog"
              content={dummyText}
            />
          </div>

          <div className="column">
            <Card
              icon="question"
              title="Something Else"
              content={dummyText}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
