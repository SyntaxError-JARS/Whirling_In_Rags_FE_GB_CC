import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar";


export default function CustomerRegister(){
    const navigate = useNavigate();

    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();
    //const balanceInput = useRef();
    // const isAdmin = false;


    // const customer = {
            
    //     fname: "Geoffrey",
    //     lname: "Blois",
    //     username: "movie",
    //     password: "blois",
    //     balance:  0,
    //     isAdmin: false
    // }

    const url = "https://whrilinginrags.azurewebsites.net"

    async function customerReg(){
        

        const customer = {
            
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            username: usernameInput.current.value,
            password: passwordInput.current.value,
            balance:  0,
            isAdmin: false
        }
       

        
        try{
        const response = await axios.post(`${url}/customer/register` , customer)
        navigate("/customer");
        // balance = 0;
        // isAdmin = false;
        console.log(response.data);
        //console.log(response)
        } catch(error){
            console.error(error.response.data);
                alert(error.response.data);
        }
        
    }

    return(
        <>
        <NavBar />
        <center>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter First Name" ref={fnameInput}></input>
        <br></br>
        <input placeholder="Enter Last Name" ref={lnameInput}></input>
        <br></br>
        <input placeholder="Enter Username" ref={usernameInput}></input>
        <br></br>
        <input type="password" placeholder="Enter password" ref={passwordInput}></input>
        <br></br>
        <br></br>
        <button class="B1" onClick={customerReg}>Register</button>

</center>
        </>
    )

}