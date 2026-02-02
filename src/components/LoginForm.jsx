import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { role } = useParams();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailRegex.test(email)) {
      alert("Email must end with @gmail.com");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    alert("Logged in successfully");

    navigate(-1);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[420px] rounded-xl shadow-xl p-6 relative">

        <button
          onClick={() => navigate(-1)}
          className="absolute right-4 top-3 text-xl"
        >
          ✕
        </button>

        <button
          onClick={() => navigate(-1)}
          className="text-xl mb-2 text-orange-500"
        >
          ←
        </button>

        <h2 className="text-center text-xl font-bold mb-6">
          Logins
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-1" />
        </h2>

        <label className="text-sm font-semibold">Username</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mt-1 mb-4"
        />

        <label className="text-sm font-semibold">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-md px-4 py-2 mt-1 mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-700 text-white py-3 rounded-md font-semibold"
        >
          Login
        </button>

        <div className="text-right text-sm mt-3 cursor-pointer">
          Forgot Password ?
        </div>

        <hr className="my-4" />

        <p className="text-center text-sm mb-3">
          Not registered yet?
        </p>

        <button className="w-full bg-orange-300 py-3 rounded-md font-semibold" onClick = {() => navigate(`/employerzone`) } >
          Register as {role?.charAt(0).toUpperCase() + role?.slice(1)}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
