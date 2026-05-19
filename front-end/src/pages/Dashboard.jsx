import Footer from "../components/Dashboard/Footer/Footer";
import Navbar from "../components/Dashboard/Navbar/Navbar";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";  
import { Routes, Route} from "react-router-dom";
import Projects from "./Projects";
import Users from "./Users";
import StatusPage from "./StatusPage";
import TableDashboard from "../components/Ui/TableDashboard/TableDashboard";
import FormDashboard from "../components/Ui/FormDashboard/FormDashboard";
import { useState } from "react";
function Dashboard() {
   const [typing, setTyping] = useState(false);
   const [focused, setFocused] = useState(false)

  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">

      <Sidebar typing ={typing} focused = {focused} />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<StatusPage />} />
          <Route path="/users" element={<Users />} >
            <Route index element={<TableDashboard />} />
   
            <Route path="add" element={<FormDashboard  setTyping = {setTyping} setFocused = {setFocused}  />} />

          </Route>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      </div>
    
      
      <Footer />
    </>
  );
}

export default Dashboard;
