import { useNavigate } from "react-router-dom";
import "../styles/Detected_Patient_Profile.css";
import profile1 from "../img/docProfile1.jpg"
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from "victory";

const Detected_Patient_Profile = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1); 
    };

    const fbcHistory = [
        { x: "Jan", y: 2.5 },
        { x: "Feb", y: 4.2 },
        { x: "Mar", y: 6.0 },
        { x: "Apr", y: 3.8 },
        { x: "May", y: 5.1 },
        { x: "Jun", y: 7.4 },
    ].map(item => ({ ...item, y: Number(item.y) })); 
    
    const getColor = (y) => {
        if (y <= 3) return "green";   // Low
        if (y <= 6) return "yellow";  // Medium
        return "red";                 // High
    };


    return (
        <div className="pp-container">
            <div className="pp-top">
                <div className="row ng-prof">
                    <div className="col">
                        <div className="row profile-data-d">
                            <div className="col">
                                <img className="pro-pic" src={profile1} alt="profile1" />
                            </div>
                            <div className="col p-data">
                                <h2>John Paul</h2>
                                <p>Thalaseemia Detected</p>
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
                            <textarea type="text" />
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
                <div className="pp-bottom-def">
                    <h2>Patients FBC History</h2>
                    <div className="lineDef">
                            <div className="line-color"><div className="line-color1"></div>Hemoglobin</div>
                            <div className="line-color"><div className="line-color2"></div>MCV</div>
                            <div className="line-color"><div className="line-color3"></div>MVH</div>
                    </div>
                </div>
                
                <div className="bp-graph">
                <VictoryChart
                        theme={VictoryTheme.material}
                        domainPadding={20}
                        width={1500} height={250}
                    >
                        <VictoryAxis label="Months" />
                        <VictoryAxis dependentAxis label="FBC Level" />

                        <VictoryLine
                            data={fbcHistory.filter((d) => d.y <= 3)}
                            style={{ data: { stroke: "green", strokeWidth: 3 } }}
                        />

                        <VictoryLine
                            data={fbcHistory.filter((d) => d.y > 3 && d.y <= 6)}
                            style={{ data: { stroke: "yellow", strokeWidth: 3 } }}
                        />

                        <VictoryLine
                            data={fbcHistory.filter((d) => d.y > 6)}
                            style={{ data: { stroke: "red", strokeWidth: 3 } }}
                        />
                    </VictoryChart>

                </div>
            </div>
        </div>
    );
};

export default Detected_Patient_Profile;