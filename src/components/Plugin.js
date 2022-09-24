import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert";

const Plugin = () => {
  const userSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/subscriber/add", {
      method: "Post",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("request sent");
      resetForm();
      Swal.fire({
        icon: "success",
        title: "Awsome",
        text: "User Signed_up!!",
      });
    } else {
      console.log("some error occured");
      Swal.fire({
        icon: "error",
        title: "wrong",
        text: "Some error",
      });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Formik initialValues={{ name: "", email: "", owner : '632abd8e28738491662d8461', createdAt : new Date() }} onSubmit={userSubmit}>
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <h3 className="text-center mb-3">SIGNUP HERE</h3>
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  className="form-control mb-3"
                />

                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  className="form-control mb-3"
                />

                <button type="submit" className="btn btn-primary mt-5">
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Plugin;
