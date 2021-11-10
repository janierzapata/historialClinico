import React from 'react'

export const HistoryForm = () => {
    return (
        <div className="container justify-content-center mt-5 d-flex">
      <form className="col-8  ">
        <div className="text-center">
          <h1>Clinical Histories</h1>
        </div>
        <div className="mt-5">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name=""
              id="floatingInput"
              placeholder="title"
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
            />
            <label>Description</label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark" onClick={()=>getData()}>
          Add
        </button>
      </form>
    </div>
    )
}
