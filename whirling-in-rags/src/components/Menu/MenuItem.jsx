import axios from "axios"
import { useState } from "react";

export default function MenuItem(){

    const [menuBody, setMenuBody] = useState();





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




    return(
        <>
     
        <h3>Welcome, To The Whirling in Rags Menu Page</h3>
        
        <br></br>
        <br></br>
        <button key="menu items"onClick={getAllMenuItems}>Press to See All of the Menu Items</button>
    
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