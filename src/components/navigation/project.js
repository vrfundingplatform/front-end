import React from "react";
import ProjectForm from "../../forms/projectform"

const Project = () => {
return(
     <div>
         <h1>Create a Campaign</h1>
     
     <div className="form-container">
        <div className="form-content">
       
        
        <h2>Tell us About your Project</h2>
        <ProjectForm/>
        </div>
    </div>
    </div>
)


}

export default Project;