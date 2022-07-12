import React from 'react';

//import Sidebar from "./layouts/sidebar/Index"
import Header from "./layouts/header/Index"
import Footer from "./component/footer/Index"
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';

//FirstPage
import DashboardContent from './content/dashboard/Dashboard';

//LicenseSite
import License from './content/datatable/licenselist/License';
//import GenerateForm from './content/license_generator/Main';
//import LicenseRequest from './content/datatable/licenserequestlist/LicenseRequestList';
import Spareform from './content/license_generator/Spare';
//import RegisterPage2 from './content/license_generator/Spare2'

 
 const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<DashboardContent/>} />
          <Route path = "/Messenger" element={<License/>}/>
          <Route path = "/Contact" element={<License/>}/>
          <Route path = "/LicenseList" element={<License/>}/>
          <Route path = "/RegisterPage2" element={<License/>}/>
          <Route path = "/Licensegenerator" element={<Spareform/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default  App;