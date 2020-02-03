import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "../../forms/signinform"

const SignIn = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <h1 className="form-content-title">Sign in</h1>
          <SignInForm/>
          <div className="options">
            <Link to="/reset">Forgot your password?</Link>
            <div className="redirect">
              <p>Don't have an account?</p>
              <Link to="/sign-up">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
