import React, { useState } from "react";
import Upload from "../components/Upload";
import { performanceIndicatorOptions, studentOutcomeOptions } from "../utils";
import "../assets/css/mainpage.css";

export default function Mainpage() {
  const [formData, setFormData] = useState({
    course: "",
    studentOutcome: "",
    performanceIndicator: "",
    direct: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="upload-section">
          <Upload />
        </div>
        <div className="form-section">
          <form>
            <label htmlFor="course">Course *</label>
            <input
              type="text"
              id="course"
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
            />

            <label htmlFor="outcome">Student Outcome</label>
            <select
              id="outcome"
              name="studentOutcome"
              value={formData.studentOutcome}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {studentOutcomeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label htmlFor="direct">Direct</label>
            <div className="flex items-center gap-[10px]">
              <label htmlFor="directYes">Yes</label>
              <input
                type="radio"
                id="directYes"
                name="direct"
                value="Yes"
                onChange={handleChange}
              />
              <label htmlFor="directNo">No</label>
              <input
                type="radio"
                id="directNo"
                name="direct"
                value="No"
                onChange={handleChange}
              />
            </div>

            <label htmlFor="indicator">Performance Indicator</label>
            <select
              id="indicator"
              name="performanceIndicator"
              value={formData.performanceIndicator}
              onChange={handleChange}
            >
              <option value="">Select</option>
              {performanceIndicatorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div className="outcome-section">
          <div className="example-outcome">Example Outcome</div>
          <button className="download-button">Download (Excel)</button>
        </div>
      </div>

      {/* Remove it later */}
      <div className="flex justify-center items-center gap-[20px]">
        <span>course : {formData.course}</span>
        <span>outcome : {formData.studentOutcome}</span>
        <span>direct : {formData.direct}</span>
        <span>performance indicator : {formData.performanceIndicator}</span>
      </div>
    </div>
  );
}
