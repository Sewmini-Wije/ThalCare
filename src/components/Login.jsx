import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Link to={'/dashboard'}><button>Login</button></Link>
    );
};

export default Login;