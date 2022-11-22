import React from "react";

import Notes from "./Notes";

export const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h1>Add a note</h1>
        <form action="" className="my-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              we'll never share your email with anyone else
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck"
            />
            Password
            <label className="form-check-label" htmlFor="exampleCheck">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Notes />
    </div>
  );
};
