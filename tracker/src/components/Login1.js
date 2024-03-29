import React, { useContext } from "react"
import './Login1.css'
import { Button } from "@mui/material"
import { Formik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import * as Yup from "yup"
import { UserContext } from "./useContext"

const Login1 = () => {
    const navigate = useNavigate();
    const { setLoggedIn, setCurrentUser } = useContext(UserContext);

    const userSubmit = async (formdata) => {
        console.log(formdata)

        const res = await fetch("http://localhost:5000/user/authenticate", {
            method: "POST",
            body: JSON.stringify(formdata),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.status === 200) {
            console.log("success");
            Swal.fire({
                icon: "success",
                title: "Wellcome!!👌",
                text: "Enter a new World!!",
            });
            const data = await res.json();
            sessionStorage.setItem("user", JSON.stringify(data));
            setLoggedIn(true);
      setCurrentUser(data);
            navigate("/addissue");
        } else {
            console.log("Login error ");
            Swal.fire({
                icon: "error",
                title: "Try Again!!😒",
                text: "Check your email and password!!",
            });
        }

    };

    const SignupSchema = Yup.object().shape({
        password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
    })
    return (
        <div className="body">

            <div className="container mt-2 cont">
                <h2 className="text-center mb-0.5em">Login</h2>
                <p className="text-center">Please enter your login and password</p>


                <Formik initialValues={{ email: "", password: "" }} onSubmit={userSubmit}>
                    {({ values, handleChange, handleSubmit }) => (

                        <form onSubmit={handleSubmit} validationSchema={SignupSchema}>
                            <div className="container">
                            <div className="box">
                                <div class="form-outline mb-4">
                                
                                    <input type="email" id="email" value={values.email} onChange={handleChange} class="form-control" />
                                    <label className="form-label" for="form2Example1" style={{ marginLeft: "0px" }}>Email address</label>
                                    
                                </div>
                            </div>


                            <div className="box">
                                <div class="form-outline mb-4">
                               
                                    <input type="password" id="password" value={values.password} onChange={handleChange} className="form-control" />
                                    <label class="form-label" for="form2Example2">Password</label>
                                    
                                </div>
                            </div>

                            {/* <!-- 2 column grid layout for inline styling --> */}

                            {/* <!-- Submit button --> */}
                            <Button type="submit" className="sign">Sign in</Button>
                            </div>
                            {/* <!-- Register buttons --> */}
                            <div class="text-center all">
                                <div className="txt">
                                <p>Not a member? <a href="/signUp">Register here</a></p>
                                </div>
                                <p>or sign up with:</p>
                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-google"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-twitter"></i>
                                </button>

                                <button type="button" class="btn btn-primary btn-floating mx-1">
                                    <i class="fab fa-github"></i>
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>


            </div>
        </div>

    )
}

export default Login1;