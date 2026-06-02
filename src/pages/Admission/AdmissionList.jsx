import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";



const admissions = [
  {
    admissionNo: "ADM001",
    studentName: "Rahul Sharma",
    parentName: "Sunil Sharma",
    mobile: "9876543210",
    course: "React JS",
    status: "Pending",
    admissionDate: "2024-06-01",
    fees: "Received 2000 out of 5000",
  },
  {
    admissionNo: "ADM002",
    studentName: "Amit Patil",
    parentName: "Rajesh Patil",
    mobile: "9876543211",
    course: "Node JS",
    status: "Follow-up",
    admissionDate: "2024-06-02",  
    fees: "Received 2000 out of 5000",
  },
  {
    admissionNo: "ADM003",
    studentName: "Sneha Jadhav",
    parentName: "Ramesh Jadhav",
    mobile: "9876543212",
    course: "Java",
    status: "Converted",
    admissionDate: "2024-06-03",
    fees: "Received 2000 out of 5000",
  },
];

function AdmissionList() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Header />

        <div className="flex justify-between items-center mb-6 p-6">
          <h1 className="text-3xl font-bold">
            Admission List
          </h1>

          <button onClick={() => navigate("/add-admission")} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add Admission
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow m-6">
          <input
            type="text"
            placeholder="Search Admission..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6 m-6 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Admission No</th>
                <th className="p-3 text-left">Student Name</th>
                <th className="p-3 text-left">Parent Name</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Admission Date</th>
                <th className="p-3 text-left">Admission Fees</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {admissions.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{item.admissionNo}</td>
                  <td className="p-3">{item.studentName}</td>
                  <td className="p-3">{item.parentName}</td>
                  <td className="p-3">{item.mobile}</td>
                  <td className="p-3">{item.course}</td>
                  <td className="p-3">{item.status}</td>
                  <td className="p-3">{item.admissionDate}</td>
                  <td className="p-3">{item.fees}</td>

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

export default AdmissionList;