import { NavLink, Outlet } from "react-router-dom";
import "../styles/Layout.css";
import { faBell, faDashboard, faUserGroup, faArrowRotateBack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import docProfile1 from "../img/docProfile1.jpg";

const user = {
    name: "John Doe",
    profilePic: docProfile1 
};

const Layout = () => {

    return (
        <div className="layout-container">
            <aside className="side-nav">
                <h1>ThalCare</h1>

                <nav>
                    <ul>
                        <li className="py-2">
                            <img src={user.profilePic} alt="User" className="user-img" />
                            <p className="user-name"> {user.name} </p>
                        </li>

                        <li className="py-2">
                            <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                                <FontAwesomeIcon icon={faDashboard} className="nav-icon" />
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="py-2">
                            <NavLink to="/patient_details" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                                <FontAwesomeIcon icon={faUserGroup} className="nav-icon" />
                                Patient Details
                            </NavLink>
                        </li>
                        <li className="py-2">
                            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} >
                                <FontAwesomeIcon icon={faArrowRotateBack} className="nav-icon" />
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="main-content">
                <header className="layout-header">
                    <FontAwesomeIcon icon={faBell} className="layout-notify" />
                </header>
                <main className="content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;