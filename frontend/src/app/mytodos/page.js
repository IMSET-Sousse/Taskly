"use client"; // If you're using Next 13+ App Router and client components

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Mytodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:8000/account/todos/") // Update this URL if needed
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching todos:", err);
      });
  }, []);

  // Handle the delete action for a todo
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      fetch(`http://localhost:8000/account/todo/${id}/`, {
        method: "DELETE", // Make a DELETE request
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error deleting todo: ${res.status}`);
          }
          // Remove the deleted todo from the state
          setTodos(todos.filter((todo) => todo.id !== id));
        })
        .catch((err) => {
          console.error("Error deleting todo:", err);
          alert("Failed to delete the todo item.");
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 pt-24 px-10 pb-10">
      <div className="max-w-6xl mx-auto mt-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-800">My Todos</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Organize your day. Stay on track. Achieve more.
          </p>
        </header>

        <div className="text-center mb-6">
          <Link
            href="/create"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full text-lg hover:bg-indigo-700 transition"
          >
            + Add New Task
          </Link>
        </div>

        <section className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            🗂️ Task List
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-indigo-100 text-indigo-800 text-left">
                <tr>
                  <th className="px-6 py-3 font-semibold">#</th>
                  <th className="px-6 py-3 font-semibold">Task</th>
                  <th className="px-6 py-3 font-semibold">Status</th>
                  <th className="px-6 py-3 font-semibold">Created</th>
                  <th className="px-6 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {todos.map((todo, index) => (
                  <tr
                    key={todo.id}
                    className="border-b hover:bg-indigo-50 transition"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{todo.task_name}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          todo.status === "Pending"
                            ? "bg-red-100 text-red-700"
                            : todo.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {todo.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {new Date(todo.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 space-x-4">
                      {/* Update Button */}
                      <Link
                        href={`/update/${todo.id}`}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                      >
                        Update
                      </Link>

                      {/* Delete Button */}
                      <a
                        href="#"
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(todo.id); // Call handleDelete when clicked
                        }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
