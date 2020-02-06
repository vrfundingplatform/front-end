import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const SignInForm = props => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    console.log("hello", data);
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("https://vrfunding.herokuapp.com/auth/login", data)
      .then(res => {
        console.log("api response", res);
        console.log("props", props);
        localStorage.setItem("token", res.data.token);
        props.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("submit error", err);
      });
  };

  return (
    <form className="form-content" onSubmit={handleSubmit}>
      <div className="field">
        <TextField
          required
          id="outlined-required"
          name="username"
          label="username"
          value={data.username}
          onChange={handleChanges}
          variant="outlined"
        />
      </div>
      <div className="field">
        <TextField
          required
          id="outlined-password-input"
          name="password"
          value={data.password}
          onChange={handleChanges}
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </div>
      <div className="field">
        <Button
          id="signin-button"
          variant="contained"
          color="secondary"
          type="submit"
        >
          Sign in to SIXR
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
