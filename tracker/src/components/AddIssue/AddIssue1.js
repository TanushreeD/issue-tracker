import { Formik } from 'formik';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AddIssue1 = () => {

    const [addIssue, setAddIssue] = useState(true)
    
    const userSubmit = async (formdata) => {
        console.log(formdata);
        const response = await fetch('http://localhost:5000/issue/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            console.log('success');
            Swal.fire({
                icon: "success",
                title: "Well Done!!👌",
                text: "Wonderful JOB!!"
            })
            // navigate("/login")
        } else {
            console.log('error occured');
            Swal.fire({
                icon: "error",
                title: "Try Again!!😒",
                text: "search for error!!"
            });

        }
    };
        return (
            <div>
                <h1 className='text-center mt-2'>Issue Record Form</h1>
                <div className='container mt-4'>
                    <Formik
                        initialValues={{
                            title: '',
                            type: '',
                            assingedTo: '',
                            assingedBy: '',
                            createdAt: '',
                            status: '',
                            closed: '',
                            team: '',
                            org: ''
                        }}
                        onSubmit={userSubmit}>
                        {({ values, handleChange, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                <div class="row mb-4">

                                    <div class="form-outline">
                                        <input type="text" id="title" class="form-control"
                                            onChange={handleChange}
                                            value={values.title}
                                        />
                                        <label class="form-label" for="form6Example1">Title</label>
                                    </div>


                                    <div class="form-outline">
                                        <input type="text" id="type" class="form-control"
                                            onChange={handleChange}
                                            value={values.type}
                                        />
                                        <label class="form-label" for="form6Example2">Description</label>
                                    </div>
                                </div>

                                {/* <!-- Text input --> */}
                                <div class="form-outline mb-4">
                                    <input type="text" id="org" class="form-control"
                                        onChange={handleChange}
                                        value={values.org}
                                    />
                                    <label class="form-label" for="form6Example3">Organisation</label>
                                </div>

                                {/* <!-- Text input --> */}
                                <div class="form-outline mb-4">
                                    <input type="text" id="assignedTo" class="form-control"
                                        onChange={handleChange}
                                        value={values.assignedTo}
                                    />
                                    <label class="form-label" for="form6Example4">Assigned To</label>
                                </div>

                                {/* <!-- Email input --> */}
                                <div class="form-outline mb-4">
                                    <input type="text" id="assignedBy" class="form-control"

                                        onChange={handleChange}
                                        value={values.assignedBy} />
                                    <label class="form-label" for="form6Example5">Assigned By</label>
                                </div>

                                {/* <!-- Number input --> */}
                                <div class="form-outline mb-4">
                                    <input type="Date" id="createdAt" class="form-control"

                                        onChange={handleChange}
                                        value={values.createdAt} />
                                    <label class="form-label" for="form6Example6">Date</label>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="text" id="status" class="form-control"

                                        onChange={handleChange}
                                        value={values.status} />
                                    <label class="form-label" for="form6Example6">Status</label>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="text" id="closed" class="form-control"

                                        onChange={handleChange}
                                        value={values.closed} />
                                    <label class="form-label" for="form6Example6">Closed</label>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="text" id="team" class="form-control"

                                        onChange={handleChange}
                                        value={values.team} />
                                    <label class="form-label" for="form6Example6">Team</label>
                                </div>
                                <div className='text-center'>
                                    <button className='btn btn-dark' type='submit'>Submit</button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>

            </div>
        )
    }

    export default AddIssue1;