import { useNavigate } from "react-router-dom"

export function NavBar(){

    const navigate = useNavigate();

    return(
<nav>
       
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
            <button onClick={() => navigate("/view-menu")}>View Menu</button>
            
            
            
            
            
        
</nav>

    );
}