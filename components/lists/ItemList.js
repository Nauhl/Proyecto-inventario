import React from "react";
import styles from '../../styles/Home.module.css';
import Modal from "react-bootstrap/Modal";

export default function ItemList(props) {

    const { allItems, handleClickEditItem, handleClickDeleteItem,
        DeleteItemOnClick, openn, handleClose } = props;

    return allItems && allItems.length > 0 ? (
        <>
        <div className={styles.container}>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Room</th>
                        <th>Category</th>
                        <th>Condition</th>
                        <th>Estimated value</th>
                        <th>Model</th>
                        <th>Brand</th>
                        <th>Seral Number</th>
                        <th>Notes</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allItems.map(item => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.location ? item.location.name : ""}</td>
                            <td>{item.room ? item.room.name : ""}</td>
                            <td>{item.category ? item.category.name : ""}</td>
                            <td>{item.condition ? item.condition.name : ""}</td>
                            <td>{item.estimatedValue}</td>
                            <td>{item.model}</td>
                            <td>{item.brand}</td>
                            <td>{item.serialNumber}</td>
                            <td>{item.notes}</td>
                            <td>{item.purchaseInfo ? item.purchaseInfo.cost : ""}</td>
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


        <Modal show={openn} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Be Careful
        </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ARE YOU SURE YOU WANT TO DELETE THIS ITEM ?
        </Modal.Body>

                <Modal.Footer>
                    <tbody>
                    {allItems.map(item => (
                        <tr key={item._id}>
                            <td>
                                <button className="btn btn-dark" variant="secondary" onClick={handleClose}>
                                    Cancel
                                </button>

                                <button type="button" className="btn btn-danger" onClick={() => DeleteItemOnClick(item._id)}>
                                    <i className="fa fa-database"></i> &nbsp; Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Modal.Footer>
            </Modal>
        </>
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

/*
<td><img src={item.pictures} className="img-fluid" alt="" /></td>
                            */