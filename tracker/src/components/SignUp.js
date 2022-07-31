import React from "react";
import { Button, TextField } from "@mui/material";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate= useNavigate();


    //1. create a form object which should match with model fields
    const userForm = {
        username: "",
        email: "",
        password: "",
    }

    //2. create a function for form submission
    const userSubmit = async (formdata) => {
        console.log(formdata);
        const response = await fetch('http://localhost:5000/user/add',{
    method:'POST',
    body: JSON.stringify(formdata),
    headers:{
      'Content-Type' : 'application/json'
    }
  })
  if(response.status === 200){
    console.log('success');
    Swal.fire({
      icon:"success",
      title: "Well Done!!👌",
      text: "Wonderful JOB!!"
    })
    navigate("/login")
  }else{
    console.log('error occured');
    Swal.fire({
      icon:"error",
      title: "Try Again!!😒",
      text: "search for error!!"
    });
  
  }
    };

    

const formSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
  .email('Invalid email')
  .required('Required'),
  password: Yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});


    return (
        <div className="container mt-2">

            <div className="card">
                <div className="row">
                    <div className="col">
                        <img src="https://wallpaperaccess.com/full/537586.jpg" className="card-img-top" alt="" />
                        <div className="card-body">
                            <div className="sign-up-form">
                                <h2 className="card-title">HELLO DEVELOPER!</h2>
                                <h4 className="class-text">Welcome back</h4>
                                <Formik initialValues={userForm} onSubmit={userSubmit} validationSchema = {formSchema}>
                                    {({ values, handleChange, handleSubmit, errors, touched}) => (
                                        <form onSubmit={handleSubmit}>


                                            <TextField
                                                label="Username"
                                                variant="outlined"
                                                className="w-100 mb-4"
                                                id="username"
                                                onChange={handleChange}
                                                value={values.username}
                                                helperText={touched.username ? errors.username: ''}
                                                error={Boolean(errors.username && touched.username)}

                                            />
                                            <TextField
                                                label="Email"
                                                variant="outlined"
                                                className="w-100 mb-4"
                                                id="email"
                                                onChange={handleChange}
                                                value={values.email}
                                                helperText={touched.email ? errors.email:''}
                                                error={Boolean(errors.email && touched.email)}    
                                            />
                                            <TextField
                                                label="Password"
                                                variant="outlined"
                                                className="w-100 mb-4"
                                                id="password"
                                                onChange={handleChange}
                                                value={values.password}
                                                helperText={touched.password ? errors.password: ''}
                                            />
                                            <Button className="w-100" type="submit" variant="contained">
                                                Log in
                                            </Button>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;