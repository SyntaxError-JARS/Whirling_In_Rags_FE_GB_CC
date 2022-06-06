import { useNavigate } from "react-router-dom"
import './Style.css'




export function NavBar(){

    const navigate = useNavigate();

    return(
        <>
        
<nav>


          <center>
            
            <button class="B1" onClick={() => navigate("/")}>Home</button>  
             
            <button class="B1" onClick={() => navigate("/login")}>Login</button>

            <button class="B1" onClick={() => navigate("/register")}>Register</button>
            
           <button class="B1" onClick={() => navigate("/view-menu")}>View Menu</button>
            
            
           
            
            </center>
            
            
            
        
</nav>

</>
    );
}