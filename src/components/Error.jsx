import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="mt-32">
      <p className="text-center text-5xl text-white font-bold">Error 404</p>
      <div className="text-center">
        <Link to="/">
          <button className="mt-5 p-2 bg-slate-600 text-white rounded-md">
            Back to home page
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Error;
