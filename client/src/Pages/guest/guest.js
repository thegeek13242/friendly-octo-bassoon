import React from "react";
import "./guest.css";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Guest = () => {
  const [txnId, setTxnId] = useState("");
  return (
    <>
      {/* a form which asks for transactionID and Organization Name */}
      <div className="guest-form">
        <div className="guest-form-heading">
          <h1>Degree and Transcript Verification Portal</h1>
        </div>

        <form>
          <TextField
            fullWidth
            id="txnID"
            name="txnID"
            label="Transaction ID"
            variant="outlined"
            sx={{ margin: "1rem" }}
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="orgName"
            name="orgName"
            label="Organization Name"
            variant="outlined"
            sx={{ margin: "1rem" }}
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // error={formik.touched.password && Boolean(formik.errors.password)}
            // helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            sx={{ margin: "1rem", width: "10rem", marginLeft: "40%" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Guest;
