import React, { useRef } from "react";

export const HistoryForm = (props) => {
  const refTemperature = useRef("");
  const refWeight = useRef("");
  const refHeartRate = useRef("");
  const refBreatheRate = useRef("");
  const refFeeding = useRef("");
  const refHabitat = useRef("");
  const refNotes = useRef("");
  const refTime = useRef("");
  
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();

  const addHistory = () => {
    const form = {
      pet: props.idPet,
      temperature: refTemperature.current.value,
      weight: refWeight.current.value,
      heartRate: refHeartRate.current.value,
      breatheRate: refBreatheRate.current.value,
      time: refTime.current.value,
      feeding: refFeeding.current.value,
      habitat: refHabitat.current.value,
      notes: refNotes.current.value,
    };

    fetch("/api/histories/history", {
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
          refTemperature.current.value = "";
          refWeight.current.value = "";
          refHeartRate.current.value = "";
          refBreatheRate.current.value = "";
          refTime.current.value = "";
          refFeeding.current.value = "";
          refHabitat.current.value = "";
          refNotes.current.value = "";
        }
      })
      .catch((err) => {
        alert(err);
      });

    props.setFormHist(false);
  };

  return (
    <div className="container justify-content-center mt-5 d-flex">
      <form className="col-8  ">
        <div className="text-center">
          <h1>Clinical History</h1>
        </div>
        <div className="mt-5">
          <div className="d-flex justify-content-around">
            <div className="form-floating mb-3 col-5">
              <input
                type="text"
                ref={refTemperature}
                className="form-control c"
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
            addHistory();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};
