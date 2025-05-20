"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

const UpdateTaskPage = () => {
  const router = useRouter();
  const { id } = useParams(); // Get dynamic route param

  const [todo, setTodo] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch task details on mount
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/account/todo/${id}/`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch todo");
          return res.json();
        })
        .then((data) => {
          setTodo(data);
          setTaskName(data.task_name || "");
          setStatus(data.status || "Pending");
        })
        .catch((err) => {
          console.error("Error fetching todo:", err);
          setError("Failed to load task.");
        });
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      task_name: taskName,
      status: status,
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await fetch(`http://localhost:8000/account/todo/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server response:", errorData);
        throw new Error("Failed to update task.");
      }

      const data = await response.json();
      console.log("Task updated:", data);

      router.push("/mytodos"); // Redirect on success
    } catch (error) {
      console.error("Update error:", error);
      setError("Failed to update task. Please check your input.");
    } finally {
      setLoading(false);
    }
  };

  // Show loading until task is fetched
  if (!todo) return <div className="p-10 text-xl">Loading task...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 pt-24 px-10 pb-10">
      <div className="max-w-6xl mx-auto mt-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-800">Update Task</h1>
        </header>

        {error && (
          <div className="text-red-500 mb-4">
            <p>{error}</p>
          </div>
        )}

        <section className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Task Details</h2>

          <form className="space-y-6" onSubmit={handleUpdate}>
            {/* Task Name Input */}
            <div>
              <label htmlFor="taskName" className="block text-gray-800 font-medium mb-2">
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
            </div>

            {/* Status Input */}
            <div>
              <label htmlFor="status" className="block text-gray-800 font-medium mb-2">
                Status
              </label>
              <select
                id="status"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-indigo-700 transition"
                disabled={loading}
              >
                {loading ? "Updating Task..." : "Update Task"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateTaskPage;
