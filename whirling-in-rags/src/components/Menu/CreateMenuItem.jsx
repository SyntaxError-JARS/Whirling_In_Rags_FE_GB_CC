import axios from "axios";
import { useRef, useState } from "react";
import { AdminNavBar } from "../Admin/AdminNavBar";
import './MenuTable.css';

export default function CreateMenuItem(){

    const [showPost, setShowPosted] = useState(false);

    const itemNameInput = useRef();
    const costInput = useRef();
    const isSubstitutableInput = useRef();
    const proteinInput = useRef();

    const url = "https://whrilinginrags.azurewebsites.net"

    async function createMenuItems(){

        const menuItem = {
            menuItem: itemNameInput.current.value,
            cost: costInput.current.value,
            isSubstitutable: isSubstitutableInput.current.value,
            protein: proteinInput.current.value
        }


        try{
            const response = await axios.post(`${url}/menu/create-item` , menuItem )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }

    }


    return(
        <>
        <center>
        <AdminNavBar />
        <br></br>
        <h2>Please Enter The New Item You Would Like To Add To The Menu</h2>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Item Name" ref={itemNameInput}></input>
        <br></br>
        <input placeholder="Cost" ref={costInput}></input>
        <br></br>
        <input placeholder="Can This Be Substitutable?" ref={isSubstitutableInput}></input>
        <br></br>
        <input  placeholder="Protein" ref={proteinInput}></input>
        <br></br>
        <br></br>
        <button class="B1" onClick={() => { 
            createMenuItems(); 
            setShowPosted(!showPost) 
            }}
            >Create Menu Item</button>
        
        </center>
        
        </>
    )


}