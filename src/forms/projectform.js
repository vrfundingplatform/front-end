import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
const ProjectForm = () => {
  return (
    <form className="form">
      {/* Name Input */}
      <div className="project-input-one">
        <label htmlFor="name">
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
            variant="outlined"
          />
        </label>

        {/* Title Input */}
        <label htmlFor="title">
          <TextField
            required
            id="outlined-required"
            label="Project Title"
            defaultValue=""
            variant="outlined"
          />
        </label>
      </div>

      {/* Image File */}
      <div className="project-input-row-two">
        <label htmlFor="image">
          <Button
            variant="contained"
            color="default"
            type="file"
            startIcon={<CloudUploadIcon />}
          >
            Upload Image
          </Button>
        </label>

        {/* Funding Goal Inout */}
        <label htmlFor="goal">
          <TextField
            required
            id="outlined-required"
            label="Funding Goal"
            defaultValue=""
            variant="outlined"
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
          />
        </label>
      </div>

      <div className="select-input">
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
      </div>

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
