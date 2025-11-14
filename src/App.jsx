import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Components/Login";
import AdminDashboard from "./Components/Admindashboard";
import EmployeeDashboard from "./Components/Employeedashboard";
import users from "./Data/Users";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  // Save default users to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, []);

  // Keep tasks persistent
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle login
  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const foundUser = users.find((u) => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
    } else {
      alert("❌ Invalid email or password!");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 font-sans">
      <AnimatePresence mode="wait">
        {!user ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full max-w-md p-6"
          >
            <Login onLogin={handleLogin} />
          </motion.div>
        ) : (
          <motion.div
            key={user.role}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {user.role === "admin" ? (
              <AdminDashboard
                user={user}
                tasks={tasks}
                setTasks={setTasks}
                onLogout={handleLogout}
              />
            ) : (
              <EmployeeDashboard
                user={user}
                tasks={tasks}
                setTasks={setTasks}
                onLogout={handleLogout}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
