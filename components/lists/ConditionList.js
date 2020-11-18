import React, { useState, useEffect } from 'react';
//import Modal from "react-bootstrap/Modal";

export default function ConditionList(props) {

    const { allConditionsState, handleClickEditCondition, handleClickDeleteCondition } = props;

    return allConditionsState && allConditionsState.length > 0 ? (
        <table className="table table-striped" >
            <thead className="table-primary">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {allConditionsState.map(condition => (
                    <tr key={condition._id} className="bg-secondary">
                        <td>{condition.name}</td>
                        <td>{condition.description}</td>
                        <td>

                            <button type="button" className="btn btn-outline-warning"
                                onClick={() => handleClickEditCondition(condition._id)}
                            >Edit</button>
                            <button type="button" className="btn btn-outline-danger" 
                                onClick={() => handleClickDeleteCondition(condition)} >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
            <div className="spinner-border bg-success"></div>
        );
}