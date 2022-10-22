import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);
    resetForm();

    const response = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("request sent");
      resetForm();
      const data = await response.json();
      sessionStorage.setItem("user", JSON.stringify(data));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Loggedin Successfully",
      });

      navigate("/dashboard");
    } else if (response.status === 401) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Loggedin Failed",
      });
    } else {
      console.log("Unknown error occured");
    }
  };
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/1900932.jpg)`,
        height: "100vh",
      }}
    >
      <div className="container d-flex align-items-center justify-content-center">
        <div className="card" style={{ width: "500px", height: "300px" }}>
          <div className="card-body">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={loginSubmit}
            >
              {({ handleSubmit, values, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-center mb-3 login-title">LOGIN HERE</h3>
              
                  <div className="form-outline mb-4">
                   <input className="form-control"
                    id="email"
                    value={values.email}
                    onChange={handleChange} />
                    
                   <label className="form-label">Email address</label>
                  </div>

                  
                 <div className="form-outline mb-4">
                 <input                     
                   className="form-control"
                    id="password"
                    value={values.password}
                    onChange={handleChange}/>
                  <label className="form-label">Password</label>
                  </div>

                  <button type="submit" className="btn btn-primary">
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
export default Login;
