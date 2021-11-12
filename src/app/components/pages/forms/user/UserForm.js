import React from "react";

export const UserForm = (props) => {
  return (
    <div>
      <hr />
      <div className="container d-flex flex-row-reverse">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => {
            props.setForm(!props.form);
          }}
        ></button>
      </div>
      <div className="container justify-content-center mt-5 d-flex ">
        <div className="col-8">
          <div className="text-center">
            <h1>Update User</h1>
          </div>
          <div className="mt-5">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                id="floatingInput"
                placeholder="title"
                ref={props.refName}
              />
              <label>Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="lastName"
                id="floatingInput"
                placeholder="description"
                ref={props.refLast}
              />
              <label>Last Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="tpDoc"
                id="floatingInput"
                placeholder="title"
                ref={props.refTpDoc}
              />
              <label>Type Document</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                name="doc"
                id="floatingInput"
                placeholder="description"
                ref={props.refDoc}
              />
              <label>document</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="status"
                id="floatingInput"
                placeholder="title"
                ref={props.refStatus}
              />
              <label>Status</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="gender"
                id="floatingInput"
                placeholder="description"
                ref={props.refGender}
              />
              <label>Gender</label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark mb-5"
            onClick={() => {
              props.updateUser();
              props.getData();
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
