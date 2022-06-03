import axios from "axios";
import { useRef, useState } from "react"
import { CustomerNavBar } from "../Customer/CustomerNavBar";




export default function DeleteCreditCard(){

    const [showDelete, setShowDeleted] = useState(false);


    const creditCardInput = useRef();


    const url = "https://whrilinginrags.azurewebsites.net"



    async function deleteCreditCard(){


        try{
            console.log(Math.random())
            const response = await axios.delete(`${url}/Credit/delete-card?cardNumber=${creditCardInput.current.value}` )
            
            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)
        }

    }


    return(
        <>
          <CustomerNavBar />
      <h3>Are you sure you want to delete your creditcard? If so please enter your Credit Card Number and hit the delete credit card button.</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter your Credit Card Number" ref={creditCardInput}></input>

        

        <br></br>
        <button onClick={() => { 
            deleteCreditCard(); 
            setShowDeleted(!showDelete) 
            }}
            >Delete CreditCard</button>
        {showDelete && <p>You Have Successfully Deleted Your Credit Card</p>}
        </>

    )

}