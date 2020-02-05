import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const SignInForm = () => {

return(


    <form className="form-content">
            <div className="field">
              <TextField 
              required
              id="outlined-required"
              label="Username"
              defaultValue=""
              variant="outlined" />
            </div>
            <div className="field">
              <TextField
                required
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
            </div>
            <div className="field">
              <Button variant="contained" color="secondary" type="submit">Sign in to SIXR</Button>
            </div>
          </form>
)

}




export default SignInForm;