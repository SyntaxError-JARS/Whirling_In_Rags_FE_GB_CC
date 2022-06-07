import axios from "axios";
import { useRef } from "react";
 import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar";


export default function CustomerLogIn() {
    const usernameInput = useRef();
    const passwordInput = useRef();
     //const [user, setUser] = useContext(userContext);
     const navigate = useNavigate();
    const url = "https://whrilinginrags.azurewebsites.net";

    async function login() {
        
        const customer = {
            username: usernameInput.current.value,
            password: passwordInput.current.value,
        };

        if (customer.password === "admin") {
            navigate("/admin");
        } else {
            try {
                const response = await axios.post(`${url}/auth`, customer);
                console.log(response.data);
                // console.log("Hey this is the user prior ", user);
                // setUser({ ...user, username: customer.username });
                // console.log("This is after we set the user ", user);
                // the below code, manipulates the DOM
                 //window.location.replace("http://localhost:3000/dashboard");
                 navigate("/customer");
            } catch (error) {
                console.error(error.response.data);
                alert(error.response.data);
            }
        }
    }

    return (
        <>
        <NavBar />
        <div class="Login">
            <center>
            <input placeholder="Enter username" ref={usernameInput}></input>
            <span></span>
            <input type="password" placeholder="Enter password" ref={passwordInput}></input>
            <br></br>
            <br></br>
            <button class="B1" onClick={login}>Login</button>
            </center>
            </div>
        </>
    );
}