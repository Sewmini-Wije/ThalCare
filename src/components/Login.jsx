import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard")
    }

    return (
        <div className="container">
            <div className="logo"><h1>ThalCare</h1></div>
            <div className="login-container">
                <div className="login-container1">
                    <div className="txt-login">
                    <h1>Welcome</h1>
                    <p>We are glad to see you again! Please login to access your account.</p>
                    </div>
                </div>
                {/* <div className="login-container2">
                <h1>Login</h1>
                    <div className="login-content">
                        <div className="content">
                            <label htmlFor="email" className="login-label">Email</label>
                        </div>
                        <input type="email" />    
                        <div className="pw-content">
                            <div className="content">
                                <label htmlFor="email" className="login-label">Password</label>
                            </div>
                                <label htmlFor="email" className="forget-password">Forget Password?</label>
                        </div>
                        <input type="password" />
                    </div>
                    <Link to={'/dashboard'}><button>Login</button></Link>
                </div> */}

                <div className="login-container2">
                    <div className="login-content">
                        <h1 className="login-ct">LOGIN</h1>
                        <div className="lg-content">
                            <label htmlFor="Email" className="login-label">Email</label>
                            <input type="email" className="login-ct"/>  
                        </div>
                        <div className="lg-content">
                        <div className="pw-content">
                            <label htmlFor="password" className="login-label">Password</label>
                            <a href="#">Forget Password?</a>
                        </div>
                        <input type="password" className="login-ct"/>
                        </div>
                        
                        <button onClick={handleLogin} className="login-ct">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;