function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">
        Educational Institute System
      </h2>

      <div>
        <span className="font-medium">
          Welcome, Admin
        </span>
      </div>
    </div>
  );
}

export default Header;