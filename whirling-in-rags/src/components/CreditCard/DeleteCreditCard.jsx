import axios from "axios";
import { useRef } from "react"

export default function DeleteCreditCard(){


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
          <h3>Are you sure you want to delete your creditcard? If so please enter your Credit Card Number and hit the delete credit card button.</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter your Credit Card Number" ref={creditCardInput}></input>
        <br></br>
        <button onClick={deleteCreditCard}>Delete CreditCard</button>
        </>

    )

}