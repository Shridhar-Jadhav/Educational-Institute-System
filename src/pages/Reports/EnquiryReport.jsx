import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

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

const handleSearch = () => {
   console.log("Search");
}

const handleReset = () => {
   console.log("Reset");
}

function EnquiryReport() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Header />

        <div className="flex justify-between items-center mb-6 p-6">
          <h1 className="text-3xl font-bold">
            Enquiry Report
          </h1>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 m-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* From Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                From Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* To Date */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                To Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Course
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="">All Courses</option>
                <option value="React">React</option>
                <option value="JavaScript">JavaScript</option>
                <option value="NodeJS">NodeJS</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Status
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Follow Up">Follow Up</option>
                <option value="Converted">Converted</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
            >
              Search
            </button>

            <button onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium transition"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 m-6 overflow-x-auto">
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
                <tr key={item.enquiryNo} className="border-t">
                  <td className="p-3">{item.enquiryNo}</td>
                  <td className="p-3">{item.studentName}</td>
                  <td className="p-3">{item.parentName}</td>
                  <td className="p-3">{item.mobile}</td>
                  <td className="p-3">{item.course}</td>
                  <td className="p-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">{item.status}</span></td>
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

          <div className="flex justify-between items-center my-6">
            <h1 className="text-3xl font-bold">
              Total Enquiries :- {enquiries.length}
            </h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default EnquiryReport;