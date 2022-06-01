import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCreditCard from "./components/CreditCard/AddCreditCard";
import DeleteCreditCard from "./components/CreditCard/DeleteCreditCard";
import CustomerLogIn from "./components/Customer/CustomerLogIn";
import CustomerRegister from "./components/Customer/CustomerRegister";
import CreateMenuItem from "./components/Menu/CreateMenuItem";
import MenuItem from "./components/Menu/MenuItem";
import { NavBar } from "./components/NavBar";
import CreateOrder from "./components/Order/CreateOrder";
import ViewOrders from "./components/Order/ViewOrders";
import Welcome from "./components/Welcome";


/*function App() {
  return (
    <>
    <CustomerLogIn />
    <br></br>
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

export default App;*/

export const userContext = createContext();

function App(){
  const [user, setUser] = useState({username: "Guest"})
  return (
    <>
    <BrowserRouter>
    <userContext.Provider value={[user, setUser]}>
      <NavBar />
      <Routes>
        <Route path="login" element={<CustomerLogIn />} />
        <Route path="register" element={<CustomerRegister />} />
        <Route path="delete-card" element={<DeleteCreditCard />} />
        <Route path="create-item" element={<CreateMenuItem />} />
        <Route path="view-menu" element={<MenuItem />} />
        <Route path="order" element={<CreateOrder />} />
        <Route path="order-history" element={<ViewOrders />} />
        <Route path="add-card" element={<AddCreditCard />} />
        <Route path="" element={<Welcome />} />
        </Routes>
    </userContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App;
