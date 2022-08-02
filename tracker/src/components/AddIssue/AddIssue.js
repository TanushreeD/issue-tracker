import { Formik } from "formik"
import { useState } from "react"
import { Button, Select, TextField, InputLabel, MenuItem, FormControl } from "@mui/material"
import "./AddIssue.css"

function AddIssue() {
  const [addIssue, setAddIssue] = useState(true)
  const userSubmit = (formdata) => {
    console.log(formdata)
  }
  return (
    <div className="adds">
      <div className="container mt-5 contain">
        <div className="card cards">
          <div className="card-body bg-transparent">
            <h3>ISSUE RECORD FORM</h3>
            <div>
              <Formik
                initialValues={{
                  title: "",
                  type: "",
                  assingedTo: "",
                  assingedBy: "",
                  createdAt: "",
                  status: "",
                  closed: "",
                  team: "",
                  org: "",
                }}
                onSubmit={userSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField className="mt-3" label="Issue Title" id="title" onChange={handleChange} value={values.title} />
                    <TextField className="mt-3" label="Description" id="type" onChange={handleChange} value={values.type} />
                    <FormControl sx={{ m: 0, width: 420, marginTop: 3 }}>
                      <InputLabel id="assignedTo">Opened by</InputLabel>

                      <Select labelId="assign-label" id="assingedTo" value={values.assingedTo} label="Assign to" onChange={handleChange}>
                        <MenuItem value={10}>Tanushree</MenuItem>
                        <MenuItem value={20}>Utkarsh</MenuItem>
                        <MenuItem value={30}>Mahek</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField className="mt-3" type="date" id="createdAt" onChange={handleChange} value={values.createdAt} />
                    <TextField className="mt-3" label="organisation" id="org" onChange={handleChange} value={values.org} />

                    <FormControl sx={{ m: 0, width: 420, marginTop: 3 }}>
                      <InputLabel id="status">Status</InputLabel>
                      <Select labelId="status" id="status" value={values.status} label="Status" onChange={handleChange}>
                        <MenuItem value={10}>New</MenuItem>
                        <MenuItem value={20}>old</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl sx={{ m: 0, width: 420, marginTop: 3 }}>
                      <InputLabel id="closed">Close</InputLabel>
                      <Select labelId="closed" id="closed" value={values.closed} label="closed" onChange={handleChange}>
                        <MenuItem value={10}>yes</MenuItem>
                        <MenuItem value={20}>no</MenuItem>
                      </Select>
                    </FormControl>
                    <Button className="w-100 mt-3" variant="contained" type="submit">
                      Submit
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddIssue
