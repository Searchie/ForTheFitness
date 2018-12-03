import React from "react";

const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const margin = {
  margin: '60px 0'
};

const About = () => {
  return (
    <div className="container">
      <section className="section" style={margin}>
        <div className="container has-text-centered">
          <h2 className="title has-text-white has-text-centered">
          ABOUT <span className="has-text-warning">FTF</span>
          </h2>
          <span className="line"></span>
          <p className="has-text-white has-text centered">{dummyText}</p>
        </div>
      </section>
    </div>
  );
};

export default About;
