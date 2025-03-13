import { useState, useEffect } from "react";
import "../styles/Notification.css"

const Notification = ({isOpen, onClose, patient}) => {
    const [formData, setFormData] = useState({
        patientName: "",
        email: "",
        phone: "",
        clinic: "",
        gender: "",
        message: "",
      });

      useEffect(() => {
          if (patient) {
              setFormData({
                  patientName: patient.name,
                  email: patient.email,
                  phone: patient.mobile,
                  clinic: patient.clinic,
                  gender: "",
                  message: "",
              });
          }
      }, [patient]);
    return isOpen ? (
        <div className="modal-overlay" onClick={onClose}>
        <div className="not-modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>&times;</span>
          <h3>Notification for Clinic</h3>
  
          <form>
              <div className="col">
                <label>Patient Name</label>
                <input type="text" maxLength="30" />
              </div>
  
              <div className="col">
                <label>Email</label>
                <input type="email" maxLength="50" />
                </div>

              <div className="col">
                <label>Phone</label>
                <input type="text" maxLength="15" />
                </div>
  
                <div className="col">
                    <label>Clinic</label>
                    <input type="email" maxLength="50" />
                </div>
  
            
            <div className="col">
              <label>Message</label>
            </div>
            <textarea maxLength="150"></textarea>

  
            <label>Reports / files</label>
            <div className="upload-box">
              <button className="upload-btn">Upload</button>
              <span>or drag and drop files here</span>
            </div>
  
            <button className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    ) : null;
};

export default Notification;