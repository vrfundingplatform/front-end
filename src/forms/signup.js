import React from "react";

const SignUp = () => {
return(
    <form className="form-content">
        <div>
            <h1>Sign Up</h1>
        </div>
        <div>
        {/* USERNAME FIELD */}
        <label htmlFor="username">
            <input 
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            required
            />

        </label>
        </div>
        
        <div>{/* EMAIL FIELD */}
        <label htmlFor="email">
            <input 
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            />

        </label>
        </div>
        
        <div>
        {/* PASSWORD FIELD */}
        <label htmlFor="password">
            <input 
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            />

        </label>
        </div>
        <div>
              <button type="submit">Get Started</button>
        </div>

        <div>
            <p>Already have an account?</p>
            <button>Sign In</button>
        </div>
    </form>
)


}

export default SignUp;