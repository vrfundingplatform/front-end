import React from "react";

const SignInForm = () => {

return(


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
)

}




export default SignInForm;