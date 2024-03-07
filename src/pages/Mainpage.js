import React from "react";
import Upload from "../components/Upload";
import '../assets/css/mainpage.css'

export default function Mainpage() {
  return (
    <div className="App">
      <div className="container">
        <div className="upload-section">
          <Upload/>
        </div>  
        <div className="form-section">
          <form>
            <label htmlFor="course">Course *</label>
            <input type="text" id="course" name="course" required />
            
            <label htmlFor="outcome">Student Outcome</label>
            <input type="text" id="outcome" name="outcome" />

            <label htmlFor="direct">Direct</label>
            <input type="text" id="direct" name="direct" />

            <label htmlFor="indicator">Performance Indicator</label>
            <input type="text" id="indicator" name="indicator" />
          </form>
        </div>
        <div className="outcome-section">
          <div className="example-outcome">Example Outcome</div>
          <button className="download-button">Download (Excel)</button>
        </div>
      </div>
    </div>
  );
}
