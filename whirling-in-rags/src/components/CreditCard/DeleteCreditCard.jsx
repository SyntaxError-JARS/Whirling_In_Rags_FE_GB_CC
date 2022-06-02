import axios from "axios";
import { useRef } from "react"
import { CustomerNavBar } from "../Customer/CustomerNavBar";



export default function DeleteCreditCard(){


    const cardNumberInput = useRef();

    const url = "https://whrilinginrags.azurewebsites.net"



    async function deleteCreditCard(){

        const Credit = {
            cardNumber: cardNumberInput.current.value
        }


        try{
            const response = await axios.delete((`${url}/Credit/delete-card` , cardNumberInput.current.value ))
            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error.response.data)
            console.error(error)
        }

    }

    return(
        <>
        <CustomerNavBar />
          <h3>Are you sure you want to delete your creditcard? If so please enter your username and hit the delete credit card button.</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter your credit card" ref={cardNumberInput}></input>
        <br></br>
        <button onClick={deleteCreditCard}>Delete CreditCard</button>
        </>

    )

}