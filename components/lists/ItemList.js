import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function ItemList(props) {

    const [loading, setLoading] = useState(true);

    const { allItems, editItem } = props;

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
                    <td><Skeleton /></td>
                    <td><Skeleton /></td>
                    <td><Skeleton /></td>
                    <td><Skeleton /></td>
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

        return allItems && allItems.length > 0 ? (
            <>
                <SkeletonTheme color="gray" highlightColor="white">
                    <div className={styles.container}>
                        <table className="table table-bordered" >
                            <thead>
                                <tr><th>Name</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Pictures</th>
                                    <th>Location</th>
                                    <th>Room</th>
                                    <th>Category</th>
                                    <th>Condition</th>
                                    <th>Estimated Value</th>
                                    <th>Model</th>
                                    <th>Brand</th>
                                    <th>Serial Number</th>
                                    <th>Notes</th>
                                    <th>PurchaseInfo</th>
                                    <th>purchaseDate</th>
                                    <th>Cost</th>
                                    <th>Waranty</th>
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
        return allItems && allItems.length > 0 ? (
            <>
                <div className={styles.main}>
                    <h2>Items</h2>
                </div>
                <br />
                <div className={styles.container}>
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Pictures</th>
                                <th>Location</th>
                                <th>Room</th>
                                <th>Category</th>
                                <th>Condition</th>
                                <th>Estimated Value</th>
                                <th>Model</th>
                                <th>Brand</th>
                                <th>Serial Number</th>
                                <th>Notes</th>
                                <th>PurchaseInfo</th>
                                <th>purchaseDate</th>
                                <th>Cost</th>
                                <th>Waranty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allItems.map(item => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{Object.keys(item.isActive).length}</td>
                                    <td>{item.pictures}</td>
                                    <td>{item.location}</td>
                                    <td>{item.room}</td>
                                    <td>{item.category}</td>
                                    <td>{item.condition}</td>
                                    <td>{item.estimatedValue}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.serialNumber}</td>
                                    <td>{item.notes}</td>
                                    <td>{item.purchaseInfo}</td>
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