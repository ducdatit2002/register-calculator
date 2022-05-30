import { Link } from "react-router-dom";
import './register.css';
import {route} from "../../route/route";
const axios = require('axios')
const Register = ()=>
{
    const submit =async (event) => {
        event.preventDefault();
        let params = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        let result = await route.register(params);
        console.log(result)
    }
    return(
        <div className="register">
            <form action="#" onSubmit={(formData) => {submit(formData); return false}} className="sign-form" >
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