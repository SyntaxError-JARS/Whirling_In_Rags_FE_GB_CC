import axios from "axios";
import { useRef, useState } from "react";
import { CustomerNavBar } from "../Customer/CustomerNavBar";

import './OrderTable.css';

export default function CreateOrder(){

    const [num, setNum] = useState(0);
    //const idInput = useRef();
    const menuItemInput = useRef();
    const commentInput = useRef();
    const isFavoriteInput = useRef();
    const orderDateInput = useRef();
    const usernameInput = useRef();
   

    const url = "https://whrilinginrags.azurewebsites.net"

    

    async function addOrder(){

       

          

        const order = {
            id: num,
            menuItem: menuItemInput.current.value,
            comment: commentInput.current.value,
            isFavorite: isFavoriteInput.current.value,
            orderDate: orderDateInput.current.value,
            username: usernameInput.current.value
        }

        console.log(order)
        console.log(num)


        try{
            const response = await axios.post(`${url}/order/createorder` , order )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }

    }

    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const click = () => {setNum(randomNumberInRange(1,100))}

    return(
        <>
        <center>
        <CustomerNavBar />
        
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
        <br></br>
        <button class="B1" onClick={() => {addOrder(); click()}}>Create Order</button>
        
        </center>
        </>
    )


}