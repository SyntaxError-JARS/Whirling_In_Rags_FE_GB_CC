import { useNavigate } from "react-router-dom";

export function CustomerNavBar(){
    const navigate = useNavigate();

    return(
        <>
        <nav>
        <button onClick={() => navigate("/customer")}>Home</button>
        <button onClick={() => navigate("/customer/order-history")}>Order History</button>
        <button onClick={() => navigate("/customer/view-menu")}>View Menu</button>
        <button onClick={() => navigate("/customer/order")}>Create Order</button>
        <button onClick={() => navigate("/customer/delete-order")}>Delete an Order</button>
        <button onClick={() => navigate("/customer/add-card")}>Add a Credit Card</button>
        <button onClick={() => navigate("/customer/delete-card")}>Delete a Credit Card</button>
        <button onClick={() => navigate("/customer/delete-account")}>Delete your account</button>
        <button onClick={() => navigate("/customer/update-username")}>Update your account</button>
        
        <button onClick={() => navigate("/")}>Logout</button>


        </nav>
        
        </>
    )
}