import axios from "axios";
import { useRef } from "react";
import { CustomerNavBar } from "../Customer/CustomerNavBar";

import './OrderTable.css';

export default function CreateOrder(){

    //const idInput = useRef();
    const menuItemInput = useRef();
    const commentInput = useRef();
    const isFavoriteInput = useRef();
    const orderDateInput = useRef();
    const usernameInput = useRef();
   

    const url = "https://whrilinginrags.azurewebsites.net"

    async function addOrder(){

        const order = {
            //id: defaultValue,
            menuItem: menuItemInput.current.value,
            comment: commentInput.current.value,
            isFavorite: isFavoriteInput.current.value,
            orderDate: orderDateInput.current.value,
            username: usernameInput.current.value
        }


        try{
            const response = await axios.post(`${url}/order/createorder` , order )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }

    }


    return(
        <>
        <CustomerNavBar />
        <h3>Welcome, Please Enter Your Order Below</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter Menu Item" ref={menuItemInput}></input>
        <br></br>
        <input placeholder="Enter A Comment" ref={commentInput}></input>
        <br></br>
        <input  placeholder="Favorite Item" ref={isFavoriteInput}></input>
        <br></br>
        <input  placeholder="Date" ref={orderDateInput}></input>
        <br></br>
        <input  placeholder="Username" ref={usernameInput}></input>
        <br></br>
        <button onClick={addOrder}>Create Order</button>
        </>
    )


}