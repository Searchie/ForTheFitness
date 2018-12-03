import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const containerStyle = {
  boxShadow: "0px -2px 2px 2px hsl(0, 0%, 17%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: '50px'
};

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer has-background-dark" style={containerStyle}>
        <div className="content has-text-centered has-text-white" style={style}>
          <p>
            {"It's either "}
            <span className="has-text-warning">For The Fitness...</span>
            or nothing at all.
          </p>
          <div className="level" style={{ width: '15vw' }}>
            <a href="#">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#3b5998", fontSize: "35px" }}
              />
            </a>

            <a href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                className="instagram"
                style={{ fontSize: "31px" }}
              />
            </a>

            <a href="#">
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ color: "#FF0000", fontSize: "35px" }}
              />
            </a>

            <a href="#">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#1da1f2", fontSize: "35px" }}
              />
            </a>
          </div>
          <a href="https://bulma.io">
            <img
              src="https://bulma.io/images/made-with-bulma--dark.png"
              alt="Made with Bulma"
              width="96"
              height="12"
            />
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
