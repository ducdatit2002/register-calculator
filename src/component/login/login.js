import { Link } from "react-router-dom";
const Login = ()=>
{
    return(
        <div className="sign-container">
            <form action="/login" className="sign-form" method="post">
                <h1>Login</h1>
                <input type="text" name="username" placeholder="User name"/>
                <input type="password" name="password" placeholder="password"/>
                <input type="password" name="password" placeholder="re-password"/>
                <Link to="/register">Need an account?</Link>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;