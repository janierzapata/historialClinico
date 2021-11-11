import React, { useRef } from "react";

export const Pets = () => {
  const refUser = useRef("");
  const refName = useRef("");
  const refRace = useRef("");
  const refGender = useRef("");

  const addPet = () => {
    const user = refUser.current.value;
    const name = refName.current.value;
    const race = refRace.current.value;
    const gender = refGender.current.value;

    fetch("/api/histories/user/doc/" + user)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (!!res) {
          const form = {
            user:res._id,
            name,
            race,
            gender,
          };
          fetch("/api/histories/pet", {
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
                refUser.current.value = "";
                refName.current.value = "";
                refRace.current.value = "";
                refGender.current.value = "";
              }
            })
            .catch((err) => {
              alert(err);
            });
        } else {
          alert("this user does not exist, please register it");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container justify-content-center mt-5 d-flex">
      <form className="col-8  ">
        <div className="text-center">
          <h1> Add Pet</h1>
        </div>
        <div className="mt-5">
          <h3>
            User Data
            <hr />
          </h3>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="user"
              id="floatingInput"
              placeholder="Document"
              ref={refUser}
            />
            <label>User Document</label>
          </div>

          <h3>
            Pet Data
            <hr />
          </h3>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="floatingInput"
              placeholder="name"
              ref={refName}
            />
            <label>Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="race"
              id="floatingInput"
              placeholder="race"
              ref={refRace}
            />
            <label>Race</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="gender"
              id="floatingInput"
              placeholder="gender"
              ref={refGender}
            />
            <label>Gender</label>
          </div>
        </div>

        <button type="button" className="btn btn-dark mb-5" onClick={() => addPet()}>
          Add
        </button>
      </form>
    </div>
  );
};
