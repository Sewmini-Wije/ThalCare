import React, { useState } from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faStethoscope, faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import article1 from "../img/article1.jpeg";
import article2 from "../img/article2.jpeg";
import article3 from "../img/article3.jpeg";
import article4 from "../img/article4.jpeg";
import docProfile1 from "../img/docProfile1.jpg";
import docProfile2 from "../img/docProfile2.jpg";
import docProfile3 from "../img/docProfile3.jpg";

const articles = [
    { id: 1, image: article1 },
    { id: 2, image: article2 },
    { id: 3, image: article3 },
    { id: 4, image: article4 },
];

const docProfiles = [
    {
        rating: 5,
        review: "Thalcare has revolutionized our approach to thalassemia screening. Its accurate and early detection capabilities have allowed us to provide timely improving patient outcomes significantly.",
        name: "Dr. Aisha Patel",
        position: "Hematologist",
        hospital: "Global Health Hospital",
        profileImg: docProfile1,
    },
    {
        rating: 4,
        review: "A game-changer in early detection. The efficiency of Thalcare allows us to identify patients sooner, leading to better treatment outcomes.",
        name: "Dr. John Doe",
        position: "Pediatrician",
        hospital: "Sunrise Medical Center",
        profileImg: docProfile2, 
    },
    {
        rating: 5,
        review: "Thalcare’s AI-driven technology is a breakthrough. It has significantly improved our ability to detect thalassemia cases early and provide better patient care.",
        name: "Dr. Sarah Lee",
        position: "Medical Researcher",
        hospital: "National Health Institute",
        profileImg: docProfile3, 
    },
    {
        rating: 3,
        review: "The platform is good, but it could use some improvements in report processing speed. Overall, it’s a great initiative.",
        name: "Dr. Michael Roberts",
        position: "General Physician",
        hospital: "City Care Hospital",
        profileImg: docProfile2, 
    },
    {
        rating: 4,
        review: "Very helpful system for early diagnosis. The notification feature is excellent and helps us take immediate action.",
        name: "Dr. Emily Davis",
        position: "Oncologist",
        hospital: "Green Valley Hospital",
        profileImg: docProfile1, 
    }
];
  

const Home = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [profileIndex, setProfileIndex] = useState(0);
    const itemsPerPage = 3;
  
    const handleNext = (list, setIndex) => {
        if (setIndex === setStartIndex && startIndex + itemsPerPage < articles.length) {
            setStartIndex(startIndex + itemsPerPage);
        } else if (setIndex === setProfileIndex && profileIndex + itemsPerPage < docProfiles.length) {
            setProfileIndex(profileIndex + itemsPerPage);
        }
    };
  
    const handlePrev = (setIndex) => {
        if (setIndex === setStartIndex && startIndex - itemsPerPage >= 0) {
            setStartIndex(startIndex - itemsPerPage);
        } else if (setIndex === setProfileIndex && profileIndex - itemsPerPage >= 0) {
            setProfileIndex(profileIndex - itemsPerPage);
        }
    };
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
                        <FontAwesomeIcon icon={faHeartbeat} className="box-icon" />
                        <h3>Automated Analysis</h3>
                        <hr />
                        <p> Our advanced algorithms analyze FBC reports to identify potential thalassemia cases quickly and accurately. </p>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon icon={faStethoscope} className="box-icon" />
                        <h3>Clinic Notification</h3>
                        <hr />
                        <p> Automatically notify the relevant clinic about the detected thalassemia patient for prompt consultation and care. </p>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon icon={faNotesMedical} className="box-icon" />
                        <h3>Patient Follow-up</h3>
                        <hr />
                        <p> Utilize cutting-edge technology to ensure timely follow-up and continuous care for patients diagnosed with thalassemia. </p>
                    </div>
                </div>
            </section>
            
            <section id="article" className="section section3">
                <div className="section3-head">
                    <h1>Articles</h1>
                    <p> 
                        Stay informed with the latest insights on thalassemia-understand its symptoms, 
                        diagnosis, treatment options,and global impact to take proactive steps for better health. 
                        </p>
                </div>
                <div className="section3-body">
                    <button onClick={() => handlePrev(setStartIndex)} disabled={startIndex === 0}>&#10094;</button>
                    <div className="articles">
                        {articles.slice(startIndex, startIndex + itemsPerPage).map(article => (
                            <div key={article.id} className="article">
                                <img src={article.image} alt={`Article ${article.id}`} />
                            </div>
                        ))}
                    </div>
                    <button onClick={() => handleNext(articles, setStartIndex)} disabled={startIndex + itemsPerPage >= articles.length}>&#10095;</button>
                </div>
            </section>
  
            <section className="section section4">
                <div className="section4-head">
                    <h1>Each client is important</h1>
                    <p>
                        Partnering with healthcare professionals to enhance early detection and improve lives 
                        through innovation in thalassemia screening.
                    </p>
                </div>
                <div className="section4-body">
                    <button onClick={() => handlePrev(setProfileIndex)} disabled={profileIndex === 0}>&#10094;</button>
                    {docProfiles.slice(profileIndex, profileIndex + itemsPerPage).map((docProfile, index) => (
                        <div key={index} className="box">
                            <div className="rating">{"★".repeat(docProfile.rating)}{"☆".repeat(5 - docProfile.rating)}</div>
                            <p>{docProfile.review}</p>
                            <div className="profileName">
                                <p>- {docProfile.name}, {docProfile.position}, {docProfile.hospital}</p>
                            </div>
                            <div className="profile">
                                <img src={docProfile.profileImg} alt={docProfile.name} />
                            </div>
                        </div>
                    ))}
                    <button onClick={() => handleNext(docProfiles, setProfileIndex)} disabled={profileIndex + itemsPerPage >= docProfiles.length}>&#10095;</button>
                </div>
            </section>
            
            <section id="contact" className="section section5">
                <div className="section5-head">
                    <p className="sec5-p1">Newsletter</p>
                    <h1>JOIN US</h1>
                    <p className="sec5-p2">Problem trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>

                    <div className="subscribe">
                        <input type="email" placeholder="Your Email" />
                        <button className="sub-btn">Subscribe</button>
                    </div>
                </div>
                <div className="section5-footer">
                    <div className="footer1">
                    <table>
                            <thead>
                                <tr>
                                    <th>Company Info</th>
                                    <th>Legal</th>
                                    <th>Features</th>
                                    <th>Resources</th>
                                    <th>Get in Touch</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>About Us</td>
                                    <td>About Us</td>
                                    <td>Business marketing</td>
                                    <td>IOS & Android</td>
                                    <td>(480) 555-0103</td>
                                </tr>
 
                                <tr>
                                    <td>Career</td>
                                    <td>Career</td>
                                    <td>User Analytic</td>
                                    <td>Watch & Demo</td>
                                    <td>4517 Washington Ave, Manchester, Kentucky 39495</td>
                                </tr>

                                <tr>
                                    <td>We are hirirng</td>
                                    <td>We are hirirng</td>
                                    <td>Live Chat</td>
                                    <td>Customers</td>
                                    <td>debra.hoit@example.com</td>
                                </tr>

                                <tr>
                                    <td>Blog</td>
                                    <td>Blog</td>
                                    <td>Unlimited Support</td>
                                    <td>API</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="footer2">
                        <p>ThalCare All Right Reserved</p> 
                        <div className="footer2-img">

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Home