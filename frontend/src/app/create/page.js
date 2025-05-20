"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [status] = useState("pending"); // status is fixed to "pending"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (optional, can be extended)
    if (!taskName) {
      setError("Task name is required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/account/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_name: taskName,
          status: status, // status is always "pending"
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      const data = await response.json();
      console.log("Task created successfully:", data);

      // Redirect to the task list or show success message
      router.push("/mytodos"); // Example: redirect to tasks page
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to create task. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 pt-24 px-10 pb-10">
      <div className="max-w-6xl mx-auto mt-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-800">Create a New Task</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Fill in the details of your new task below.
          </p>
        </header>

        {/* Form Section */}
        <section className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Task Details</h2>

          {error && (
            <div className="text-red-500 mb-4">
              <p>{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Task Name Input */}
            <div>
              <label htmlFor="taskName" className="block text-gray-800 font-medium mb-2">
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>

            {/* Status (hardcoded as "Pending") */}
            <div>
              <label htmlFor="status" className="block text-gray-800 font-medium mb-2">
                Status
              </label>
              <input
                type="text"
                id="status"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value="Pending" // Hardcoded to "Pending"
                readOnly
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-indigo-700 transition"
                disabled={loading}
              >
                {loading ? "Creating Task..." : "Create Task"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
