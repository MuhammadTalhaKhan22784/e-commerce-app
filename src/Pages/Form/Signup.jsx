import React from "react";
import "./Form.css";
const Signup = () => {
  return (
    <React.Fragment>
      <div className="signup_content">
        <div>
          <h2>Create Account</h2>
        </div>
        <form action="#" className="s_form">
          <div>
            <label htmlFor="username">First Name</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="username">Last Name</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="username">Company</label>
            <input type="text" id="username" />
          </div>
          <div>
            <label htmlFor="password">Phone Number</label>
            <input type="number" id="password" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Signup;
