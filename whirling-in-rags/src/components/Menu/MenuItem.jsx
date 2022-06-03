import axios from "axios"
import { useRef, useState } from "react";
import { CustomerNavBar } from "../Customer/CustomerNavBar";
import { NavBar } from "../NavBar";

export default function MenuItem(){

 
    const [menuBody, setMenuBody] = useState();
    //const [singleMenuItem, setSingleMenuItem] = useState();



    const menuitemInputs = useRef();


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
                    <td>{String(e.isSubstitutable)}</td>
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


    async function findAsingleItem(){
        
        const menuitem =  menuitemInputs.current.value
        console.log("hello")

    
        try{
        const encodedValue = encodeURIComponent(menuitem)
        console.log(menuitem)
        const response1 = await axios.get(`${url}/menu/whirling-in-rangs-menu?menuItem=${encodedValue}`)
        const item = await response1.data;
        console.log(item)
        const map = {a:response1.data}
        const newArray = Object.values(map)
        console.log(newArray)
        const menuItemTableRow = newArray.map((e) => {
            return (
                <tr>
                    
                    <td>{e.menuItem}</td>
                    <td>{e.cost}</td>
                    <td>{String(e.isSubstitutable)}</td>
                    <td>{e.protein}</td>
                </tr>
            )
           
        })
        setMenuBody(menuItemTableRow)
         
        
            
        console.log(response1)
        console.log(response1.data)
        }catch(error){
        console.error(error)
        console.log(error)
     }
    }

    return(
        <>
        <NavBar /> 
        <CustomerNavBar />
    
        <h3>Welcome, To The Whirling in Rags Menu Page</h3>
        
        <br></br>
        <input placeholder="Enter here the menu item you are looking for" ref={menuitemInputs} /> 
        <br></br>
        <button  onClick={findAsingleItem}>Press to Find the Item you are looking for</button>
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

