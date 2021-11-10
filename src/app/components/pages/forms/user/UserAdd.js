import React from "react";

export const UserAdd = ({
  refNameAdd,
  refLastAdd,
  refTpDocAdd,
  refDocAdd,
  refStatusAdd,
  refGenderAdd,
  refId,
  setAdd,
  add,
  addUser,
  getData
}) => {
  return (
    <div>
      <hr />
      <div className="container d-flex flex-row-reverse">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => {
            setAdd(!add);
            refId.current.value = "";
          }}
        ></button>
      </div>
      <div className="container justify-content-center mt-5 d-flex ">
        <div className="col-8">
          <div className="text-center">
            <h1>Add User</h1>
          </div>
          <div className="mt-5">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                id="floatingInput"
                placeholder="title"
                ref={refNameAdd}
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
                ref={refLastAdd}
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
                ref={refTpDocAdd}
              />
              <label>Type Document</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="doc"
                id="floatingInput"
                placeholder="description"
                ref={refDocAdd}
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
                ref={refStatusAdd}
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
                ref={refGenderAdd}
              />
              <label>Gender</label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark mb-5"
            onClick={() => {
              addUser();
              getData();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
