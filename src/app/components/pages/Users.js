import React, { useEffect, useRef, useState } from "react";
import { DataUser } from "./data/DataUser";
import { UserAdd } from "./forms/user/UserAdd";
import { UserForm } from "./forms/user/UserForm";

export const Users = () => {
  const url = "/api/histories/user";
  const [data, setData] = useState([]);
  const [form, setForm] = useState(false);
  const [info, setInfo] = useState(false);
  const [add, setAdd] = useState(false);
  const [btnAdd, setBtnAdd] = useState(false);

  const [pets, setPets] = useState([]);
  const [item, setItem] = useState({});

  const refName = useRef("");
  const refLast = useRef("");
  const refTpDoc = useRef("");
  const refDoc = useRef("");
  const refStatus = useRef("");
  const refGender = useRef("");
  const refId = useRef("");

  const refNameAdd = useRef("");
  const refLastAdd = useRef("");
  const refTpDocAdd = useRef("");
  const refDocAdd = useRef("");
  const refStatusAdd = useRef("");
  const refGenderAdd = useRef("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [refName]);

  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  const addUser = () => {
    const form = {
      name: refNameAdd.current.value,
      lastName: refLastAdd.current.value,
      typeDocument: refTpDocAdd.current.value,
      document: refDocAdd.current.value,
      status: refStatusAdd.current.value,
      gender: refGenderAdd.current.value,
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Successful registration");
          refNameAdd.current.value = "";
          refLastAdd.current.value = "";
          refTpDocAdd.current.value = "";
          refDocAdd.current.value = "";
          refStatusAdd.current.value = "";
          refGenderAdd.current.value = "";
          setAdd(false);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteUser = (id) => {
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

  const showPets = (itm) => {
    setForm(false);
    setInfo(true);
    setAdd(false);
    setItem(itm);

    const name = itm.name.split();
    const id = itm._id;
    refId.current.value = id;
    refName.current.value = name[0];

    fetch("/api/histories/pet/user/" + id)
      .then((res) => res.json())
      .then((res) => {
        setPets(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openForm = ({
    _id,
    name,
    lastName,
    typeDocument,
    document,
    status,
    gender,
  }) => {
    setForm(true);
    setInfo(false);
    setAdd(false);
    refId.current.value = _id;
    refName.current.value = name;
    refLast.current.value = lastName;
    refTpDoc.current.value = typeDocument;
    refDoc.current.value = document;
    refStatus.current.value = status;
    refGender.current.value = gender;
  };

  const updateUser = () => {
    const newValues = {
      name: refName.current.value,
      lastName: refLast.current.value,
      typeDocument: refTpDoc.current.value,
      document: refDoc.current.value,
      status: refStatus.current.value,
      gender: refGender.current.value,
    };

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
          alert("successful update");
          refId.current.value = "";
          refName.current.value = "";
          refLast.current.value = "";
          refTpDoc.current.value = "";
          refDoc.current.value = "";
          refStatus.current.value = "";
          refGender.current.value = "";
          setForm(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="container d-flex flex-row-reverse">
          <button
            type="button"
            className="btn btn-success"
            onMouseEnter={() => setBtnAdd(true)}
            onMouseLeave={() => setBtnAdd(false)}
            onClick={() => {
              setAdd(true);
              setForm(false);
              setInfo(false);
            }}
          >
            {btnAdd ? (
              "Add User"
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            )}
          </button>
        </div>
        <h1>Users</h1>

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col-12">#</th>
              <th scope="col-3">Name</th>
              <th scope="col-3">Last Name</th>
              <th scope="col-3">Type Document</th>
              <th scope="col-3">Document</th>
              <th scope="col-3">Status</th>
              <th scope="col-3">Gender</th>
              <th scope="col-3"></th>
              <th scope="col-3"></th>
              <th scope="col-3">Show Pets</th>
            </tr>
          </thead>
          <DataUser
            data={data}
            openForm={openForm}
            deleteUser={deleteUser}
            showPets={showPets}
            getData={getData}
          />
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

        <div hidden={!add}>
          <UserAdd
            refNameAdd={refNameAdd}
            refLastAdd={refLastAdd}
            refTpDocAdd={refTpDocAdd}
            refDocAdd={refDocAdd}
            refStatusAdd={refStatusAdd}
            refGenderAdd={refGenderAdd}
            refId={refId}
            setAdd={setAdd}
            add={add}
            addUser={addUser}
            getData={getData}
          />
        </div>

        <div hidden={!form}>
          <UserForm
            refName={refName}
            refLast={refLast}
            refTpDoc={refTpDoc}
            refDoc={refDoc}
            refStatus={refStatus}
            refGender={refGender}
            refId={refId}
            updateUser={updateUser}
            setForm={setForm}
            getData={getData}
            form={form}
          />
        </div>

        <div hidden={!info}>
          <hr />
          <div className="container d-flex flex-row-reverse">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {
                setInfo(!info);
              }}
            ></button>
          </div>
          <div className="container justify-content-center my-5 d-flex ">
            <div className="col-8">
              <div className="text-center mb-5">
                <h1 className="">{refName.current.value + "'s pets"}</h1>
              </div>
              <div className="d-flex flex-wrap justify-content-around ">
                {pets.map((pt, i) => (
                  <div className="card col-3 mx-2 my-3" key={i + 100}>
                    <div className="card-header text-center"><h3>{pt.name}</h3></div>
                    <div className="card-body">
                      <h5 className="card-title"> </h5>
                      <p className="card-text"><b>Name: </b>{pt.name}</p>
                      <p className="card-text"><b>Race: </b>{pt.race}</p>
                      <p className="card-text"><b>Gender: </b>{pt.gender}</p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
