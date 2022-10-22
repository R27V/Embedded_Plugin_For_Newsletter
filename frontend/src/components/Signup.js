import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const userSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
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

      navigate("/login");
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
        boxSizing: "border-box",
        boxShadow:
          "2px 2px 4px 2px rgb(0 0 0 / 31%), -2px -2px 3px 2px rgb(0 0 0 / 31%)",
        borderRadius: "5px",
        backgroundImage: `url(http://chitrahandicraft.com/wp-content/uploads/2019/02/login-page-background-images-hd-10.jpg)`,
        height: "100vh",
      }}
    >
      <div className="container d-flex align-items-center justify-content-center mt-4">
        <div className="card" style={{ width: "500px", height: "460px" }}>
          <div className="card-body">
            <Formik
              initialValues={{ name: "", email: "", password: "", age: "0" }}
              onSubmit={userSubmit}
            >
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-center mb-3">CREATE AN ACCOUNT HERE</h3>
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

                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    className="form-control mb-3"
                  />

                  <label>Age</label>
                  <input
                    type="number"
                    id="age"
                    value={values.age}
                    onChange={handleChange}
                    className="form-control mb-3"
                  />

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
export default Signup;
