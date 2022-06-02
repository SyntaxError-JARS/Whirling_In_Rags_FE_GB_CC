import axios from "axios";
import { useRef, useState } from "react"
import { CustomerNavBar } from "../Customer/CustomerNavBar";

export default function CustomerDelete(){

   
   


    const [showDelete, setShowDeleted] = useState(false);


    const customerInput = useRef();


    const url = "https://whrilinginrags.azurewebsites.net"



    async function deleteCustomer(){


        try{
            const response = await axios.delete(`${url}/customer/delete-account?username=${customerInput.current.value}` )

            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)
        }

    }


    return(
        <>
          <CustomerNavBar />
      <h3>Are you sure you want to delete your account? If so please enter your Username and hit the delete credit card button.</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter your Username Here" ref={customerInput}></input>

        

        <br></br>
        <button onClick={() => { 
            deleteCustomer(); 
            setShowDeleted(!showDelete) 
            }}
            >Delete Account</button>
        {showDelete && <p>You Have Successfully Deleted Your Account</p>}
        </>
    )
}