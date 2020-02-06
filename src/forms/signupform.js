import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const SignUpForm = props => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChanges = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
    console.log("handleChanges from Submit", userData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://vrfunding.herokuapp.com/auth/register", userData)
      .then(res => {
        console.log("api response", res.data);
        console.log("props", props);
        localStorage.setItem("token");
      })
      .catch(err => {
        console.log("submit error", err);
      });
  };

  return (
    <form className="form-content" onSubmit={handleSubmit}>
      <div className="field">
        {/* USERNAME FIELD */}
        <label htmlFor="username">
          <TextField
            required
            id="outlined-required"
            label="Username"
            name="username"
            value={userData.username}
            onChange={handleChanges}
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
            name="email"
            value={userData.email}
            onChange={handleChanges}
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
            name="password"
            value={userData.password}
            onChange={handleChanges}
            autoComplete="current-password"
            variant="outlined"
          />
        </label>
      </div>
      <div className="field">
        <Button variant="contained" color="secondary" type="submit">
          Get Started
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
