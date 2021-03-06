import axios from "axios";
import { useRef, useState } from "react"
import { CustomerNavBar } from "../Customer/CustomerNavBar";

export default function DeleteOrder(){

 const [showDelete, setShowDeleted] = useState(false);

    const idInput = useRef();


    const url = "https://whrilinginrags.azurewebsites.net"



    async function deleteOrder(){


        try{
            const response = await axios.delete(`${url}/order/delete-order?id=${idInput.current.value}` )

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
      <h2>Please enter the ID of the order you would like to delete</h2>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="ID number" ref={idInput}></input>

        

        <br></br>
        <br></br>
        <button class="B1" onClick={() => { 
            deleteOrder(); 
            setShowDeleted(!showDelete) 
            }}
            >Delete Order</button>
        {showDelete && <p>You Have Successfully Deleted Your Order</p>}
        
        </center>
        </>
        
        
    )
}