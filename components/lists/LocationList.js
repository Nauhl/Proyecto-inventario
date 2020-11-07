import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";

export default function LocationList(props) {

    const { allLocations, handleClickEditLocation, handleClickDeleteLocation, newLocation, DeleteLocationOnClick
        , openn, handleClose } = props;

    return allLocations && allLocations.length > 0 ? (
        <>
            <div className={styles.container}>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Street-Number</th>
                            <th>Street</th>
                            <th>Street-2</th>
                            <th>City</th>
                            <th>Province</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allLocations.map(location => (
                            <tr key={location._id}>
                                <td>{location.name}</td>
                                <td>{location.description}</td>
                                <td>{location.status}</td>
                                <td>{location.address.streetNumber}</td>
                                <td>{location.address.street}</td>
                                <td>{location.address.street2}</td>
                                <td>{location.address.city}</td>
                                <td>{location.address.province}</td>
                                <td>{location.address.country}</td>
                                <td>
                                    <button type="button" className="btn btn-warning"
                                        onClick={() => handleClickEditLocation(location._id)}
                                    >Edit</button>
                                    <button type="button" className="btn btn-danger"
                                        onClick={() => handleClickDeleteLocation(location._id)} >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={openn} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Be Careful
        </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ARE YOU SURE YOU WANT TO DELETE THIS ITEM ?
        </Modal.Body>

                <Modal.Footer>
                    <tbody>
                    {allLocations.map(location => (
                        <tr key={location._id}>
                            <td>
                                <button className="btn btn-dark" variant="secondary" onClick={handleClose}>
                                    Cancel
                                </button>

                                <button type="button" className="btn btn-danger" onClick={() => DeleteLocationOnClick(location._id)}>
                                    <i className="fa fa-database"></i> &nbsp; Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Modal.Footer>
            </Modal>
            </>
    ) : (
            <>
                <div className="spinner-border"></div>
            </>
        );

}

/**********    Linea 86   ********/
/*
<Card >
                                            <div className="card bg-dark text-white">
                                                <img size="16by9" src={location.pictures} className="card-img" alt="..."></img>
                                                <div className="card-img-overlay">
                                                </div>
                                            </div>
                                        </Card> */
/**********    Linea 89   ********/
/*
<td>{Object.keys(location.isActive).length}</td> */

//  Linea  76
/* <th>Status</th> */


/*<div className="modal fade" id="DeleteLocation" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Delete Category</h5>
                <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                &times;
                            </button>
            </div>
            <button type="button" className="btn btn-danger" onClick={() => Borrar(location._id)}>
                            ARE YOU SURE YOU WANT TO DELETE THIS ITEM ?
                            </button>
        </div>
    </div>*/