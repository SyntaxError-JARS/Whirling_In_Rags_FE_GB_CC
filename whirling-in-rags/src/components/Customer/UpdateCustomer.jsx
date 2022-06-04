import axios from "axios"
import { useRef } from "react"

export default function UpdateCustomer(){

    //const usernameInput = useRef()
    const usernameInput = useRef()
    const newPasswordInput = useRef()
    
    const url = "https://whrilinginrags.azurewebsites.net"

    async function updateCustomerUsername(){
        
        
        
        // const oldPassword = {
        //     password : oldPasswordInput.current.vaule
        // }

        try{
            //const encodedParam = encodeURIComponent(oldPassword)
            console.log(usernameInput.current.value)
            const response1 = await axios.get(`${url}/customer/update-username?username=${usernameInput.current.vaule}`)
            
            const returnedUser = response1.data
            returnedUser.password = newPasswordInput
            const response = await axios.put(`${url}/customer/update-username`,)

            console.log(response)
            console.log(response.data) 
            
            console.log(response1)
            console.log(response1.data)
        }catch(error){
            console.error(error)
            console.log(error)
        }
    

    }
    
    
    
 
    return(
        <>
        <input placeholder="Input your current Usernaem" ref={usernameInput }></input>
        <input placeholder="Input the new Username you want your account to have" ref={newPasswordInput}></input>
        <br></br>
        <button onClick={updateCustomerUsername}>Update your Account</button>
        </>
    )
}