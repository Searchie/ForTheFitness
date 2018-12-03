import React from "react";

const LoginModal = () => {
  return (
    <div className="modal">
      <div className="modal-background" />
      <div className="modal-content">
        <h3>This is the Login Modal</h3>
      </div>
      <button className="modal-close is-large" aria-label="close" />
    </div>
  );
};

export default LoginModal;
