import React from "react";
import { Formik } from "formik";
import swal from "sweetalert";


 const Login = () => {

    const loginSubmit = async(formdata, {resetForm}) =>{
        console.log(formdata);
         resetForm();

         const response = await fetch('http://localhost:5000/user/authenticate', {
          method : 'POST',
          body : JSON.stringify(formdata),
          headers : {
            'Content-Type' : 'application/json'
          }
         })

         if(response.status === 200){
            console.log('request sent');
            resetForm();
            swal.fire({
                icon : 'success',
                title : 'Success',
                text : 'Loggedin Successfully'
            })
         }else if(response.status === 401){
            swal.fire({
                icon : 'error',
                title : 'Failed',
                text : 'Loggedin Failed'
            })
         }else{
            console.log('Unknown error occured');
         }
    }
    return(
        <div className= "d-flex flex-column align-items-center justify-content-center"
        style={{
            backgroundColor: "#044a75",
            height: "100vh"
        }}>
             <div className="container d-flex align-items-center justify-content-center">
        <div className = "card" style={{ width: "500px", height: '300px'}}>
        <div className= "card-body">
        <Formik initialValues={{ email : '', password : ''}}
        onSubmit={loginSubmit}>
        { ({handleSubmit, values, handleChange}) => (
            <form onSubmit={handleSubmit}>
                <h3 className='text-center mb-3 login-title'>LOGIN HERE</h3>
                <label>Email</label>
                <input className='form-control mb-2' id="email" value={values.email} onChange={handleChange} />

                <label>Password</label>
                <input className='form-control mb-2' id="password" value={values.password} onChange={handleChange} />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        ) }
        
        </Formik>
         </div>
         </div>
         </div>
        </div>
    );
};
export default Login;