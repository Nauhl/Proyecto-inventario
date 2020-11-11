import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";

export default function ConditionList(props) {

    const { allConditionsState, handleClickEditCondition, DeleteConditionOnClick, handleClickDeleteCondition
        , openn, handleClose } = props;

    return allConditionsState && allConditionsState.length > 0 ? (
        <>
            <div className={styles.container}>
                <table className="table table-bordered" >
                    <thead className={styles.table}>
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
                                    <button type="button" className="btn btn-warning"
                                        onClick={() => handleClickEditCondition(condition._id)}
                                    >Edit</button>
                                    <button type="button" className="btn btn-danger" //data-toggle="modal" data-target="#DeleteModal"
                                        onClick={() => handleClickDeleteCondition(condition._id)} >Delete</button>
                                </td>

                                    {/* <div className="modal fade" id="DeleteModal" >
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Be Careful</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>

                                                
                                                <div className="modal-body">
                                                ARE YOU SURE YOU WANT TO DELETE THIS ITEM ?
                                                </div>

                                                
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal" >Close</button>
                                                </div>
                                                <button type="button" className="btn btn-danger" onClick={() => DeleteConditionOnClick(condition._id)} >
                                                    <i className="fa fa-database"></i> &nbsp; Delete</button>

                                            </div>
                                        </div>
                                    </div> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    ) : (
            <div className="spinner-border"></div>
        );
}