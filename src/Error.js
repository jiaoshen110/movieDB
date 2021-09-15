import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="page-error">
        <h1>Oops! it is a dead end!</h1>
        <Link to="/" className="btn">
          Back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
