import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


// const margin = {
//   margin: '60px 0'
// };

const heroStyle = {
  width: '100vw',
  margin: '0px',
  padding: '0px'
};

const Updates = () => {

  const heroStyle = {
    height: '200px'
  };

  const heroContentStyle = {
    paddingTop: '2rem',
  };

  const inputStyle = {

  };

  return (
    <React.Fragment>

      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title has-text-white has-text-centered">
            STAY <span className="has-text-warning">NOTIFIED</span>
          </h2>
          <span className="line"></span>
        </div>
      </section>


      <div className="hero is-marginless is-warning " style={heroStyle}>
        <div className="container has-text-centered">
          <div className="hero-content has-text-white has-text-centered" style={heroContentStyle}>
            <p className="subtitle has-text-dark has-text-weight-semibold is-size-4">
              Be the first to get access to the app.
            </p>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Updates;