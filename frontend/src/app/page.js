import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
      
      }}
    >
      <div className="max-w-4xl w-full bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">
            Taskly
          </h1>
          <p className="text-lg text-gray-600">
            Stay organized, boost productivity, and never miss a task again.
          </p>
        </div>

        {/* Description Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              What is this App?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Taskly is designed to help you stay on top of your daily tasks.
              Whether you're planning your day, organizing long-term projects, or
              simply jotting down reminders, this app has you covered. It’s clean,
              simple, and intuitive.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              How It Works
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong className="text-gray-800">Add tasks:</strong> Create tasks and set deadlines to stay organized.
              </li>
              <li>
                <strong className="text-gray-800">Mark as completed:</strong> Check off tasks as you finish them.
              </li>
              <li>
                <strong className="text-gray-800">Delete tasks:</strong> Remove unnecessary tasks from the list.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Why Use This App?
            </h2>
            <ul className="space-y-2">
              <li className="text-gray-600">
                <strong className="text-gray-800">Efficiency:</strong> Manage your time more effectively by keeping all your tasks in one place.
              </li>
              <li className="text-gray-600">
                <strong className="text-gray-800">Simplicity:</strong> Minimalistic interface for ease of use without distractions.
              </li>
              <li className="text-gray-600">
                <strong className="text-gray-800">Flexibility:</strong> Adapts to personal or team projects with ease.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
