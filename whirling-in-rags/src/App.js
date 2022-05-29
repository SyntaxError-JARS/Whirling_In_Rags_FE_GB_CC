import DeleteCreditCard from "./components/CreditCard/DeleteCreditCard";
import CustomerRegister from "./components/Customer/CustomerRegister";
import CreateMenuItem from "./components/Menu/CreateMenuItem";
import MenuItem from "./components/Menu/MenuItem";
import ViewOrders from "./components/Order/ViewOrders";


function App() {
  return (
    <>
    <CustomerRegister />
    <br></br>
    <CreateMenuItem />
    <br></br>
    <MenuItem />
    <br></br>
    <DeleteCreditCard />
    <br></br>
    <ViewOrders />
    </>
    
  );
}

export default App;
