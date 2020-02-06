import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
const SettingsForm = () => {
  return (
    <div className="form-container">
      <div className="form-content">
        <form className="settings">
          <div className="settings-input">
            <TextField
              required
              id="outlined-required"
              label="First Name"
              defaultValue=""
              variant="outlined"
            />
          </div>

          <div className="settings-input">
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              defaultValue=""
              variant="outlined"
            />
          </div>

          <div className="settings-input">
            <Button
              variant="contained"
              color="default"
              type="file"
              startIcon={<CloudUploadIcon />}
            >
              Upload Avatar
            </Button>
          </div>

          <div className="settings-input">
            <TextField
              required
              id="outlined-multiline-static"
              label="Bio"
              multiline
              rows="4"
              defaultValue=""
              variant="outlined"
            />
          </div>

          <div className="settings-input">
            <Button variant="contained" color="secondary" type="submit">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsForm;
