import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-blue-600 text-white p-5 overflow-y-auto">
      <div className="">
        <h2 className="text-2xl font-bold mb-8">
            Institute
        </h2>

        <ul className="space-y-4">
            <li>
            <Link className="block px-3 py-2 rounded hover:bg-blue-700" to="/dashboard">Dashboard</Link>
            </li>

            <li>
            <Link className="block px-3 py-2 rounded hover:bg-blue-700" to="/enquiry">Enquiry</Link>
            </li>

            <li>
            <Link className="block px-3 py-2 rounded hover:bg-blue-700" to="/admission">Admission</Link>
            </li>

            <li>
            <Link className="block px-3 py-2 rounded hover:bg-blue-700" to="/enquiry-report">
                Enquiry Report
            </Link>
            </li>

            <li>
            <Link className="block px-3 py-2 rounded hover:bg-blue-700" to="/admission-report">
                Admission Report
            </Link>
            </li>
        </ul>
      </div>
      <div className="">
        <Link className="block px-3 py-2 rounded hover:bg-blue-700"  to="/">
            Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;