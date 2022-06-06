import './login.css'
import { Link,useNavigate  } from "react-router-dom";
import Route from "../../route/route";


const handleLogin = async (event,navigate) => {
    event.preventDefault();
    let params = {
        username:event.target[0].value,
        password: event.target[1].value
    }
    const result = await Route.loginPost(params)
    if (result===true)
        navigate('/')
    else
        alert("Wrong username or password")
}
const Login = ()=>
{
    let navigate = useNavigate()
    return(
        <div className={'login'}>
            <form action="#" onSubmit={(formData) => {
                handleLogin(formData,navigate);
                return false
            }}>
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