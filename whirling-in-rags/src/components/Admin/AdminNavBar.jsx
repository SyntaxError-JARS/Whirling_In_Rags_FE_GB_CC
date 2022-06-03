import { useNavigate } from "react-router-dom";

export function AdminNavBar(){
const navigate = useNavigate();

return(
    <nav>
        <button onClick={() => navigate("/admin")}>Home</button>
<button onClick={() => navigate("/create-item")}>Add Menu Items</button>
<button onClick={() => navigate("/delete-item")}>Delete Menu Items</button>
<button onClick={() => navigate("/")}>Logout</button>

    </nav>
)

}