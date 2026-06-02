import {Routes, Route} from 'react-router-dom';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import EnquiryList from '../pages/Enquiry/EnquiryList';
import AdmissionList from '../pages/Admission/AdmissionList';
import EnquiryReport from '../pages/Reports/EnquiryReport';
import AdmissionReport from '../pages/Reports/AdmissionReport'; 
import AddEnquiry from "../pages/Enquiry/AddEnquiry";
import AddAdmission from "../pages/Admission/AddAdmission";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/enquiry" element={<EnquiryList />} />
            <Route path="/admission" element={<AdmissionList />} />
            <Route path="/enquiry-report" element={<EnquiryReport />} />
            <Route path="/admission-report" element={<AdmissionReport />} />
            <Route path="/add-enquiry" element={<AddEnquiry />} />
            <Route path="/add-admission" element={<AddAdmission />} />
        </Routes>
    );
}

export default AppRoutes;