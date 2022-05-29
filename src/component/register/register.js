import { Link } from "react-router-dom";
import './register.css';
const Register = ()=>
{
    return(
        <div className="register">
            <form action="/register" className="sign-form" method="POST">
                <div className="register-title">
                    <h1>Register</h1>
                </div>
                <div className="register-input">
                    <div className="register-input1">
                        <input className="special" type="text" name="username" placeholder="USERNAME"/>
                    </div>
                    <div className="register-input1">
                        <input className="special" type="password" name="password" placeholder="PASSWORD"/>
                    </div>
                </div>
                <div className="register-suggestion">
                    <Link to="/login">Already have an account?</Link>
                </div>
                <div className="register-submit">
                    <button className="register-submit-btn" type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;