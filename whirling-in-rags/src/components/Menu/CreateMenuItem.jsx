import axios from "axios";
import { useRef, useState } from "react";
import { AdminNavBar } from "../Admin/AdminNavBar";
import './MenuTable.css';

export default function CreateMenuItem(){

    const [showPost, setShowPosted] = useState(false);

    const itemnameInput = useRef();
    const costInput = useRef();
    const isSubstitutableInput = useRef();
    const proteinInput = useRef();

    const url = "https://whrilinginrags.azurewebsites.net"

    async function createmenuItems(){

        const menuItem = {
            menuItem: itemnameInput.current.value,
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
        <AdminNavBar />
        <h3>Welcome, Please Enter The New Item You Would Like To Add To The Menu</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Item Name" ref={itemnameInput}></input>
        <br></br>
        <input placeholder="Cost" ref={costInput}></input>
        <br></br>
        <input placeholder="Can This Be Substitutable?" ref={isSubstitutableInput}></input>
        <br></br>
        <input  placeholder="Protein" ref={proteinInput}></input>
        <br></br>
        <button onClick={() => { 
            createmenuItems(); 
            setShowPosted(!showPost) 
            }}
            >Create Menu Item</button>
        {showPost && <p>You Have Successfully Added This Menu Item</p>}
        
        </>
    )


}