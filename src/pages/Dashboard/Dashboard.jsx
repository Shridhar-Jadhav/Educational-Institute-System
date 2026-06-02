import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import DashboardCard from "../../components/DashboardCard";

const dashboardData = [
  {
    title: "Total Enquiries",
    count: 150,
  },
  {
    title: "Total Admissions",
    count: 85,
  },
  {
    title: "Today's Enquiries",
    count: 12,
  },
  {
    title: "Today's Admissions",
    count: 5,
  },
  {
    title: "Pending Enquiries",
    count: 15,
  },
  {
    title: "Confirmed Admissions",
    count: 30,
  },
  {
    title: "Rejected Admissions",
    count: 2,
  },
];

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Header />

        <div className="grid grid-cols-4 gap-6 mt-6 p-6">

          {dashboardData.map((item, index) => (
            <DashboardCard
              key={index}
              title={item.title}
              count={item.count}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default Dashboard;