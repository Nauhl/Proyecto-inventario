import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";

export default function RoomList(props) {

    const { allRooms, editRooms, allLocations, handleClickEditRoom, handleClickDeleteRoom
        , DeleteRoomOnClick, openn, handleClose } = props;

    return allRooms && allRooms.length > 0 ? (
        <>
        <div className={styles.container}>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allRooms.map(room => (
                        <tr key={room._id}>
                            <td>{room.name}</td>
                            <td>{room.description}</td>
                            <td>{room.location ? room.location.name : ""}</td>
                            <td>
                                <button type="button" className="btn btn-warning"
                                    onClick={() => handleClickEditRoom(room._id)} >Edit</button>
                                &nbsp;
                                <button className="btn btn-danger"
                                    onClick={() => handleClickDeleteRoom(room._id)} >Delete</button>
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
                    {allRooms.map(room => (
                        <tr key={room._id}>
                            <td>
                                <button className="btn btn-dark" variant="secondary" onClick={handleClose}>
                                    Cancel
                                </button>

                                <button type="button" className="btn btn-danger" onClick={() => DeleteRoomOnClick(room._id)}>
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
