import React from "react";
import SignUpForm from "../../forms/signupform";
const SignUp = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <h1 className="form-content-title">Sign up</h1>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
