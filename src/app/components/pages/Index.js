import React, { useEffect, useRef, useState } from "react";

export const Index = () => {
  
  const url = "/api/tasks";
  const [data, setData] = useState([]);
  const [form, setForm] = useState(false);

  const refTitle = useRef("");
  const refDesc = useRef("");
  const refId = useRef("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [data]);

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  const deleteTask = (id) => {
    if (confirm("Are you sure you want to delete")) {
      fetch(url + `/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const openForm = ({ _id, title, description }) => {
    setForm(true);
    refId.current.value = _id;
    refTitle.current.value = title;
    refDesc.current.value = description;
  };



  const updateTask = () => {
    const newValues = {
      title: refTitle.current.value, 
      description: refDesc.current.value

    }

    console.log(newValues);
    fetch(url + `/${refId.current.value}`, {
      method: "PUT",
      body: JSON.stringify(newValues),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Actualizacion exitosa");
          refTitle.current.value = "";
          refDesc.current.value = "";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <h1> My Tasks</h1>

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col-12">#</th>
              <th scope="col-3">Title</th>
              <th scope="col-3">Description</th>
              <th scope="col-3"></th>
              <th scope="col-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => openForm(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteTask(item._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="id"
            disabled
            id="floatingInput"
            placeholder="title"
            ref={refId}
            hidden
          />
        </div>
       
          <div hidden={!form}>
            <hr />
            <div className="container d-flex flex-row-reverse">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => {
                  setForm(!form);
                }}
              ></button>
            </div>
            <div className="container justify-content-center mt-5 d-flex " >
              <div className="col-8">
                <div className="text-center">
                  <h1> Edit Task</h1>
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
                      
                      name="description"
                      id="floatingInput"
                      placeholder="description"
                      ref={refDesc}
                    />
                    <label>Description</label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={() => updateTask()}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};
