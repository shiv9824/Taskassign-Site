import React from "react";
import { motion } from "framer-motion";
import TaskForm from "./Taskform";
import TaskList from "./Tasklist";

const AdminDashboard = ({ user, tasks, setTasks, onLogout }) => {
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white p-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg">
          Welcome, <span className="text-yellow-300">{user.name}</span> 👑
        </h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-lg shadow-lg font-semibold"
        >
          Logout
        </motion.button>
      </motion.div>

      {/* Dashboard Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Task Form Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-5"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            ➕ Assign a New Task
          </h2>
          <TaskForm onAddTask={handleAddTask} />
        </motion.div>

        {/* Task List Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-5"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            📋 All Tasks
          </h2>
          <TaskList tasks={tasks} title="All Tasks" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
