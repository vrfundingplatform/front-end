import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUpForm = () => {
  return (
    <form className="form-content">
      <div className="field">
        {/* USERNAME FIELD */}
        <label htmlFor="username">
          <TextField
            required
            id="outlined-required"
            label="Username"
            defaultValue=""
            variant="outlined"
          />
        </label>
      </div>

      <div className="field">
        {/* EMAIL FIELD */}
        <label htmlFor="email">
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            variant="outlined"
          />
        </label>
      </div>

      <div className="field">
        {/* PASSWORD FIELD */}
        <label htmlFor="password">
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </label>
      </div>
      <div className="field">
        <Button variant="contained" color="secondary" type="submit">Get Started</Button>
      </div>
    </form>
  );
};

export default SignUpForm;
