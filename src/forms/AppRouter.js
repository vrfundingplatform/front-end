import React from "react";
import { Link, Route } from "react-router-dom";
import SignUp from "./signup";
import logo from "../sixrNav.png";

const AppRouter = () => {
return(

    <div>
        <img src={logo} />
        <nav>
            <Link to="/">Explore</Link>
            <Link to="/signin">Sign In</Link>
            <Link>Start Funding </Link>
        </nav>
        
        <Route path="/">
        <SignUp/>
        </Route>
    </div>
)
}

export default AppRouter;