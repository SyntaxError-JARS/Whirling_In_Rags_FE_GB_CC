import axios from "axios";
import { useState } from "react";
import { CustomerNavBar } from "../Customer/CustomerNavBar";

import './OrderTable.css';

export default function ViewOrders(){
    const [orderBody, setOrderBody] = useState();


    


    const url = "https://whrilinginrags.azurewebsites.net"


    async function viewAllOrders(){

        try{
        const response = await axios.get(`${url}/order/whirling-in-rangs-orders`)
        const orders = await response.data;
        const menuItemsTableRows = orders.map((e) => {
            return (
                <tr>
                    <td>{e.id}</td>
                    <td>{e.menuItem}</td>
                    <td>{e.comment}</td>
                    <td>{String(e.isFavorite)}</td>
                    <td>{e.orderDate}</td>
                    <td>{e.username}</td>
                </tr>
            )
           
        })
        setOrderBody(menuItemsTableRows)
        console.log(response)
        console.log(response.data)
    } catch (e) {
        console.error(e)
    }
    }

    return(
        <>
     <CustomerNavBar />
        <h3>Welcome to the Orders Page</h3>
        
        
        <button onClick={viewAllOrders}>Press to Find All of your Orders</button>
    
        <table>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Menu Item</th>
                    <th>Comment</th>
                    <th>isFavorite</th>
                    <th>Order Date</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>{orderBody}</tbody>
        </table>

        </>
    )
}
