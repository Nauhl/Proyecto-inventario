//import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';

export default function LocationList(props) {

    const { allLocations, showElements, handleClickAddLocation, handleClickEditLocation, handleClickDeleteLocation, newLocation, DeleteLocationOnClick
        , openn, handleClose } = props;

    return allLocations && allLocations.length > 0 ? (
        <table className="table table-striped table-responsive" >
            <thead>
                <tr className="table-primary">
                    <th>Name</th>
                    <th>Description</th>
                    {/* <th>Status</th> */}
                    <th>Street-Number</th>
                    <th>Street</th>
                    {/* <th>Street-2</th> */}
                    <th>City</th>
                    <th>Province</th>
                    {/* <th>Country</th> */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {allLocations.map(location => (
                    <tr key={location._id}>
                        <td>{location.name}</td>
                        <td>{location.description}</td>
                        {/* <td>{location.status}</td> */}
                        <td>{location.address ? location.address.streetNumber : ""}</td>
                        <td>{location.address ? location.address.street : ""}</td>
                        {/* <td>{location.address ? location.address.street2 : ""}</td> */}
                        <td>{location.address ? location.address.city : ""}</td>
                        <td>{location.address ? location.address.province : ""}</td>
                        {/* <td>{location.address ? location.address.country : ""}</td> */}
                        <td>
                            {showElements ?
                                <button className="btn btn-outline-success"
                                    variant="success" size="sm"
                                    onClick={() => handleClickAddLocation()}>
                                    New location</button>
                                :
                                null
                            }

                            <button type="button" className="btn btn-outline-warning"
                                onClick={() => handleClickEditLocation(location._id)}
                            >Edit</button>
                            <button type="button" className="btn btn-outline-danger" //data-toggle="modal" data-target="#DeleteModal"
                                onClick={() => handleClickDeleteLocation(location._id)} >Delete</button>
                        </td>

                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
            <div className="spinner-border bg-success"></div>
        );

}