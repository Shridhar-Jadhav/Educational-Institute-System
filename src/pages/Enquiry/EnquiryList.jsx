import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";



const enquiries = [
  {
    enquiryNo: "ENQ001",
    studentName: "Rahul Sharma",
    parentName: "Sunil Sharma",
    mobile: "9876543210",
    course: "React JS",
    status: "Pending",
    enquiryDate: "2024-06-01",
    remarks: "Interested in React JS course. Follow up after 2 days.",
  },
  {
    enquiryNo: "ENQ002",
    studentName: "Amit Patil",
    parentName: "Rajesh Patil",
    mobile: "9876543211",
    course: "Node JS",
    status: "Follow-up",
    enquiryDate: "2024-06-02",  
    remarks: "Interested in React JS course. Follow up after 2 days.",
  },
  {
    enquiryNo: "ENQ003",
    studentName: "Sneha Jadhav",
    parentName: "Ramesh Jadhav",
    mobile: "9876543212",
    course: "Java",
    status: "Converted",
    enquiryDate: "2024-06-03",
    remarks: "Interested in React JS course. Follow up after 2 days.",
  },
];

function EnquiryList() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Header />

        <div className="flex justify-between items-center mb-6 p-6">
          <h1 className="text-3xl font-bold">
            Enquiry List
          </h1>

          <button onClick={() => navigate("/add-enquiry")} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Enquiry
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow m-6">
          <input
            type="text"
            placeholder="Search Enquiry..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6 m-6 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Enquiry No</th>
                <th className="p-3 text-left">Student Name</th>
                <th className="p-3 text-left">Parent Name</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Enquiry Date</th>
                <th className="p-3 text-left">Remarks</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {enquiries.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{item.enquiryNo}</td>
                  <td className="p-3">{item.studentName}</td>
                  <td className="p-3">{item.parentName}</td>
                  <td className="p-3">{item.mobile}</td>
                  <td className="p-3">{item.course}</td>
                  <td className="p-3">{item.status}</td>
                  <td className="p-3">{item.enquiryDate}</td>
                  <td className="p-3">{item.remarks}</td>

                  <td className="p-3 text-center">
                    <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>

                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EnquiryList;