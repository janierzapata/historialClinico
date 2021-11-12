import React, { useRef } from "react";

export const DataHistories = (props) => {
 
  const refTemperature = useRef("");
  const refWeight = useRef("");
  const refHeartRate = useRef("");
  const refBreatheRate = useRef("");
  const refFeeding = useRef("");
  const refHabitat = useRef("");
  const refNotes = useRef("");
  const refTime = useRef("");
  const refPet = useRef("");
  const refId = useRef("");

  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();

  const deleteHst = (id) => {
    if (confirm("Are you sure you want to delete")) {
      fetch("/api/histories/history" + `/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          alert("successful removal");
          props.setDataHist(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const openUpdateHst = (htr) => {
    refTemperature.current.value = htr.temperature;
    refWeight.current.value = htr.weight;
    refHeartRate.current.value = htr.heartRate;
    refBreatheRate.current.value = htr.breatheRate;
    refFeeding.current.value = htr.feeding;
    refHabitat.current.value = htr.habitat;
    refNotes.current.value = htr.notes;
    refPet.current.value = htr.pet;
    refId.current.value = htr._id;
  };

  const UpdateHst = () => {
    const newValues = {
      pet: refPet.current.value,
      temperature: refTemperature.current.value,
      weight: refWeight.current.value,
      heartRate: refHeartRate.current.value,
      breatheRate: refBreatheRate.current.value,
      feeding: refFeeding.current.value,
      habitat: refHabitat.current.value,
      notes: refNotes.current.value,
    };

    fetch("/api/histories/history" + `/${refId.current.value}`, {
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
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-around mt-5 ">
        {props.histories.map((htr, i) => (
          <div className="card col-3 mx-2 my-3" key={i + 200}>
            <div className="card-body">
              <div className="d-flex justify-content-around ">
                <div>
                  <p className="card-text">
                    <b>Temperature: </b>
                    {htr.temperature}
                  </p>
                  <p className="card-text">
                    <b>Weight: </b>
                    {htr.weight}
                  </p>
                  <p className="card-text">
                    <b>HeartRate: </b>
                    {htr.heartRate}
                  </p>
                  <p className="card-text">
                    <b>Breathe Rate: </b>
                    {htr.breatheRate}
                  </p>
                </div>
                <div>
                  <p className="card-text">
                    <b>Time: </b>
                    {htr.time}
                  </p>
                  <p className="card-text">
                    <b>Feeding: </b>
                    {htr.feeding}
                  </p>
                  <p className="card-text">
                    <b>Habitat: </b>
                    {htr.habitat}
                  </p>
                  <p className="card-text">
                    <b>Notes: </b>
                    {htr.notes}
                  </p>
                </div>
              </div>

              <hr />
              <div className="d-grid gap-2">
                <button
                  className="btn btn-success mx-1"
                  onClick={() => {
                    props.setFormHistUp(true);
                    openUpdateHst(htr);                    
                  }}
                >
                  Update History
                </button>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => deleteHst(htr._id)}
                >
                  delete history
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div hidden={!props.formHistUp}>
        <hr />
        <div className="container d-flex flex-row-reverse">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              props.setFormHistUp(false);
            }}
          ></button>
        </div>
        <div className="container justify-content-center mt-5 d-flex">
          <form className="col-8  ">
            <div className="text-center">
              <h1>Update Clinical History</h1>
            </div>
            <div className="mt-5">
              <div className="d-flex justify-content-around">
                <input
                  hidden
                  type="text"
                  ref={refPet}
                  className="form-control "
                  name="pet"
                />

                <input
                  hidden
                  type="text"
                  ref={refId}
                  className="form-control "
                  name="id"
                />
                <div className="form-floating mb-3 col-5">
                  <input
                    type="text"
                    ref={refTemperature}
                    className="form-control "
                    name="temperature"
                    id="floatingInput"
                    placeholder="temperature"
                  />
                  <label>Temperature</label>
                </div>
                <div className="form-floating mb-3 col-5">
                  <input
                    type="text"
                    ref={refWeight}
                    className="form-control"
                    name="weight"
                    id="floatingInput"
                    placeholder="weight"
                  />
                  <label>Weight</label>
                </div>
              </div>

              <div className="d-flex justify-content-around">
                <div className="form-floating mb-3 col-5">
                  <input
                    type="text"
                    ref={refHeartRate}
                    className="form-control"
                    name="heartRate"
                    id="floatingInput"
                    placeholder="heartRate"
                  />
                  <label>HeartRate</label>
                </div>
                <div className="form-floating mb-3 col-5">
                  <input
                    type="text"
                    ref={refBreatheRate}
                    className="form-control"
                    name="breatheRate"
                    id="floatingInput"
                    placeholder="breatheRate"
                  />
                  <label>Breathe Rate</label>
                </div>
              </div>

              <div className="d-flex justify-content-around">
                <div className="form-floating mb-3 col-5">
                  <input
                    disabled
                    value={`${dd}/${mm}/${yyyy}`}
                    type="text"
                    ref={refTime}
                    className="form-control"
                    name="time"
                    id="floatingInput"
                    placeholder="time"
                  />
                  <label>Time</label>
                </div>
                <div className="form-floating mb-3 col-5">
                  <input
                    type="text"
                    ref={refFeeding}
                    className="form-control"
                    name="feeding"
                    id="floatingInput"
                    placeholder="feeding"
                  />
                  <label>Feeding</label>
                </div>
              </div>

              <div className="d-flex justify-content-around">
                <div className="form-floating mb-3 col-5">
                  <input
                    type="text"
                    ref={refHabitat}
                    className="form-control"
                    name="habitat"
                    id="floatingInput"
                    placeholder="habitat"
                  />
                  <label>Habitat</label>
                </div>
                <div className="form-floating mb-3 col-5">
                  <input
                    type="text"
                    ref={refNotes}
                    className="form-control"
                    name="notes"
                    id="floatingInput"
                    placeholder="notes"
                  />
                  <label>Notes</label>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-dark mb-5"
                onClick={() => {
                    UpdateHst();
                    props.setFormHistUp(false);
                    props.setDataHist(false);
                }}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
