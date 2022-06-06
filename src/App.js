import './App.css';
import Login from "./component/login/login";
import { Routes, Route } from "react-router-dom";
import Register from "./component/register/register";
import Home from "./component/home/home";
function App() {

    return (
        <div className={"App"}>
            <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path={"/"} element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;