import axios from "axios";
import { useRef, useState } from "react";
import { CustomerNavBar } from "../Customer/CustomerNavBar";

import './OrderTable.css';

export default function ViewOrders(){
    const [orderBody, setOrderBody] = useState();
    const [showMessage, setShowMessage] = useState(false);

    //const [searchParam] = useState(["capital", "name"]);



    const usernameInput = useRef();


    const url = "https://whrilinginrags.azurewebsites.net"

    // if(usernameInput === null ){}
    async function viewAllOrders(){

        const usernameinput = {
            username: usernameInput.current.value 
            
        }
        if(usernameInput.current.value === ""){
            setShowMessage(!showMessage)
        }else{
        try{
            console.log(usernameInput)
            const encodedPara = encodeURIComponent(usernameinput)
            const response = await axios.get(`${url}/order/whirling-in-rangs-orders?=username${encodedPara}`)
            const orders = await response.data;
            const menuItemsTableRows = orders.map((e) => {
            return (
                <>
            

                <tr>
                    <td>{e.id}</td>
                    <td>{e.menuItem}</td>
                    <td>{e.comment}</td>
                    <td>{String(e.isFavorite)}</td>
                    <td>{e.orderDate}</td>
                    <td>{e.username}</td>
                </tr>
                </>
            )
           
        }
        )
    
        setOrderBody(menuItemsTableRows)
        console.log(response)
        console.log(response.data)
    
    } catch (e) {
        console.error(e)
    }
    }
}


    return(
        <>
        <center>
     <CustomerNavBar />
        
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Input your Username" ref={usernameInput}></input>
        <br></br>
        <br></br>
        <button class="B1" onClick={ viewAllOrders }>Press to Find All of your Orders</button>
        {showMessage && <p>No username was detected please input your username and try again</p>}
        <br></br>
        <br></br>
        <table>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Menu Item</th>
                    <th>Comment</th>
                    <th>Favorite</th>
                    <th>Order Date</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>{orderBody}</tbody>
        </table>
        </center>

        </>
    )
}
