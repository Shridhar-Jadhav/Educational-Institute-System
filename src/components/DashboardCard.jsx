function DashboardCard({ title, count }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {count}
      </p>
    </div>
  );
}

export default DashboardCard;