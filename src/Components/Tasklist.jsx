import React from "react";
import { motion } from "framer-motion";

const TaskList = ({ tasks, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-lg bg-white/20 border border-white/30 p-6 rounded-2xl shadow-2xl text-white"
    >
      <h2 className="text-2xl font-bold text-center mb-5">{title}</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-200 text-center">No tasks yet 🚫</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-white/80 text-gray-800 shadow-md hover:shadow-xl transition duration-200 border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{task.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    task.status === "Pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : task.status === "Accepted"
                      ? "bg-blue-200 text-blue-800"
                      : task.status === "In Progress"
                      ? "bg-purple-200 text-purple-800"
                      : task.status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {task.status}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-2">{task.description}</p>

              <p className="text-sm">
                👤 Assigned To:{" "}
                <strong className="text-gray-900">{task.assignedTo}</strong>
              </p>
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default TaskList;
