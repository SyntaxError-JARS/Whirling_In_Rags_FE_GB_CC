import { useNavigate } from "react-router-dom"
import './Style.css'




export function WelcomeNavBar(){

    const navigate = useNavigate();

    return(
        <>
<nav>

   
             <button class="B2" onClick={() => navigate("/")}>Home</button>  
             <br></br>
             <br></br>
             <button class="B2" onClick={() => navigate("/login")}>Login</button>
            <br></br>
            <br></br>
            <button class="B2" onClick={() => navigate("/register")}>Register</button>
            <br></br><br></br>
            <button class="B2" onClick={() => navigate("/view-menu")}>View Menu</button>
            

            
            
        
        
</nav>
</>
    );
}