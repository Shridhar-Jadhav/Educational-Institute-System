import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">
        
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Educational Institute System
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Sign in to continue
        </p>

        <form>
          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Username / Email
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#" className="text-blue-600 hover:text-blue-800">
              Create Account
            </a>
          </div>

          <button
            type="button" onClick={() => navigate("/dashboard")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;