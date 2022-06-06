import {Link, useNavigate} from "react-router-dom";
import './register.css';
import Route from "../../route/route";
const handleRegister = async (event,navigate) => {
    event.preventDefault();
    let params = {
        username:event.target[0].value,
        password: event.target[1].value
    }
    try
    {
        const result = await Route.registerPost(params)
        console.log(result)
        navigate('/login')
    }
    catch (err)
    {
        alert("Error due to ",err)
    }

}
const Register = ()=>
{
    let navigate = useNavigate ();
    return(
        <div className="register">
            <form action="#" onSubmit={(formData) => {handleRegister(formData,navigate); return false}} className="sign-form" >
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