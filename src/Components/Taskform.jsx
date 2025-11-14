import React, { useState } from "react";
import { motion } from "framer-motion";

const TaskForm = ({ onAddTask }) => {
  const employees =
    JSON.parse(localStorage.getItem("users"))?.filter((u) => u.role === "employee") || [];

  const [task, setTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    status: "Pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.assignedTo) {
      alert("⚠️ Please fill all required fields!");
      return;
    }
    onAddTask({ ...task, id: Date.now() });
    setTask({ title: "", description: "", assignedTo: "", status: "Pending" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-lg bg-white/20 border border-white/30 p-6 rounded-2xl shadow-2xl text-white"
    >
      <h2 className="text-2xl font-bold text-center mb-5">📝 Assign New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Task Title */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          placeholder="Enter task title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-full p-3 rounded-md bg-white/80 text-gray-800 placeholder-gray-500 focus:bg-white outline-none shadow-inner"
        />

        {/* Description */}
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          placeholder="Enter task description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="w-full p-3 rounded-md bg-white/80 text-gray-800 placeholder-gray-500 focus:bg-white outline-none shadow-inner min-h-[90px]"
        />

        {/* Employee Selection */}
        <motion.select
          whileFocus={{ scale: 1.02 }}
          value={task.assignedTo}
          onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
          className="w-full p-3 rounded-md bg-white/80 text-gray-800 focus:bg-white outline-none shadow-inner"
        >
          <option value="">Select Employee</option>
          {employees.length === 0 ? (
            <option disabled>No employees found</option>
          ) : (
            employees.map((emp) => (
              <option key={emp.id} value={emp.email}>
                {emp.name}
              </option>
            ))
          )}
        </motion.select>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition duration-200"
        >
          Assign Task
        </motion.button>
      </form>
    </motion.div>
  );
};

export default TaskForm;
