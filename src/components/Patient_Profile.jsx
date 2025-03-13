import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Patient_Profile.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { faFile, faEye } from "@fortawesome/free-solid-svg-icons";
import profile1 from "../img/docProfile1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Patient_Profile = ({}) => {

    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1); 
    };

    const [currentPage, setCurrentPage] = useState(1);
    const reportsPerPage = 1; 

    const [patientData, setPatientData] = useState({
        reports: [
            {
                surgery: "Appendectomy",
                generatedBy: "Dr. Brown",
                dateTime: "2024-02-10 10:30 AM",
                attachments: ["file1.pdf"],
            },
            {
                surgery: "Knee Replacement",
                generatedBy: "Dr. Wilson",
                dateTime: "2023-11-25 02:45 PM",
                attachments: ["file2.pdf"],
            },
        ],
    });
    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage;
    const currentReports = patientData.reports.slice(indexOfFirstReport, indexOfLastReport);

    const totalPages = Math.ceil(patientData.reports.length / reportsPerPage);
    return (
        <div className="pp-container">
            <div className="pp-top">
                <div className="row ng-prof">
                    <div className="col">
                        <div className="row profile-data">
                            <div className="col">
                                <img className="pro-pic" src={profile1} alt="profile1" />
                            </div>
                            <div className="col p-data">
                                <h2>John Paul</h2>
                                <p>patient</p>
                            </div>
                        </div>
                    </div>
                    <div className="col profile-data-two">
                        <button>Download Report</button>
                        <span className="close" onClick={handleClose}>&times;</span>
                    </div>
                </div>
            </div>

            <div className="pp-middle">
                <div className="pp-mid-one">
                    <h2>Personal details</h2>

                    <div className="row">
                        <div className="col input-container">
                            <input type="text" />
                            <label>First Name</label>
                        </div>
                        <div className="col input-container">
                            <input type="text" />
                            <label>Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col input-container">
                                <input type="email" />
                                <label>Email</label>
                            </div>
                            <div className="col input-container">
                                <input type="number" />
                                <label>Phone no.</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col input-container">
                                <input type="date" />
                                <label>Date of birth</label>
                            </div>
                            <div className="col input-container">
                                <input type="text" />
                                <label>Age</label>
                            </div>
                        </div>
                        <div className="row textarea-container">
                            <textarea  />
                            <label>Address</label>
                        </div>
                </div>
                <div className="pp-mid-two">
                    <h2>Medical details</h2>
                    <div className="col input-container">
                        <input type="text" />
                        <label>Clinik</label>
                    </div>
                    <div className="col input-container">
                        <input type="text" />
                        <label>Consultant</label>
                    </div>
                    <div className="col input-container">
                        <input type="text" />
                        <label>Blood Group</label>
                    </div>
                    <div className="col input-container">
                        <input type="date" />
                        <label>Last Visited</label>
                    </div>
                </div>
            </div>

            <div className="pp-bottom">
                <h2>Medical Reports</h2>
                <table className="pp-table">
                <thead>
                        <tr>
                            <th>Surgery</th>
                            <th>Generated By</th>
                            <th>Date & Time</th>
                            <th>Attachments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentReports.map((report, index) => (
                            <tr key={index}>
                                <td>{report.surgery}</td>
                                <td>{report.generatedBy}</td>
                                <td>{report.dateTime}</td>
                                <td>
                                    <div className="icon-container">
                                        {report.attachments.map((file, idx) => (
                                            <a key={idx} href={`#`} className="file-icon">
                                                <FontAwesomeIcon icon={faFile} />
                                            </a>
                                        ))}
                                        <FontAwesomeIcon icon={faEye} className="view-icon" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pd-paginator">
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                        <FaArrowLeft className="pag-icon-left" />
                    </button>
                    <span>  {currentPage} of {totalPages} </span>
                    <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                    <FaArrowRight className="pag-icon-right" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Patient_Profile;