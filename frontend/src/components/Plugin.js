import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert";

const Plugin = ({ ownerid }) => {
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
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: `url(data:image/jpeg;base64,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)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="container d-flex align-items-center justify-content-center mt-4">
        <div
          className="card  border border-primary"
          style={{ width: "500px", height: "300px" }}
        >
          <div className="card-body">
            <Formik
              initialValues={{
                name: "",
                email: "",
                owner: ownerid,
                createdAt: new Date(),
              }}
              onSubmit={userSubmit}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-center mb-3">SIGNUP HERE</h3>

                  <div class="form-outline mb-4">
                    <input  type="text"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    className="form-control" />
                    <label class="form-label">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="text"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    className="form-control"/>
                    <label class="form-label">Password</label>
                  </div>

                  {/* <label>Name</label>
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
                  /> */}

                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plugin;
