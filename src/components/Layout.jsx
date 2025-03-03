import { NavLink, Outlet } from "react-router-dom";
import "../styles/Layout.css";
import { faBell, faDashboard, faArrowRotateBack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import docProfile1 from "../img/docProfile1.jpg";

const user = {
    name: "John Doe",
    profilePic: docProfile1 // Replace with real user image URL
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

                        <li className="py-2 nav-link">
                            {/* <Link to="/dashboard">Dashboard</Link> */}
                            <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} >
                                <FontAwesomeIcon icon={faDashboard} />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="py-2 nav-link">
                            <FontAwesomeIcon icon={faArrowRotateBack} />
                            {/* <Link to="/">Logout</Link> */}
                            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} >Logout</NavLink>
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