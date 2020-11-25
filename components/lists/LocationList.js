import React from 'react';

export default function LocationList(props) {

    const { allLocations, handleClickEditLocation, handleClickDeleteLocation } = props;

    return allLocations && allLocations.length > 0 ? (
        <table className="table table-responsive table-striped" >
            <thead>
                <tr className="table-primary">
                    <th scope="row">Name</th>
                    <th scope="row">Description</th>
                    {/* scope="row" <th>Status</th> */}
                    <th scope="row">Street-Number</th>
                    <th scope="row">Street</th>
                    {/* scope="row" <th>Street-2</th> */}
                    <th scope="row">City</th>
                    <th scope="row">Province</th>
                    {/* scope="row" <th>Country</th> */}
                    <th scope="row">Action</th>
                </tr>
            </thead>
            <tbody>
                {allLocations.map(location => (
                    <tr key={location._id} className="bg-gray">
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

                            <button type="button" className="btn btn-outline-warning"
                                onClick={() => handleClickEditLocation(location._id)}
                            >Edit</button>
                            <button type="button" className="btn btn-outline-danger"
                                onClick={() => handleClickDeleteLocation(location)} >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
            <div className="spinner-border bg-success"></div>
        );
}