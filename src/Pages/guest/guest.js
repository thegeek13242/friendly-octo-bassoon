import React from "react";
import "./guest.css";
import { useEffect,useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Guest = () => {
    const [txnId,setTxnId] = useState("");
    return (
        <>
                {/* a form which asks for transactionID and Organization Name */}
                <div className="guest-form">
                    <div className="guest-form-heading">
                        <h1>Degree and Transcript Verification Portal</h1>
                    </div>
                
                    <form className="guest-form-body"> 
                        <div className="form-group">
                        <div className="form-group-heading">
                        <label>Transaction ID</label>
                        <input type="text" className="form-control" placeholder="Enter Transaction ID"/>
                        </div>
                        <div className="form-group-heading">
                        <label>Organization Name</label>
                        <input type="text" className="form-control" placeholder="Enter Organization Name" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                
                </div>
        </>
    );
};

export default Guest;

