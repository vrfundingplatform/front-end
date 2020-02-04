import React from "react";

const SettingsForm = () =>{

return(
    <form className="settings-container">
      

<input 
            name="firstName"
            type="text"
            placeholder="First Name"
            required/>

<input 
            name="lastName"
            type="text"
            placeholder="Last Name"
            required/>

<input 
            name="profilepic"
            type="file"
         />


<textarea 
            name="bio"
           
            placeholder="Bio"
            required/>

            
<button type="submit">Update</button>

    </form>
)

}

export default SettingsForm;