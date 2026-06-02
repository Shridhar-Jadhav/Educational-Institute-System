import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

function AdmissionReport() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Header />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            Admission Report
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AdmissionReport;