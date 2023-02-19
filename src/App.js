
import Login from './Components/login/Login'
import Header from './Components/header/Header';

import Login1 from './Components/login1/Login1'
import Resetpasswrd1 from './Components/resetpasswrd1/Resetpasswrd1';
import Entercode from './Components/enterverificationcode/Entercode'
import Newpassword from './Components/createnewpassword/Newpassword';
import Mobileforgotpass from './Components/mobileforgotpass/Mobileforgotpass';
import Mobileresetpass from './Components/mobilerestpass/Mobileresetpass';
import Mobilepass from './Components/mobilecreatenewpass/Mobilepass';
import {BrowserRouter as Router , Routes, Route,} from 'react-router-dom'
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache'
import Sidebar from './Components/sidebar/Sidebar';
import Appointment from './Components/appointment/Appointments';
import Dashboard from './Components/Dashboard/Dashboard';
import './index.css'
import Staff from './Components/staff/Staff';
import Addstaff from './Components/addStaff/Addstaff';
import Editstaff from './Components/editStaff/Editstaff';
import Order from './Components/order/Order';
import Addpatients from './Components/addpatients/Addpatients';
import Patientsform from './Components/AddPatientsForm/Patientsform'
import Editpatientsform from './Components/editPatientsform/Editpatientsform';
import Revenue from './Components/revenue/Revenue';
import Inventory from './Components/inventory/Inventory'
import Addinventory from './Components/addinventory/Addinventory'
import Editinventory from './Components/editinventory/Editinventory'
import Medicineorder from './Components/medicineorder/Medicineorder';
import Chat from './Components/chatjs/Chat';
import Setting from './Components/settingjs/Setting'
import Outerheader from './Components/outerheader/Outerheader';
import Myprofile from './Components/myprofile/Myprofile';
import Modal from './Components/modal/Modal'
import ChangePassword from './Components/ChangePassword/ChangePassword';
import EditAppointment from './Components/editappointment/EditAppointment'
import './index.css'

function App() {
  return (
    <div className="App">
          <ClientContext.Provider>
          <Router>
              {/* <Header /> */}
              <Routes>
                {/* <Route path ="/" element={<Login />} /> */}
                <Route path = "/" element = {<Dashboard />} />
                <Route path = "/Staff" element = {<Staff />} />
                <Route path = "/Addstaff" element = {<Addstaff />} />
                <Route path = "/Editstaff" element = {<Editstaff />} />
                <Route path = "/Chat" element = {<Chat />} /> 
                <Route path = "/Order" element = {<Medicineorder />} />
                <Route path = "/Addpatients" element = {<Addpatients />} />
                <Route path = "/Patientsform" element = {<Patientsform />} />
                <Route path = "/Editpatients" element = {<Editpatientsform />} />
                <Route path = "/Revenue" element = {<Revenue />} />
                <Route path = "/Inventory" element = {<Inventory />} />
                <Route path = "/AddInventory" element = {<Addinventory />} />
                <Route path = "/EditInventory" element = {<Editinventory />} />
                <Route path = "/Setting"  element = {<Setting />} />
                <Route path = "/Modal" element = {<Modal />} />
                <Route path = "/MyProfile" element = {<Myprofile />} />
                <Route path ="/Resetpasswrd" element = {<Resetpasswrd1 />} />
                <Route path ="/Entercode" element = {<Entercode />} />
                <Route path = "/Newpassword" element = {<Newpassword />} /> 
                <Route path = "/Appointment" element = {<Appointment />} />
                <Route path = "/changepassword" element = {<ChangePassword />} />
                <Route path = "/editappointment" element = {<EditAppointment />} />
              </Routes>
          </Router>
          </ClientContext.Provider>

    </div>
  );
}

export default App;