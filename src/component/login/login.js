import { Link } from "react-router-dom";
import './login.css';
const Login = ()=>
{
    return(
        <div className="login">
            <form action="/login" className="sign-form" method="post">
                <div className="login-title">
                    <h1>Login</h1>
                </div>
                <div className="login-input">
                    <div className="login-input1">
                        <input className="special" type="text" name="username" placeholder="USERNAME"/>
                    </div>
                    <div className="login-input1">
                        <input className="special" type="password" name="password" placeholder="PASSWORD"/>
                    </div>
                </div>
                <div className="login-suggestion">
                    <Link to="/register">Need an account?</Link>
                </div>
                <div className="login-submit">
                    <button className="login-submit-btn" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;