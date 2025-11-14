import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl w-80 border border-white/30"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-center text-white mb-6 drop-shadow"
        >
          Welcome Back
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md bg-white/80 focus:bg-white outline-none text-gray-800 placeholder-gray-500 shadow-inner"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-md bg-white/80 focus:bg-white outline-none text-gray-800 placeholder-gray-500 shadow-inner"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition duration-200"
          >
            Login
          </motion.button>
          <h1 className="text-center text-white/80 mt-2">For login Check User.js file in Github Repo</h1>
        </form>

        <p className="text-center text-white/80 text-sm mt-5">
          Admin or Employee? <span className="font-semibold text-white">Login to continue</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
