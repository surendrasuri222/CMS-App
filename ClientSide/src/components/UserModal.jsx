import React from "react";

export default function UserModal() {
    return (
        <>
            <button type="button" className="btn btn-primary shadow - lg" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><i className="glyphicon glyphicon-plus"></i> New</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title d-flex justify-content-center" id="exampleModalLabel">Add New User</h3>

                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="fullName" className="col-form-label">Full Name:</label>
                                    <input type="text" className="form-control" id="fullName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age" className="col-form-label">Age:</label>
                                    <input type="number" className="form-control" id="age" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender" className="col-form-label">Gender:</label>
                                    <select className="form-control" id="gender">
                                        <option>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="interests" className="col-form-label">Interests:</label>
                                    <textarea className="form-control" id="interests" rows="5" placeholder="Enter your interests"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add User</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}