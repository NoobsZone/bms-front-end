import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function BasicTextFields() {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Category" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Brand Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Price" variant="outlined" />
          {/* <TextField id="outlined-basic" variant="outlined" type="file" /> */}
          <label>
            <p>Image:</p>
            <input type="file" />
          </label>
        </Box>
        {/* <button type="submit">Submit</button> */}
        {/* <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Category" variant="outlined" />
        <TextField id="outlined-basic" label="Brand Name" variant="outlined" />
        <TextField id="outlined-basic" label="Price" variant="outlined" />
        <TextField id="outlined-basic" variant="outlined" type="file" /> */}

        {/* <Field name="firstName" type="text" as ={TextField} label="Category" variant="outlined" />
      <ErrorMessage name="firstName" />

    
      <Field name="lastName" as ={TextField} type="text" label="Category" variant="outlined"/>
      <ErrorMessage name="lastName" />

     
      <Field as ={TextField}  name="email" label="Category" variant="outlined" type="email" />
      <ErrorMessage name="email" />

      <button type="submit">Submit</button> */}
      </Form>
    </Formik>
  );
}
