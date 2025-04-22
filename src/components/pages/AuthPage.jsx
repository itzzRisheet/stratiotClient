import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AuthPage({ onLogin }) {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Username and password cannot be empty.");
      return;
    }

    setError("");
    setShowNotification(false);
    setInputCode("");
    setCode(null);
    setCopied(false);

    setTimeout(() => {
      const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
      setCode(randomCode);
      setShowNotification(true);
    }, 2000);
  };

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleVerify = () => {
    if (inputCode === code) {
      onLogin(); // Update auth state in parent
      if (username === "admin" && password === "admin") {
        navigate("/home");
      } else if (["vatsal", "gaurav", "soumyadeep", "eva"].includes(username.toLowerCase())) {
        navigate("/employee-self", { state: { username } });
      } else {
        alert("Unauthorized user.");
      }
    }
    
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold mb-4">Login or Signup</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border px-4 py-2 rounded w-64"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border px-4 py-2 rounded w-64"
      />
      {error && <div className="text-red-600 text-sm -mt-2">{error}</div>}

      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-600 text-white rounded w-64"
      >
        Continue
      </button>

      {showNotification && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded w-64 flex flex-col items-center space-y-2">
          <p>Your verification code is:</p>
          <div className="flex items-center space-x-2">
            <strong className="text-lg">{code}</strong>
            <button
              onClick={handleCopy}
              className="text-blue-600 underline text-sm"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <input
            type="text"
            placeholder="Enter verification code"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            className="border px-2 py-1 rounded w-full"
          />

          <button
            onClick={handleVerify}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded w-full"
          >
            Verify & Continue
          </button>
        </div>
      )}
    </div>
  );
}
