import { useNavigate } from "react-router-dom";
import '../Style.css';

export function CustomerNavBar(){
    const navigate = useNavigate();

    return(
        <>
        <center>
        <nav>
        <button class="B1" onClick={() => navigate("/customer")}>Home</button>
        <button class="B1" onClick={() => navigate("/customer/order-history")}>Order History</button>
        <button class="B1" onClick={() => navigate("/customer/view-menu")}>View Menu</button>
        <button class="B1" onClick={() => navigate("/customer/order")}>Create Order</button>
        <button class="B1" onClick={() => navigate("/customer/delete-order")}>Delete an Order</button>
        <button class="B1" onClick={() => navigate("/customer/add-card")}>Add a Credit Card</button>
        <button class="B1" onClick={() => navigate("/customer/delete-card")}>Delete a Credit Card</button>
        <button class="B1" onClick={() => navigate("/customer/delete-account")}>Delete your account</button>
        <button class="B1" onClick={() => navigate("/")}>Logout</button>


        </nav>
        </center>
        
        </>
    )
}