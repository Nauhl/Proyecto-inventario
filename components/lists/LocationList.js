import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Card } from '@material-ui/core';
import { CardColumns } from 'reactstrap';

export default function LocationList(props) {

    const [loading, setLoading] = useState(true);

    const { allLocations, handleClickEditLocation, Borrar, newLocation } = props;

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
                                        
                                    </td>

                                    
                                    <td>
                                        <button type="button" className="btn btn-warning"
                                            onClick={() => handleClickEditLocation(location._id)}
                                        >Edit</button>
                                        <button type="button" className="btn btn-danger"
                                            onClick={() => Borrar(location._id)} >Delete</button>
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