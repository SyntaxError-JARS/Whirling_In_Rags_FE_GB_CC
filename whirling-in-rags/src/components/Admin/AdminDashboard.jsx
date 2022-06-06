// import { useContext } from "react"
// import { useNavigate } from "react-router-dom";
// import { userContext } from "../App"

import { AdminNavBar } from "./AdminNavBar";

export default function AdminDashboard(){
//const [user, setUser] = useContext(userContext);
//console.log(user);

//const navigate = useNavigate
    return(
        <>
        <center>
        <AdminNavBar />
        <br></br>
<h2>Welcome back Admin!</h2>
</center>
</>
    )
}