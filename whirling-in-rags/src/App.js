import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AddCreditCard from "./components/CreditCard/AddCreditCard";
import DeleteCreditCard from "./components/CreditCard/DeleteCreditCard";
import CustMenuItem from "./components/Menu/CustMenuItem";
import CustomerLogIn from "./components/Customer/CustomerLogIn";
import CustomerRegister from "./components/Customer/CustomerRegister";
import CustomerDashboard from "./components/Customer/CustomerDashboard";
import CreateMenuItem from "./components/Menu/CreateMenuItem";
import MenuItem from "./components/Menu/MenuItem";
//import { NavBar } from "./components/NavBar";
import CreateOrder from "./components/Order/CreateOrder";
import ViewOrders from "./components/Order/ViewOrders";
import Welcome from "./components/Welcome";
import DeleteMenuItem from "./components/Menu/DeleteMenuItem";


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
      
      <Routes>
        <Route path="login" element={<CustomerLogIn />} />
        <Route path="register" element={<CustomerRegister />} />
        <Route path="customer/delete-card" element={<DeleteCreditCard />} />
        <Route path="create-item" element={<CreateMenuItem />} />
        <Route path="delete-item" element={<DeleteMenuItem />} />
        <Route path="customer/view-menu" element={<CustMenuItem />} />
        <Route path="view-menu" element={<MenuItem />} />
        <Route path="customer/order" element={<CreateOrder />} />
        <Route path="customer/order-history" element={<ViewOrders />} />
        <Route path="customer/add-card" element={<AddCreditCard />} />
        <Route path="" element={<Welcome />} />
        <Route path="customer" element={<CustomerDashboard />} />
        <Route path="admin" element={<AdminDashboard />} />
        </Routes>
    </userContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App;
