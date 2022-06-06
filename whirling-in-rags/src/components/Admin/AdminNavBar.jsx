import { useNavigate } from "react-router-dom";

export function AdminNavBar(){
const navigate = useNavigate();

return(
    <>
    <nav>
        <button class="B1" onClick={() => navigate("/admin")}>Home</button>
<button class="B1" onClick={() => navigate("/create-item")}>Add Menu Items</button>
<button class="B1" onClick={() => navigate("/delete-item")}>Delete Menu Items</button>
<button class="B1" onClick={() => navigate("/")}>Logout</button>

    </nav>
    </>
)

}