import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <h1>Sign in</h1>
      {/* // ! Form Goes Here */}
      <p>Form Goes Here</p>
      <div className="options">
        <Link to="/reset">Forgot your password?</Link>
        <div className="redirect">
          <p>Don't have an account?</p>
          <Link to="/sign-up">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
