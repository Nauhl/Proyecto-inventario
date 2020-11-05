import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Card } from '@material-ui/core';
import { CardColumns } from 'reactstrap';

export default function RoomList(props) {

    const [loading, setLoading] = useState(true);

    const { allRooms, editRooms, handleClickEditRoom, handleClickDeleteRoom  } = props;


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
                    <td>
                        <Skeleton />
                    </td>
                </tr>
            );
        }

        return allRooms && allRooms.length > 0 ? (

            <>
                <SkeletonTheme color="gray" highlightColor="white">
                    <div className={styles.container}>
                        <table className="table table-bordered" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Pictures</th>
                                    <th>Location</th>
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
        return allRooms && allRooms.length > 0 ? (
            <>
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
            </>
        ) : (
                <>
                    <div className="spinner-border"></div>
                </>
            );
    }
}