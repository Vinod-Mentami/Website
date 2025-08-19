// Pages/ErrorPage.js
import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px", color:"white" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link className="text-blue-500 underline" to="/">Go Back Home</Link>
    </div>
  );
}
