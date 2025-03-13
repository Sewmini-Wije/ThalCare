import { useState } from "react";
import "../styles/Add_New_Report.css";

const Add_New_Report = ({isOpen, onClose}) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        dateOfBirth: "",
        age: "",
        gender: "",
        address: "",
        clinic: "",
        bloodGroup: "",
      });
    
      const [errors, setErrors] = useState({});
      
      if (!isOpen) return null;

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const validate = () => {
      let newErrors = {};
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.mobile) newErrors.mobile = "Mobile number is required";
      if (!formData.gender) newErrors.gender = "Please select a gender";
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.clinic) newErrors.clinic = "Clinic is required";
      if (!formData.bloodGroup) newErrors.bloodGroup = "Blood group is required";
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        alert("Form submitted successfully!");
        onClose();
      }
    };
    return (
        <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>&times;</span>
          <h3>Add new Report</h3>
  
          <form>
            <div className="row">
              <div className="col">
                <label>First Name</label>
                <input type="text" maxLength="30" />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
              </div>
              <div className="col">
                <label>Last Name</label>
                <input type="text" maxLength="30" />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
            </div>
  
            <div className="row">
              <div className="col">
                <label>Email</label>
                <input type="email" maxLength="50" />
                {errors.email && <p className="error">{errors.email}</p>}
                </div>
              <div className="col">
                <label>Mobile</label>
                <input type="text" maxLength="15" />
                {errors.mobile && <p className="error">{errors.mobile}</p>}
                </div>
            </div>
  
            <div className="row">
              <div className="col">
                <label>Date of birth</label>
                <input type="date" />
              </div>
              <div className="col">
                <label>Age</label>
                <input type="number" max="120" min="0" />
              </div>
  
              <div className="col">
                <label>Gender:</label>
                <div className="row gender">
                  <input type="radio" name="gender" id="male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" id="female" />
                  <label htmlFor="female">Female</label>
                  <input type="radio" name="gender" id="other" />
                  <label htmlFor="other">Other</label>
                </div>
                {errors.gender && <p className="error">{errors.gender}</p>}
                </div>
            </div>
  
            <div className="col">
              <label>Address</label>
            </div>
            <textarea maxLength="150"></textarea>
            {errors.address && <p className="error">{errors.address}</p>}

            <div className="row">
              <div className="col">
                <label>Clinic</label>
                <input type="text" maxLength="50" />
                {errors.clinic && <p className="error">{errors.clinic}</p>}
               </div>
              <div className="col">
                <label>Blood Group:</label>
                <input type="text" maxLength="5" />
                {errors.bloodGroup && <p className="error">{errors.bloodGroup}</p>}
                </div>
            </div>
  
            <label>Reports / files</label>
            <div className="upload-box">
              <button className="upload-btn">Upload</button>
              <span>or drag and drop files here</span>
            </div>
  
            <button className="submit-btn">Add Report</button>
          </form>
        </div>
      </div>
    );
};

export default Add_New_Report;