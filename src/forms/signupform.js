import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";

const SignUpForm = props => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    country: "Null",
    bankacct: false,
    age: false
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
        // localStorage.setItem("token", );
      })
      .catch(err => {
        console.log("submit error", err);
      });
  };

  return (
    <form className="form-content" onSubmit={handleSubmit}>
      <div className="field">
        {/* USERNAME FIELD */}
        <div className="signup">
          <TextField
            required
            id="outlined-required"
            label="firstname"
            name="firstname"
            value={userData.firstname}
            onChange={handleChanges}
            variant="outlined"
          />
        </div>

        <div className="signup">
          <TextField
            required
            id="outlined-required"
            label="lastname"
            name="lastname"
            value={userData.lastname}
            onChange={handleChanges}
            variant="outlined"
          />
        </div>

        <div className="signup">
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

        <div className="signup">
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
              type="email"
            />
          </label>
        </div>

        <div className="signup">
          {/* PASSWORD FIELD */}
          <label htmlFor="password">
            <TextField
              required
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
        <div className="signup">
          <Button
            id="signup-button"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Get Started
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
