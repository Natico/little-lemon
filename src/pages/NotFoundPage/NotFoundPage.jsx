import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="not-found">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>

      <Link to="/">Back to Home</Link>
    </section>
  );
}

export default NotFoundPage;