import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LocationList(props) {

    const [loading, setLoading] = useState(true);

    const { allLocations, editLocation } = props;

    useEffect(() => {
        setTimeout(() => {
            setLoading();
        }, 3000);
    }, [])

    const loader = () => {
        let filas = [];
        for (let index = 0; index < 10; index++) {
            filas.push(
                <tr key={index}>
                    <td><Skeleton /></td>
                    <td><Skeleton /></td>
                    <td><Skeleton /></td>
                    <td><Skeleton /></td>
                    <td><Skeleton /></td>
                    <td><Skeleton /></td>
                    <td>
                        <Skeleton />
                    </td>
                </tr>
            );
        }

        return allLocations && allLocations.length > 0 ? (
            <>
                <SkeletonTheme color="gray" highlightColor="white">
                    <div className={styles.container}>
                        <table className="table table-bordered" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Picture</th>
                                    <th>Status</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filas}
                            </tbody>
                        </table>
                    </div>
                </SkeletonTheme>
            </>
        ) : (
                <>
                </>
            );
    }

    if (loading) {
        return (
            loader()
        )
    }
    else {
        return allLocations && allLocations.length > 0 ? (
            <>
                <div className={styles.main}>
                    <h2>Location</h2>
                </div>
                <br />
                <div className={styles.container}>
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Picture</th>
                                <th>Status</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allLocations.map(location => (
                                <tr key={location._id}>
                                    <td>{location.name}</td>
                                    <td>{location.description}</td>
                                    <td>{Object.keys(location.isActive).length}</td>
                                    <td>{location.pictures}</td>
                                    <td>{location.status}</td>
                                    <td>{Object.keys(location.address).join(location.streetNumber),
                                        (location.street), (location.street2), (location.city), (location.province), (location.country)}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#staticBackdrop" >Edit</button>
                            &nbsp;
                            <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        ) : (
                <>
                    <div className="spinner-border"></div>
                </>
            );
    }
}