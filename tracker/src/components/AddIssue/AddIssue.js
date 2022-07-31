import { Formik } from 'formik';
import { useState } from 'react';
import { Button, Select, TextField, InputLabel, MenuItem ,FormControl} from '@mui/material'
import "./AddIssue.css";

function AddIssue() {
    const [addIssue, setAddIssue] = useState(true)
    const userSubmit = (formdata) => {
        console.log(formdata);
    };
    return (
        <div className='adds' >
            <div className='container mt-5'>
                
                <div className='card'>
                    <div className='card-body'>
                    <h3>ISSUE TRACKER</h3>
                        <div>
                            <Formik initialValues={{
                                title: '',
                                description: '',
                                assigns: '',
                                dates: '',
                                state: '',
                            }}
                                onSubmit={userSubmit}>
                                {({ values, handleChange, handleSubmit }) => (

                                    <form onSubmit={handleSubmit}>
                                        <TextField className='mt-3'  label="Title" id="title" onChange={handleChange} value={values.title} />
                                        <TextField className='mt-3' label="Description" id="description" onChange={handleChange} value={values.description} />
                                        <FormControl sx={{ m: 0, width: 420 , marginTop:3}}>
                                        <InputLabel id="assigns">Assign to</InputLabel>
                                        
                                        <Select
                                            labelId="assign-label"
                                            id="assigns"
                                            value={values.assigns}
                                            label="Assign to"
                                            onChange={handleChange}
                                            
                                        >
                                            <MenuItem value={10}>Tanushree</MenuItem>
                                            <MenuItem value={20}>Utkarsh</MenuItem>
                                            <MenuItem value={30}>Mahek</MenuItem>
                                        </Select>
                                        </FormControl>
                                    
                                        <TextField className='mt-3' type="date"  id="dates" onChange={handleChange} value={values.dates} />

                                        <FormControl sx={{ m: 0, width: 420 , marginTop:3}}>
                                        <InputLabel id="state">Status</InputLabel>
                                        <Select
                                            labelId="status"
                                            id="state"
                                            value={values.status}
                                            label="Status"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Completed</MenuItem>
                                            <MenuItem value={20}>Not Completed</MenuItem>
                                            
                                        </Select>
                                        </FormControl>
                                        <Button className='w-100 mt-3' variant='contained' type='submit'>Submit</Button>



                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddIssue;
