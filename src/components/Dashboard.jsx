import { VictoryChart, VictoryLine, VictoryAxis, VictoryPie, VictoryTheme, VictoryLabel, VictoryArea } from "victory";
import "../styles/Dashboard.css";

const Dashboard = () => {

    const totalRegisterdPatients = 1025;
    const newPatientAmount = 50;
    const detectedPatientAmount = 75;
    const increasedRegisterdPatients = "15%";
    const increasedNewPatientAmount = "5%";
    const increasedDetectedPatientAmount = "10%";


    const dataMinor = [
        { year: 2018, count: 20 },
        { year: 2019, count: 35 },
        { year: 2020, count: 50 },
        { year: 2021, count: 65 },
        { year: 2022, count: 80 },
    ];

    const dataIntermedia = [
        { year: 2018, count: 15 },
        { year: 2019, count: 30 },
        { year: 2020, count: 45 },
        { year: 2021, count: 55 },
        { year: 2022, count: 70 },
    ];

    const dataMajor = [
        { year: 2018, count: 10 },
        { year: 2019, count: 20 },
        { year: 2020, count: 30 },
        { year: 2021, count: 40 },
        { year: 2022, count: 55 },
    ];

    const sampleData = [
        { year: 2018, count: 10 },
        { year: 2019, count: 20 },
        { year: 2020, count: 30 },
        { year: 2021, count: 40 },
        { year: 2022, count: 55 },
    ];

    const totalMinor = dataMinor.reduce((acc, curr) => acc + curr.count, 0);
    const totalIntermedia = dataIntermedia.reduce((acc, curr) => acc + curr.count, 0);
    const totalMajor = dataMajor.reduce((acc, curr) => acc + curr.count, 0);
    const totalPatients = totalMinor + totalIntermedia + totalMajor;

    return (
        <div className="dashboard-container">
            <div className="dash-section1">
                <div className="dash1">
                     <div className="dash1-container">
                        <div className="amount">{`${totalRegisterdPatients}`}</div>
                        <div className="amount-desc">Total Patients</div>
                    </div>
                    <p>{`${increasedRegisterdPatients}`} increased than last year </p> 
                </div>
                <div className="dash1">
                    <div className="dash1-container">
                        <div className="amount">{`${newPatientAmount}`}</div>
                        <div className="amount-desc">Total Patients</div>
                    </div>
                    <p>{`${increasedNewPatientAmount}`} more than yesterday </p> 
                </div>
                <div className="dash1">
                    <div className="dash1-container">
                        <div className="amount">{`${detectedPatientAmount}`}</div>
                        <div className="amount-desc">Total Patients</div>
                    </div>
                    <p>{`${increasedDetectedPatientAmount}`} more than last month </p> 
                </div>

        </div>

            <div className="dash-section2">
                <div className="lineChart">
                    <h4>Patients Detected Yearly </h4>
                    <div className="lineDef">
                        <div className="line-color"><div className="line-color1"></div>Minor</div>
                        <div className="line-color"><div className="line-color2"></div>Intermedia</div>
                        <div className="line-color"><div className="line-color3"></div>Major</div>
                    </div>
                    <div className="lineGraph">
                        <VictoryChart width={1200} height={300} domainPadding={{ x: 50, y: 20 }} >
                            
                            <VictoryAxis tickFormat={(t) => t} style={{ axis: { stroke: "black" } }} />

                            <VictoryAxis
                                dependentAxis
                                style={{
                                    axis: { stroke: "none" }, 
                                    tickLabels: { fontSize: 12, padding: 5 }, 
                                    grid: { stroke: "black", strokeDasharray: "4" }, 
                                }}
                            />

                            <VictoryLine
                                data={dataMinor}
                                x="year"
                                y="count"
                                interpolation="cardinal"
                                style={{ data: { stroke: "green", strokeWidth: 2 } }}
                            />
                            <VictoryLine
                                data={dataIntermedia}
                                x="year"
                                y="count"
                                interpolation="cardinal"
                                style={{ data: { stroke: "yellow", strokeWidth: 2 } }}
                            />
                            <VictoryLine
                                data={dataMajor}
                                x="year"
                                y="count"
                                interpolation="cardinal"
                                style={{ data: { stroke: "red", strokeWidth: 2 } }}
                            />
                        </VictoryChart>
                    </div>
                </div>
                <div className="pieChart">
                    <h4>Number of Detected Patients </h4>
                    <div className="pieChart-container">
                        <svg viewBox="20 50 400 350">
                            <VictoryPie
                                standalone={false}
                                width={450}
                                height={450}
                                data={[
                                    { y: 80 },
                                    { y: 70 },
                                    { y: 55 },
                                ]}
                                innerRadius={100}
                                labelRadius={120}
                                theme={VictoryTheme.material}
                                style={{
                                    data: {
                                        fillOpacity: 0.9, 
                                        stroke: "#fff", 
                                        strokeWidth: 2,
                                    },
                                }}
                                colorScale={["green", "yellow", "red"]}
                                labels={() => null} 
                            />
                            <VictoryLabel
                                textAnchor="middle"
                                style={{ fontSize: 60, fontWeight: "bold" }}
                                x={220}
                                y={220}
                                text={`${totalPatients}`}
                            />
                        </svg>
                    </div>
                    <div className="pieChart-decs">
                        <table>
                            <tr>
                                <td><div className="line-color1 color"></div></td>
                                <td>Minor</td>
                                <td><div className="count">Total: {totalMinor}</div></td>
                            </tr>
                            <tr>
                                <td><div className="line-color2 color"></div></td>
                                <td>Intermedia</td>
                                <td><div className="count">Total: {totalIntermedia}</div></td>
                            </tr>
                            <tr>
                                <td><div className="line-color3 color"></div></td>
                                <td>Major</td>
                                <td><div className="count">Total: {totalMajor}</div></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div className="dash-section3">
                <h4>Trent of New Patients Each</h4>
                <div className="areaChart-container">
                    <VictoryChart width={4000} height={500} theme={VictoryTheme.clean}>
                        <VictoryAxis
                            style={{
                                axis: { stroke: "black" },
                                tickLabels: { fontSize: 30, padding: 5 },
                                grid: { stroke: "black", strokeDasharray: "4" },
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            style={{
                                axis: { stroke: "none" },
                                tickLabels: { fontSize: 30, padding: 5 },
                            }}
                        />
                        <VictoryArea
                            data={sampleData}
                            x="year"
                            y="count"
                            interpolation="cardinal"
                            style={{
                                data: { fill: "lightblue", stroke: "blue", strokeWidth: 2 },
                            }}
                        />
                    </VictoryChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;