import { Link } from "react-router-dom";
const Register = ()=>
{
    return(
        <div className="sign-container">
            <form action="/register" className="sign-form" method="POST">
                <h1>Register</h1>
                <input type="text" name="username" placeholder="User name"/>
                    <input type="password" name="password" placeholder="password"/>
                <Link to="/login">Already have an account?</Link>
                <button type="submit">Register</button>
            </form>

        </div>
    );
}

export default Register;