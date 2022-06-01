import { useNavigate } from "react-router-dom"

export function NavBar(){

    const navigate = useNavigate();

    return(
<nav>
       
            <button onClick={() => navigate("")}>Home</button>
            <button onClick={() => navigate("login")}>Login</button>
            <button onClick={() => navigate("register")}>Register</button>
            <button onClick={() => navigate("view-menu")}>View Menu</button>
            <button onClick={() => navigate("order-history")}>Order History</button>
            <button onClick={() => navigate("order")}>Create Order</button>
            <button onClick={() => navigate("add-card")}>Add a Credit Card</button>
        
</nav>

    );
}