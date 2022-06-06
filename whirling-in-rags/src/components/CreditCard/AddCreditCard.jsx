import { useRef } from "react";
import axios from "axios";
import { CustomerNavBar } from "../Customer/CustomerNavBar";



export default function AddCreditCard(){

    const cardNumberInput = useRef();
    const cardNameInput = useRef();
    const cvvInput = useRef();
    const expDateInput = useRef();
    const zipCodeInput = useRef();
    const creditLimitInput = useRef();
    const usernameInput = useRef();
   

    const url = "https://whrilinginrags.azurewebsites.net"

    async function addCredit(){

        const Credit = {
            
            cardNumber: cardNumberInput.current.value,
            cardName: cardNameInput.current.value,
            cvv: cvvInput.current.value,
            expDate: expDateInput.current.value,
            zipCode: zipCodeInput.current.value,
            creditLimit: creditLimitInput.current.value,
            username: usernameInput.current.value
        }
        
        try{
        const response = await axios.post(`${url}/Credit/add` , Credit)
       
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }

    return(
        <>
        <center>
        <CustomerNavBar />
        <br></br>
        <h2>Please Enter Your Credit Card Information Below</h2>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter card number" ref={cardNumberInput}></input>
        <br></br>
        <input placeholder="Enter name on card" ref={cardNameInput}></input>
        <br></br>
        <input placeholder="Enter the cvv" ref={cvvInput}></input>
        <br></br>
        <input placeholder="Enter expiration date" ref={expDateInput}></input>
        <br></br>
        <input placeholder="Enter the zip code" ref={zipCodeInput}></input>
        <br></br>
        <input placeholder="Enter the credit limit" ref={creditLimitInput}></input>
        <br></br>
        <input placeholder="Enter your username" ref={usernameInput}></input>
        <br></br>
        <br></br>
        <button class="B1" onClick={addCredit}>Add Credit Card</button>

        </center>
        </>
    )

}