import axios from "axios";
import { useRef } from "react";
 import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar";
//import { userContext } from "../../App";

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
            <h4>Welcome back, please log in below.</h4>
            <input placeholder="Enter username" ref={usernameInput}></input>
            <input type="password" placeholder="Enter password" ref={passwordInput}></input>
            <button onClick={login}>Login</button>
        </>
    );
}