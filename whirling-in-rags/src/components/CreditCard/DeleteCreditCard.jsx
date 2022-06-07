import axios from "axios";
import { useRef, useState } from "react"
import { CustomerNavBar } from "../Customer/CustomerNavBar";




export default function DeleteCreditCard(){

    const [showDelete, setShowDeleted] = useState(false);


    const creditCardInput = useRef();


    const url = "https://whrilinginrags.azurewebsites.net"



    async function deleteCreditCard(){


        try{
            const response = await axios.delete(`${url}/Credit/delete-card?cardNumber=${creditCardInput.current.value}` )

            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)
        }

    }


    return(
        <>
        <center>
          <CustomerNavBar />
          <br></br>
      <h2>Enter the number of the credit card you would like to delete</h2>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter your Credit Card Number" ref={creditCardInput}></input>

        

        <br></br>
        <br></br>
        <button class="B1" onClick={() => { 
            deleteCreditCard(); 
            setShowDeleted(!showDelete) 
            }}
            >Delete CreditCard</button>
        {showDelete && <p>You Have Successfully Deleted Your Credit Card</p>}
        
        </center>
        </>

    )

}