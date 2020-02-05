import React from "react";

const SettingsForm = () => {

    return(
        <div className="form-container">
            <div className="form-content">
            <form className="settings">
      

      <input className="settings-input" 
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required/>
      
      <input className="settings-input" 
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required/>
      
      <input className="settings-input" 
                  name="profilepic"
                  type="file"
               />
      
      
      <textarea className="settings-input" 
                  name="bio"
                 
                  placeholder="Bio"
                  required/>
      
                  
      <button type="submit">Update</button>
      
          </form>
          </div>
        </div>
    )
}


export default SettingsForm;