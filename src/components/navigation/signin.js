import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="form-container">
        <div className="form-content">
          <h1 className="form-content-title">Sign in</h1>
          <form>
            <div>
              <input type="text" name="text" placeholder="username" required />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>
            <div>
              <button type="submit">Sign in to SIXR</button>
            </div>
          </form>
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
