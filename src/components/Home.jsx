import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <section id="home" className="section section1">
                <div className="header">
                    <div className="Logo">
                        <h4>ThalCare</h4>
                    </div>

                    <div className="headerLinks">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#article">Articles</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="login">
                        <button type="button">Login</button>
                    </div>
                </div>

                <div className="section1-body">
                    <p className="sec1">Early Detection for a Healthier Future.</p>
                    <h1>Detect Thalassemia Early.</h1>
                    <p className="sec2">
                        Our Ai-driven system analyzes Full Blood Count (FBC) reports to help detect thalassemia risk.
                    </p>
                    <div className="sec1-buttons">
                        <button type="button" className="sec1-btn1">Upload FBC Report</button>
                        <button type="button" className="sec1-btn2">How It Works</button>
                    </div>
                </div>
            </section>
            
            <section id="about" className="section section2">
                <div className="section2-head">
                    <h1>How It Works</h1>
                    <p>Addressing the challange of early detection of thalassemia using FBC reports and ensuring timely notification to the specific clinic for further consultation.</p>
                </div>
                <div className="section2-body">
                    <div className="box">
                        <div className="box-icon-backround">
                            <div className="box-icon">
                            </div>
                        </div>
                    </div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </section>
            
            <section id="about" className="section section3"></section>

            <section id="article" className="section section4"></section>
            
            <section id="contact" className="section section5"></section>

        </div>
    )
}
export default Home