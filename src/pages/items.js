import styles from '../../styles/Home.module.css';
//import fetch from 'isomorphic-unfetch';
import React, { useEffect, useState } from 'react';
import { getAllItems, getItem } from "../../src/lib/ctrlItem";
import Button from "react-bootstrap/Button";

export default function ItemPage() {

    const [allItems, setAllItems] = React.useState([]);

    React.useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        getAllItems().then(items => {
            setAllItems(items);
        });
    }

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
};