import axios from "axios";
import { useRef } from "react"

export default function DeleteCreditCard(){


    const creditCardInput = useRef();

    const url = "https://whrilinginrags.azurewebsites.net"



    async function deleteCreditCard(){

        const creditCardIn = {
            cardNumber: creditCardInput.current.value
        }


        try{
            const encodedValue = encodeURIComponent(creditCardIn);
            const response = await axios.delete((`${url}/Credit/delete?cardNumber=${encodedValue}` , creditCardIn ))
            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)
        }

    }

    return(
        <>
          <h3>Are you sure you want to delete your creditcard? If so please enter your username and hit the delete credit card button.</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter your username" ref={creditCardInput}></input>
        <br></br>
        <button onClick={deleteCreditCard}>Delete CreditCard</button>
        </>

    )

}