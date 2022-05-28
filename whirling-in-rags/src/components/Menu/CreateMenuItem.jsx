import axios from "axios";
import { useRef } from "react";

export default function CreateMenuItem(){

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
            const response = await axios.post(`${url}/menu/createmenuitem` , menuItem )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }

    }


    return(
        <>
        <h3>Welcome, Please Enter The New Item You Would Like To Add To The Menu</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter the Items Name" ref={itemnameInput}></input>
        <br></br>
        <input placeholder="Enter How Much The Item Costs" ref={costInput}></input>
        <br></br>
        <input placeholder="Enter If The Item Can Be Substitutable" ref={isSubstitutableInput}></input>
        <br></br>
        <input  placeholder="Enter How Much Protein The New Item Contains" ref={proteinInput}></input>
        <br></br>
        <button onClick={createmenuItems}>Create Item</button>
        </>
    )


}