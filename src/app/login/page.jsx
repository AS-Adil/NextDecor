"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validEmail = "user@gmail.com";
    const validPassword = "User 2000";

    if (email === validEmail && password === validPassword) {
      // Set auth cookie
      document.cookie = "auth=true; path=/; max-age=86400"; // 1 day

      // Redirect to all products page
      router.push("/all-products");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md border rounded-xl p-6 shadow-sm bg-white text-gray-700">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">
          Login to NextDecor
        </h1>

        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="User 2000"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        {/* Hint for evaluator */}
        <div className="mt-4 text-xs text-gray-500 text-center">
          Demo credentials: user@gmail.com / User 2000
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
