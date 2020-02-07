import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import axios from "axios";

const ProjectForm = props => {
  const [projectData, setProjectData] = useState({
    users_projectid: 1,
    title: "",
    cta: "",
    category: "",
    goal: "",
    desc: "",
    primaryPic: "",
    status: "Active",
    startDate: "today",
    endDate: "tomorrow",
    subcategory: "vr"
  });

  const handleChanges = e => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value
    });
    console.log("handleChanges from Project Sumbit", projectData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    let auth = localStorage.getItem("token");
    console.log("auth token", auth);
    axios
      .post("https://vrfunding.herokuapp.com/projects", projectData, {
        headers: { authorization: auth }
      })
      .then(res => {
        console.log("api project response", res.data.projectData);
        console.log("project props", props);
        // localStorage.setItem("token", );
      })
      .catch(err => {
        console.log("submit error", err.response);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* Name Input */}
      <div className="project-input-one">
        <label htmlFor="title">
          <TextField
            required
            id="outlined-required"
            label="Project Title"
            name="title"
            value={projectData.title}
            onChange={handleChanges}
            defaultValue=""
            variant="outlined"
          />
        </label>
        <label htmlFor="cta">
          <TextField
            required
            id="outlined-required"
            label="Subtitle"
            name="cta"
            value={projectData.cta}
            onChange={handleChanges}
            defaultValue=""
            variant="outlined"
          />
        </label>

        {/* Title Input */}
      </div>

      {/* Image File */}
      <div className="project-input-one">
        {/* Funding Goal Inout */}
        <label htmlFor="category">
          <TextField
            required
            id="outlined-required"
            label="Project Category"
            name="category"
            value={projectData.category}
            onChange={handleChanges}
            defaultValue=""
            variant="outlined"
          />
        </label>
        <label htmlFor="goal">
          <TextField
            required
            id="outlined-required"
            label="Funding Goal"
            defaultValue=""
            variant="outlined"
            name="goal"
            value={projectData.goal}
            onChange={handleChanges}
          />
        </label>
      </div>
      {/* Description Input */}
      <div className="project-input-two">
        <label htmlFor="description">
          <TextField
            required
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows="4"
            defaultValue=""
            variant="outlined"
            name="desc"
            value={projectData.desc}
            onChange={handleChanges}
          />
        </label>
      </div>
      <div className="image-container">
        <label htmlFor="image">
          {/* <Button
            variant="contained"
            color="default"
            type="file"
            name="primaryPic"
            startIcon={<CloudUploadIcon />}
          >
            Upload Image
          </Button> */}
          <TextField
            name="primaryPic"
            value={projectData.primaryPic}
            onChange={handleChanges}
            id="outlined-required"
            label="Picture"
            defaultValue=""
            variant="outlined"
          />
        </label>
      </div>

      {/* <div className="select-input">
        <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          required
          //   value={age}
          //   onChange={handleChange}
          //   className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Games</MenuItem>
          <MenuItem value={2}>Health</MenuItem>
          <MenuItem value={3}>Reality</MenuItem>
        </Select>
      </div>

      <div className="radio-input">
        <FormControlLabel
          required
          value="18"
          control={<Radio color="primary" />}
          label="18+"
          labelPlacement="start"
        />

        <FormControlLabel
          required
          value="bank"
          control={<Radio color="primary" />}
          label="Bank Account"
          labelPlacement="start"
        />

        <FormControlLabel
          required
          value="citizen"
          control={<Radio color="primary" />}
          label=" U.S. Citizen"
          labelPlacement="start"
        />
      </div> */}

      <div className="project-input-four">
        <Button
          variant="contained"
          size="large"
          color="secondary"
          type="submit"
        >
          Start Funding!
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;
