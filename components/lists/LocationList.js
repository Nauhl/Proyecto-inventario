import React from 'react';
import styles from "../../styles/Home.module.css";

export default function LocationList(props) {

    const { allLocations, handleClickEditLocation, handleClickDeleteLocation } = props;

    return allLocations && allLocations.length > 0 ? (
        <table className={styles.main, "table"} >
            <thead className={styles.textItems3}>
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
                        <td className={styles.textItems3}>{location.name}</td>
                        <td className={styles.textItems3}>{location.description}</td>
                        {/* className={styles.textItems3} <td>{location.status}</td> */}
                        <td className={styles.textItems3}>{location.address ? location.address.streetNumber : ""}</td>
                        <td className={styles.textItems3}>{location.address ? location.address.street : ""}</td>
                        {/* className={styles.textItems3} <td>{location.address ? location.address.street2 : ""}</td> */}
                        <td className={styles.textItems3}>{location.address ? location.address.city : ""}</td>
                        <td className={styles.textItems3}>{location.address ? location.address.province : ""}</td>
                        {/* className={styles.textItems3} <td>{location.address ? location.address.country : ""}</td> */}
                        <td className={styles.textItems3}>

                            <button type="button" className="btn btn-outline-warning"
                                onClick={() => handleClickEditLocation(location._id)}
                            ><i className="fas fa-pen-square"></i>&nbsp;Edit</button>

&nbsp;
                            <button type="button" className="btn btn-outline-danger"
                                onClick={() => handleClickDeleteLocation(location)} ><i className="fas fa-trash-alt"></i>&nbsp;Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
            <div className="spinner-border "></div>
        );
}