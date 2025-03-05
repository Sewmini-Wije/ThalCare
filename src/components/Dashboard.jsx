import "../styles/Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dash-section1">
                <div className="dash1"></div>
                <div className="dash1"></div>
                <div className="dash1"></div>
            </div>

            <div className="dash-section2">
                <div className="lineChart">
                    <h4>Patients Detected Yearly </h4>
                    <div className="lineDef">
                        <div className="line-color"><div className="line-color1"></div>Minor</div>
                        <div className="line-color"><div className="line-color2"></div>Intermedia</div>
                        <div className="line-color"><div className="line-color3"></div>Major</div>
                        
                        
                        
                    </div>
                </div>
                <div className="pieChart"></div>
            </div>

            <div className="dash-section3"></div>
        </div>
    );
};

export default Dashboard;