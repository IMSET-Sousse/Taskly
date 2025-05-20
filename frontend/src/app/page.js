import Image from "next/image";

export default function Home() {
  return (
    <div className="container-fluid bg-light p-5">
      <div className="row">
        {/* Header Section */}
        <div className="col-12 text-center mb-4">
          <h1 className="display-3 font-weight-bold text-primary">
            My To-Do Application
          </h1>
          <p className="lead text-muted">
            Stay organized, boost productivity, and never miss a task again.
          </p>
        </div>

        {/* Description Section */}
        <div className="col-12 col-md-8 mx-auto bg-white p-4 rounded shadow-sm">
          <h2 className="h4 text-dark">What is this App?</h2>
          <p className="text-muted">
            The To-Do Application is designed to help you stay on top of your
            daily tasks. Whether you're planning your day, organizing long-term
            projects, or simply jotting down reminders, this app has you covered.
            It’s clean, simple, and intuitive.
          </p>

          <h2 className="h4 mt-4 text-dark">How It Works</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Add tasks:</strong> Create tasks and set deadlines to stay
              organized.
            </li>
            <li className="list-group-item">
              <strong>Mark as completed:</strong> Check off tasks as you finish
              them.
            </li>
            <li className="list-group-item">
              <strong>Delete tasks:</strong> Remove unnecessary tasks from the
              list.
            </li>
          </ul>

          <h2 className="h4 mt-4 text-dark">Why Use This App?</h2>
          <p className="text-muted">
            <strong>Efficiency:</strong> The app helps you manage your time more
            effectively by keeping all your tasks in one place.
          </p>
          <p className="text-muted">
            <strong>Simplicity:</strong> The interface is minimalistic, ensuring
            ease of use without distractions.
          </p>
          <p className="text-muted">
            <strong>Flexibility:</strong> Whether you're working on personal
            tasks or team projects, this app adapts to your needs.
          </p>

          {/* Optional Image Section */}
          <div className="text-center mt-4">
            <Image
              src="/todo-illustration.png" // Use a relevant image from your assets
              alt="To-Do Illustration"
              width={500}
              height={300}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
