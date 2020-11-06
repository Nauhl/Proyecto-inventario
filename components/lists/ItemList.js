import React from "react";
import styles from '../../styles/Home.module.css';

export default function ItemList(props) {

    const { allItems, handleClickEditItem, handleClickDeleteItem } = props;

    return allItems && allItems.length > 0 ? (
        <div className={styles.container}>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        
                        <th>Location</th>
                        <th>Room</th>
                        <th>Category</th>
                        <th>Condition</th>

                        <th>Estimated value</th>
                        <th>Model</th>
                        <th>Brand</th>
                        <th>Seral Number</th>
                        <th>Notes</th>

                        <th>Purchase date</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allItems.map(item => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><img src={item.pictures} className="img-fluid" alt="" /></td>
                            
                            <td>{Object.keys(item.location)}</td>
                            <td>{Object.keys(item.room)}</td>
                            <td>{Object.keys(item.category)}</td>
                            <td>{Object.keys(item.condition)}</td>

                            <td>{item.estimatedValue}</td>
                            <td>{item.model}</td>
                            <td>{item.brand}</td>
                            <td>{item.serialNumber}</td>

                            <td>{item.notes}</td>
                            <td>{item.purchaseInfo.purchaseDate}</td>
                            <td>{item.purchaseInfo.cost}</td>
                            
                            <td>
                                <button type="button" className="btn btn-warning"
                                    onClick={() => handleClickEditItem(item._id)}
                                >Edit</button>
                                <button type="button" className="btn btn-danger"
                                    onClick={() => handleClickDeleteItem(item._id)} >Delete</button>
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

/*
<th>Location</th>
                        <th>Room</th>
                        <th>Category</th>
                        <th>Condition</th>
                        */

/*
<td>{item.location}</td>
                            <td>{item.room}</td>
                            <td>{item.category}</td>
                            <td>{item.condition}</td>
*/
