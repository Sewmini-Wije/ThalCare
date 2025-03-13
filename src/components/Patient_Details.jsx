import { useState } from "react";
import "../styles/Patient_Details.css";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile1 from "../img/docProfile1.jpg";
import profile2 from "../img/docProfile2.jpg";
import profile3 from "../img/docProfile3.jpg";
import Add_New_Report from "./Add_New_Report";
import Notification from "./Notification";

const Patient_Details = () => {
    const [isReportOpen, setReportOpen] = useState(false);
    const [isNotificationOpen, setNotificationOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const data = [
        { id: 1, img: profile1, name: "John Doe", mobile: "1234567890", email: "john@example.com", age: 30, clinic: "ABC Clinic", status: "Normal" },
        { id: 2, img: profile2, name: "Jane Smith", mobile: "9876543210", email: "jane@example.com", age: 25, clinic: "XYZ Hospital", status: "Normal" },
        { id: 3, img: profile3, name: "Alice Brown", mobile: "5678901234", email: "alice@example.com", age: 40, clinic: "MediCare", status: "Normal" },
        { id: 4, img: profile1, name: "Bob Green", mobile: "3456789012", email: "bob@example.com", age: 35, clinic: "City Health", status: "Detected" },
        { id: 5, img: profile2, name: "Charlie White", mobile: "4567890123", email: "charlie@example.com", age: 28, clinic: "Prime Care", status: "Normal" },
        { id: 6, img: profile3, name: "Daisy Black", mobile: "2345678901", email: "daisy@example.com", age: 32, clinic: "Global Health", status: "Normal" },
        { id: 7, img: profile1, name: "John Doe", mobile: "1234567890", email: "john@example.com", age: 30, clinic: "ABC Clinic", status: "Normal" },
        { id: 8, img: profile2, name: "Jane Smith", mobile: "9876543210", email: "jane@example.com", age: 25, clinic: "XYZ Hospital", status: "Normal" },
        { id: 9, img: profile3, name: "Alice Brown", mobile: "5678901234", email: "alice@example.com", age: 40, clinic: "MediCare", status: "Normal" },
        { id: 10, img: profile1, name: "Bob Green", mobile: "3456789012", email: "bob@example.com", age: 35, clinic: "City Health", status: "Normal" },
        { id: 11, img: profile2, name: "Charlie White", mobile: "4567890123", email: "charlie@example.com", age: 28, clinic: "Prime Care", status: "Normal" },
        { id: 12, img: profile3, name: "Daisy Black", mobile: "2345678901", email: "daisy@example.com", age: 32, clinic: "Global Health", status: "Normal" },
        { id: 13, img: profile1, name: "John Doe", mobile: "1234567890", email: "john@example.com", age: 30, clinic: "ABC Clinic", status: "Normal" },
        { id: 14, img: profile2, name: "Jane Smith", mobile: "9876543210", email: "jane@example.com", age: 25, clinic: "XYZ Hospital", status: "Normal" },
        { id: 15, img: profile3, name: "Alice Brown", mobile: "5678901234", email: "alice@example.com", age: 40, clinic: "MediCare", status: "Normal" },
        { id: 16, img: profile1, name: "Bob Green", mobile: "3456789012", email: "bob@example.com", age: 35, clinic: "City Health", status: "Normal" },
        { id: 17, img: profile2, name: "Charlie White", mobile: "4567890123", email: "charlie@example.com", age: 28, clinic: "Prime Care", status: "Normal" },
        { id: 18, img: profile3, name: "Daisy Black", mobile: "2345678901", email: "daisy@example.com", age: 32, clinic: "Global Health", status: "Normal" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const totalPages = Math.ceil(data.length / recordsPerPage);

    const currentRecords = data.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleEditClick = (patient) => {
        setSelectedPatient(patient);
        setNotificationOpen(true);
    };


    return (
        <div className="patient-det-container">
            <div className="pd-header">
                <div className="pd-search">
                    <input type="text" placeholder="Search Patients" />
                </div>

                <div className="pd-add-btn">
                    <button onClick={() => setReportOpen(true)}>Add new report +</button>
                    <Add_New_Report isOpen={isReportOpen} onClose={() => setReportOpen(false)} />
                </div> 

                <div className="pd-recent-dropdown">
                    <select>
                        <option value="recent">Recent</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="today">Today</option>
                        <option value="tommorow">Tommorow</option>
                        <option value="one-week">1 Week</option>
                    </select>
                </div>
                
            </div>
            <div className="pd-table">
                <table>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Clinic</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.map((item, index) => (
                            <tr key={item.id} onClick={() => (window.location.href = `/patient_profile`)} style={{ cursor: "pointer" }}>
                                <td>{(currentPage - 1) * recordsPerPage + index + 1}</td>
                                <td>  
                                    <img src={item.img} alt={item.name} className="profile-img" />
                                    {item.name}
                                    </td>
                                <td>{item.mobile}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.clinic}</td>
                                <td className="status">
                                    {item.status === "Detected" ? (
                                        <button
                                            className="status-btn"
                                            style={{ color: "red", border: "none", background: "none", cursor: "pointer", padding: "0" }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.location.href = "/detected_patients";
                                            }}
                                        >
                                            {item.status}
                                        </button>
                                    ) : (
                                        <span style={{ color: "green" }}>{item.status}</span>
                                    )}
                                </td>

                                <td className="actions">
                                    <FontAwesomeIcon icon={faTrash} className="delete-icon" />
                                    <FontAwesomeIcon 
                                        icon={faEdit} 
                                        className="edit-icon" 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEditClick(item);
                                        }} 
                                    />                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pd-paginator">
                
                <button className="pag-btn" onClick={handlePrev} disabled={currentPage === 1}>
                    <FaArrowLeft className="pag-icon-left" />
                </button>

                <span className="active-page">{currentPage} </span> of
                <span> {totalPages}</span>

                <button className="pag-btn" onClick={handleNext} disabled={currentPage === totalPages}>
                    <FaArrowRight className="pag-icon-right" />
                </button>
                
                </div>
                {isNotificationOpen && (
                <Notification 
                    isOpen={isNotificationOpen} 
                    onClose={() => setNotificationOpen(false)} 
                    patient={selectedPatient} 
                />
            )}
            </div>
    );
};

export default Patient_Details;