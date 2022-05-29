import { useRef } from "react";
import axios from "axios";

export default function CustomerRegister(){

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
        // balance = 0;
        // isAdmin = false;
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }

    return(
        <>
        <h3>Welcome, Please Enter Your Information Below To Sign Up</h3>
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
        <button onClick={customerReg}>Register</button>


        </>
    )

}