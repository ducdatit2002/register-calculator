import { Link } from "react-router-dom";
import './login.css';
import {route} from "../../route/route";

const Login = ()=>
{
    const submit =async (event) => {
        event.preventDefault();
        let params = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        let result = await route.login(params);
        console.log(result)
    }
    return(
        <div className="login">
            <form action="#" onSubmit={(formData) => {submit(formData); return false}} className="sign-form" >
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