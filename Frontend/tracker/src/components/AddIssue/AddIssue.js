import { Formik } from 'formik';
import { useState } from 'react';
import { Button, Select, TextField } from '@mui/material'
import "./AddIssue.css";

function AddIssue() {
    const [addIssue, setAddIssue] = useState(true)
    const userSubmit = async (formdata) => {
        console.log(formdata);
        //1. address
        //2. req method
        //3. data
        //4. data format
        // creating request on backend
        const response = await fetch('http://localhost:5000/user/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        if (response.status === 200) {
            console.log('success');
            Swal.fire({
                icon: 'success',
                title: 'well done!',
                text: 'you have done a wonderful job!'
            })
        } else {
            console.log(response.status)
            console.log('something went wrong');
        }
    }
    return (
        <div className='adds' >
            <div className='container mt-5'>
                <h3>Issue Tracker</h3>
                <div className='card'>
                    <div className='card-body'>
                        <div>
                            <Formik initialValues={{
                                title: '',
                                description: '',
                                assigns: '',
                                dates: '',
                                state: '',
                            }}
                                onSubmit={userSubmit}
                                { ( { values, handleChange, handleSubmit } ) => (

                                    <form onSubmit={handleSubmit}>
                                        <TextField label="Title" id="title" onChange={handleChange} value={values.title} />
                                        <TextField label="Description" id="description" onChange={handleChange} value={values.description} />
                                        <InputLabel id="assigns">Assign to</InputLabel>
                                        <Select
                                            labelId="assign-label"
                                            id="assigns"
                                            value={values.assigns}
                                            label="Assign to"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Tanu</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>




                                        <div>
                                            <label className='mt-3' for="date">Assigned on:</label>
                                            <input className='asdt' type="date" id="dates" name="set"></input>
                                        </div>

                                        <div>
                                            <label className='mt-3'>status:</label>
                                            <select className="status" id='state'>
                                                <option value="com">Complete</option>
                                                <option value="notCom">Not Complete</option>
                                            </select>

                                        </div>
                                        <button className='btn btn-primary mt-3'>Add </button>


                                        </form>
            ) }
        </Formik>
    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddIssue;
