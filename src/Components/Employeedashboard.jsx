import React from "react";
import { motion } from "framer-motion";

const EmployeeDashboard = ({ user, tasks, setTasks, onLogout }) => {
  // Filter only tasks assigned to current employee
  const myTasks = tasks.filter((t) => t.assignedTo === user.email);

  // Update status of task
  const updateStatus = (id, newStatus) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, status: newStatus } : t
    );
    setTasks(updated);
  };

  // Remove completed task
  const removeTask = (id) => {
    const filtered = tasks.filter((t) => t.id !== id);
    setTasks(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white p-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center mb-8"
      >
        <h2 className="text-3xl font-bold tracking-wide drop-shadow">
          Hello, <span className="text-yellow-300">{user.name}</span> 👋
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-semibold shadow-lg"
        >
          Logout
        </motion.button>
      </motion.div>

      {/* Task Section */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-semibold mb-4 text-center"
      >
        📋 Your Assigned Tasks
      </motion.h3>

      {myTasks.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-white/80 text-lg mt-10"
        >
          No tasks assigned yet 😴
        </motion.p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-5 hover:scale-[1.02] transition"
            >
              <h4 className="text-xl font-bold mb-2 text-yellow-200">
                {task.title}
              </h4>
              <p className="text-white/90 text-sm mb-2">{task.description}</p>
              <p className="text-sm mb-4">
                <span className="font-semibold text-white/90">Status:</span>{" "}
                <span
                  className={`${
                    task.status === "Completed"
                      ? "text-green-300"
                      : task.status === "In Progress"
                      ? "text-yellow-300"
                      : task.status === "Rejected"
                      ? "text-red-300"
                      : "text-white"
                  } font-medium`}
                >
                  {task.status}
                </span>
              </p>

              <div className="flex flex-wrap gap-2">
                {task.status !== "Completed" && (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateStatus(task.id, "Accepted")}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm font-semibold"
                    >
                      Accept
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateStatus(task.id, "Rejected")}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold"
                    >
                      Reject
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateStatus(task.id, "In Progress")}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm font-semibold"
                    >
                      In Progress
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => updateStatus(task.id, "Completed")}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold"
                    >
                      Complete
                    </motion.button>
                  </>
                )}

                {/* ✅ Remove Task Button when Completed */}
                {task.status === "Completed" && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeTask(task.id)}
                    className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-semibold"
                  >
                    Remove Task
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
