import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: "",
      email: "",
      password: ""
    };
  }

  closeModal = () => {
    let loginModal = document.getElementById("loginModal");
    loginModal.classList.remove("is-active");
  };

  validateLogin = () => {
    let email = this.state.email;
    let password = this.state.password;

    console.log(email, password);

    if (!email || !password || password === null || email == null || email === '' || password === "") {
      this.setState({ errorMsg: "You must provide an email & password" });
    } else {
      this.closeModal();
    }
  };

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  render() {
    return (
      <div className="modal" id="loginModal">
        <div className="modal-background" />
        <div className="modal-content">
          <div className="box has-background-white">
            <h3 className="title">Login</h3>
            <div className="field">
              <p className="control has-icons-left">
                <input 
                  className="input" 
                  type="email" 
                  placeholder="Email"
                  onChange={this.handleEmailChange}  
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="password"
                  onChange={this.handlePasswordChange}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faUnlockAlt} />
                </span>
              </p>
            </div>
            <p className="has-text-danger">{this.state.errorMsg}</p>
            <button className="button is-warning" onClick={this.validateLogin}>
              Log In
            </button>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={this.closeModal}
        />
      </div>
    );
  }
}

export default LoginModal;
