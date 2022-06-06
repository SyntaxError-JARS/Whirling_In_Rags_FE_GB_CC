
import axios from "axios";
import { useRef, useState } from "react"
import { AdminNavBar } from "../Admin/AdminNavBar";




export default function DeleteMenuItem(){

   
    const [showDelete, setShowDeleted] = useState(false);

    const menuItemInput = useRef();


    const url = "https://whrilinginrags.azurewebsites.net"



    async function deleteMenuItem(){


        try{
            const response = await axios.delete(`${url}/menu/delete-item?menuItem=${menuItemInput.current.value}` )

            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error)
        }

    }

    return(
        <>
        <center>
          <AdminNavBar />
          <br></br>
      <h2>Please enter the Menu Item You Would Like To Delete</h2>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Menu Item" ref={menuItemInput}></input>

        

        <br></br>
        <br></br>
        <button class="B1" onClick={() => { 
            deleteMenuItem(); 
            setShowDeleted(!showDelete) 
            }}
            >Delete Menu Item</button>
        {showDelete && <p>You Have Successfully Deleted This Menu Item</p>}
        </center>
        </>

    )

}