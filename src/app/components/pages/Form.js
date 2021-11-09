import React, { useRef, useState } from "react";

export const Form = () => {
  const refTitle = useRef("");
  const refDesc = useRef("");

  const addTask = (e) => {
    e.preventDefault();

    const form = {
      title: refTitle.current.value,
      description: refDesc.current.value,
    };

    fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if(res.status === 200){
            alert("registro exitoso")
            refTitle.current.value = "";
            refDesc.current.value = "";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container justify-content-center mt-5 d-flex">
      <form className="col-8  " onSubmit={addTask}>
        <div className="text-center">
          <h1> Add New Task</h1>
        </div>
        <div className="mt-5">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="floatingInput"
              placeholder="title"
              ref={refTitle}
            />
            <label>Title</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="desc"
              id="floatingInput"
              placeholder="description"
              ref={refDesc}
            />
            <label>Description</label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark">
          Add
        </button>
      </form>
    </div>
  );
};
