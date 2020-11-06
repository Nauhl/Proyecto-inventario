import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

export default function RoomList(props) {

    const { allRooms, editRooms, handleClickEditRoom, handleClickDeleteRoom } = props;

    return allRooms && allRooms.length > 0 ? (
        <div className={styles.container}>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Pictures</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allRooms.map(room => (
                        <tr key={room._id}>
                            <td>{room.name}</td>
                            <td>{room.description}</td>
                            <td><img src={room.pictures} className="img-fluid" alt="" /></td>
                            <td>{room.location}</td>
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
    ) : (
            <>
                <div className="spinner-border"></div>
            </>
        );
}