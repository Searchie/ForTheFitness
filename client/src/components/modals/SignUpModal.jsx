import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUserAlt,
  faUnlockAlt
} from "@fortawesome/free-solid-svg-icons";

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      errorMsg: ""
    };
  }

  closeModal = () => {
    console.log('closing modal');
    let signUpModal = document.getElementById("SignUpModal");
    signUpModal.classList.remove("is-active");
  };

  validateInfo = () => {
    let email = this.state.email;
    let username = this.state.username;
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;

    // console.log(`email: ${email} - username: ${username} password: ${password} - confirm: ${confirmPassword}`);

    if (email === "" || username === "" || password === "") {
      this.setState({ errorMsg: "Must complete all fields" });
    } else if (password !== confirmPassword) {
      this.setState({ errorMsg: "Passwords do not match" });
    } else {
      this.setState({errorMsg: ''});
      this.closeModal();
    }
  };

  handleChangeEmail = (e) => {
    this.setState({email: e.target.value});
  }

  handleChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  handleChangeEmailConfirm = (e) => {
    this.setState({ confirmPassword: e.target.value });
  }

  render() {
    return (
      <div className="modal" id="SignUpModal">
        <div className="modal-background" />
        <div className="modal-content">
          <div className="box has-background-white">
            <h3 className="title">Sign Up</h3>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChangeEmail}
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
                  type="text"
                  placeholder="UserName"
                  onChange={this.handleChangeUsername}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faUserAlt} />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="password"
                  onChange={this.handleChangePassword}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faUnlockAlt} />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={this.handleChangeEmailConfirm}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faUnlockAlt} />
                </span>
              </p>
            </div>
            <p className="has-text-danger">{this.state.errorMsg}</p>
            <button className="button is-warning" onClick={this.validateInfo}>Sign Up</button>
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

export default SignUpModal;
