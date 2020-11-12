//import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
//import Modal from "react-bootstrap/Modal";

export default function ConditionList(props) {

    const { allConditionsState, showElements, handleClickAddCondition, handleClickEditCondition, DeleteConditionOnClick, handleClickDeleteCondition
        , openn, handleClose } = props;

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
                    <tr key={condition._id}>
                        <td>{condition.name}</td>
                        <td>{condition.description}</td>
                        <td>

                            {showElements ?
                                <button className="btn btn-outline-success"
                                    onClick={() => handleClickAddCondition()}>
                                    New condition
                                </button>
                                :
                                null
                            }

                            <button type="button" className="btn btn-outline-warning"
                                onClick={() => handleClickEditCondition(condition._id)}
                            >Edit</button>
                            <button type="button" className="btn btn-outline-danger" //data-toggle="modal" data-target="#DeleteModal"
                                onClick={() => handleClickDeleteCondition(condition._id)} >Delete</button>
                        </td>

                        {/* <Modal show={openn} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Be Careful
                                    </Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        ARE YOU SURE YOU WANT TO DELETE THIS ITEM ?
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <tbody>
                                            <button className="btn btn-dark" variant="secondary" onClick={handleClose}>
                                                Cancel
                                            </button>

                                            <button type="button" className="btn btn-danger" onClick={() => DeleteConditionOnClick(condition._id)}>
                                                <i className="fa fa-database"></i> &nbsp; Delete</button>
                                            
                                        </tbody>
                                    </Modal.Footer>
                                </Modal> */}
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
            <div className="spinner-border bg-success"></div>
        );
}