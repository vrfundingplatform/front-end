import React from "react";


const ProjectForm = () => {


    return(
       
        
        <form>
           {/* Name Input */}
       <div className="project-input-one">
        <label htmlFor="name">
            <input 
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
            />

        </label>
      


     
        {/* Title Input */}
        <label htmlFor="title">
            <input 
            id="title"
            type="text"
            name="title"
            placeholder="Project Title"
            required
            />

        </label>
      </div>

      {/* Image File */}
        <div>
        <label htmlFor="image">
            <input 
            id="image"
            type="file"
            name="image"
            
            required
            />

        </label>
       

       
       {/* Funding Goal Inout */}
        <label htmlFor="goal">
            <input 
            id="goal"
            type="text"
            name="goal"
            placeholder="Funding Goal"
            required
            />

        </label>
        

        </div>
        {/* Description Input */}
       <div className="project-input-two">
        <label htmlFor="description">
            <textarea 
            id="description"
            
            name="description"
            placeholder="Project Description"
            required
            />

        </label>
      </div>
      {/* Category Select */}
      <label className="project-input-five">Project Category
      <select>
  <option value=""></option>
  <option value="">Games</option>
  <option value="">Training</option>
  <option value=""></option>
  </select>
</label>

        {/* Radio Fields */}
    <div className="project-input-three">
       
            <label>
            18+
            <input
                name="age"
                type="checkbox"
                required
                />
            </label>

            <label>
            Back Account
            <input
                name="bank"
                type="checkbox"
                required
                />
            </label>

            <label>
            US Citizen
            <input
                name="citizen"
                type="checkbox"
                required
                />
            </label>

    </div>
     

        <div className="project-input-four">
            <button>Start Funding!</button>
            </div>



        </form>
    )

}





export default ProjectForm;