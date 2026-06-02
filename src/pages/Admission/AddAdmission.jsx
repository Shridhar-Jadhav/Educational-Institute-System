import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";


function AddAdmission() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    mobile: "",
    course: "",
    status: "Pending",
    remarks: "",
  });

  const handleSubmit = () => {

    if (!formData.studentName) {
      alert("Student Name is required");
      return;
    }

    if (!formData.parentName) {
      alert("Parent Name is required");
      return;
    }

    if (!formData.mobile) {
      alert("Mobile Number is required");
      return;
    }

    console.log(formData);

    alert("Admission Saved Successfully");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Header />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            Add Admission
          </h1>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-medium">
                  Student Name
                </label>

                <input
                  type="text" 
                  value={formData.studentName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      studentName: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Parent Name
                </label>

                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      parentName: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Mobile Number
                </label>

                <input
                  type="text"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mobile: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Course
                </label>

                <input
                  type="text"
                  value={formData.course}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      course: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Status
                </label>

                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                >
                  <option>Pending</option>
                  <option>Follow-up</option>
                  <option>Converted</option>
                  <option>Closed</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Admission No
                </label>

                <input
                  type="text"
                  value="ADM001"
                  readOnly
                  className="w-full border rounded-lg px-4 py-2 bg-gray-100"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Admission Date
                </label>

                <input
                  type="date"
                  value={formData.admissionDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      admissionDate: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

            </div>
            

            <div className="mt-6">
              <label className="block mb-2 font-medium">
                Remarks
              </label>

              <textarea
                rows="4"
                value={formData.remarks}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    remarks: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-2"
              ></textarea>
            </div>

            <div className="mt-6">
              <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Save Admission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default AddAdmission;