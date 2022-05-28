import axios from "axios"
import { useRef, useState } from "react";

export default function MenuItem(){

    const [menuBody, setMenuBody] = useState();


    // const menuitemInputs = useRef();


    const url = "https://whrilinginrags.azurewebsites.net"


    async function getAllMenuItems(){

        try{
        const response = await axios.get(`${url}/menu/whirling-in-rangs-menu`)
        const items = await response.data;
        const menuItemsTableRows = items.map((e) => {
            return (
                <tr>
                    <td>{e.menuItem}</td>
                    <td>{e.cost}</td>
                    <td>{e.isSubstitutable}</td>
                    <td>{e.protein}</td>
                </tr>
            )
           
        })
        setMenuBody(menuItemsTableRows)
        console.log(response)
        console.log(response.data)
    } catch (e) {
        console.error(e)
    }

        
    }


    // async function findAsingleItem(){
        
    //     const menuItem = {
    //         menuItem: "Chicken"
    //     } 

    //     try{
    //     const response = await axios.get(`${url}/menu/whirling-in-rangs-menu`, menuItem)
            
    //     console.log(response)
    //     console.log(response.data)
    //     }catch(error){
    //     console.error(error.response.data)
    //     console.log(error)
    //= }
    //}




    return(
        <>
     
        <h3>Welcome, To The Whirling in Rags Menu Page</h3>
        
        <br></br>
        {/* <input key= "single" placeholder="Enter here the menu item you are looking for" ref={menuitemInputs}> </input> */}
        <br></br>
        {/* <button  onClick={findAsingleItem}>Press to Find the Item you are looking for</button> */}
        <br></br>
        <button onClick={getAllMenuItems}>Press to Find All of the Menu Items</button>
    
        <table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Cost</th>
                    <th>Is isSubstitutable</th>
                    <th>Protein</th>
                </tr>
            </thead>
            <tbody>{menuBody}</tbody>
        </table>

        </>
    )
}