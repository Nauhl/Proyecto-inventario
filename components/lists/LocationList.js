import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Card } from '@material-ui/core';
import { CardColumns } from 'reactstrap';

export default function LocationList(props) {

    const [loading, setLoading] = useState(true);

    const { allLocations, handleClickEditLocation, Borrar } = props;

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

                <div className={styles.container}>
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allLocations.map(location => (
                                <tr key={location._id}>
                                    <td>{location.name}</td>
                                    <td>{location.description}</td>
                                    <td>{location.pictures}
                                    <Card key={location._id}>
                                            <div className="card bg-dark text-white">
                                                <img size="16by9" src={location.pictures} className="card-img" alt="..."></img>
                                                <div className="card-img-overlay">
                                                </div>
                                            </div>
                                        </Card></td>

                                    <td>{Object.keys(location.isActive).length}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning"
                                            data-toggle="modal" data-target="#EditLocation"
                                            onClick={() => handleClickEditLocation(location._id)}
                                        >Edit</button>
                                        <button className="btn btn-danger" onClick={() => Borrar(location._id)}>Delete</button>
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

/*
                                    <td>{Object.keys(location.address,
                                    {streetNumber, street, street2, city, province, country})}</td>*/

/*<div className={styles.main}>
<h2>Location</h2>
</div>
<br />*/