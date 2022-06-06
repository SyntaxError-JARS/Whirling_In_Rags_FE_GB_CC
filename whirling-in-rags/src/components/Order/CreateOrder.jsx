import axios from "axios";
import { useRef, useState } from "react";
import { CustomerNavBar } from "../Customer/CustomerNavBar";

import './OrderTable.css';



export default function CreateOrder(){


    const [showMessage, setShowMessage] = useState(false);
    
    const idInput = useRef()
    const [num, setNum] = useState(0);

    const menuItemInput = useRef();
    const commentInput = useRef();
    const isFavoriteInput = useRef();
    const orderDateInput = useRef();
    const usernameInput = useRef();
    const costInput = useRef();
    const [balance, setBalanceInput] = useState(0);
    const payBalanceInput = useRef();
    
    const url = "https://whrilinginrags.azurewebsites.net"


     function payBalance(){
        if(balance === 0 || parseInt(payBalanceInput.current.value) > balance){
            setShowMessage(!showMessage)
            
        }else{
           setBalanceInput(balance - parseInt(payBalanceInput.current.value));
        }
    }
  
    async function addOrder(){

       

          

        const order = {

            id: idInput.current.value,

            id: num,

            menuItem: menuItemInput.current.value,
            comment: commentInput.current.value,
            isFavorite: isFavoriteInput.current.value,
            orderDate: orderDateInput.current.value,
            username: usernameInput.current.value,
            
        }

        console.log(order)
        console.log(num)


        try{
            const response = await axios.post(`${url}/order/createorder` , order)
            addToBalance();
            console.log(response)
            console.log(response.data)
        
        }catch(error){
            console.error(error)
            console.log(error)
        }

    }


    function addToBalance(){
        console.log(costInput.current.value)
        
        setBalanceInput(balance + parseInt(costInput.current.value))

        
        console.log(balance)
        console.log(costInput)
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
        <input placeholder="Input id" ref={idInput}></input>
        <br></br>
        <p>Balance is {balance}</p>
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
        <input placeholder="Input the cost of the item" ref={costInput}></input>
        <br></br>
        <button onClick={addOrder}>Create Order</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       {/* <button onClick={addToBalance}>add to balance</button> */}
       <input placeholder="Input the amount you put into the site" ref={payBalanceInput}></input>
        <button onClick={payBalance}>Pay Balance</button>
        {showMessage && <p>Your balance is zero or you are trying to overpay</p>}


        <br></br>
        <button class="B1" onClick={() => {addOrder(); click()}}>Create Order</button>
        
        </center>

        </>
    )


}