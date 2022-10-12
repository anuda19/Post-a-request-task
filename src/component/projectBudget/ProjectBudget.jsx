import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./projectBudget.css";

const ProjectBudget = () => {
  return (
    <>
      <div>
        <h3 className="project_details">Project details</h3>
        <p className="project_para">
          Please describe the requirements of your work in details so that
          vendor can have a clear understanding
        </p>
        <input
          type="textarea"
          className="details_area"
          placeholder="I am looking for..."
          maxLength={30000}
        />
        <input type="text" className="upload" placeholder="Upload File" />
        <AttachFileIcon className="file_icon" />
      </div>
      <div>
        <h3 className="budget">Your budget</h3>
        <p className="budget_para">
          Put the approx budget that you set for your project
        </p>
        <input type="text" className="price" />
        <CurrencyRupeeIcon className="rupee_icon" />
      </div>
      <button className="submit_btn">
      <span className="submit_btn_text">
      Submit
      </span>
      </button>
    </>
  );
};

export default ProjectBudget;
