import React from "react";
import styles from "../../styles/Home.module.css";

export default function ItemList(props) {

    const { allItems, showElements, handleClickAddItem, handleClickEditItem, handleClickDeleteItem,
        DeleteItemOnClick, openn, handleClose } = props;

    return allItems && allItems.length > 0 ? (
        <main>


            <table className={styles.main, "table  table-responsive"} >
                <thead className={styles.textItems3}>
                    <tr className="table-primary" >
                        <th scope="row">Name</th>
                        <th scope="row">Description</th>
                        <th scope="row">Location</th>
                        <th scope="row">Room</th>
                        <th scope="row">Category</th>
                        <th scope="row">Condition</th>
                        {/* scope="row" <th>Estimated value</th> */}
                        <th scope="row">Model</th>
                        <th scope="row">Brand</th>
                        {/* scope="row" <th>Seral Number</th> */}
                        {/* scope="row" <th>Notes</th> */}
                        {/* scope="row" <th>Cost</th> */}
                        <th scope="row">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allItems.map(item => (
                        <tr key={item._id} className="bg-gray">
                            <td className={styles.textItems3}>{item.name}</td>
                            <td className={styles.textItems3}>{item.description}</td>
                            <td className={styles.textItems3}>{item.location ? item.location.name : ""}</td>
                            <td className={styles.textItems3}>{item.room ? item.room.name : ""}</td>
                            <td className={styles.textItems3}>{item.category ? item.category.name : ""}</td>
                            <td className={styles.textItems3}>{item.condition ? item.condition.name : ""}</td>
                            {/* className={styles.textItems3} <td>{item.estimatedValue}</td> */}
                            <td className={styles.textItems3}>{item.model}</td>
                            <td className={styles.textItems3}>{item.brand}</td>
                            {/* className={styles.textItems3} <td>{item.serialNumber}</td> */}
                            {/* className={styles.textItems3} <td>{item.notes}</td> */}
                            {/* className={styles.textItems3} <td>{item.purchaseInfo ? item.purchaseInfo.cost : ""}</td> */}
                            <td className={styles.textItems3}>

                                <button type="button" className="btn btn-outline-warning"
                                    onClick={() => handleClickEditItem(item._id)}
                                ><i className="fas fa-pen-square"></i>&nbsp;Edit</button>
                                &nbsp;
                                
                                <button type="button" className="btn btn-outline-danger"
                                    onClick={() => handleClickDeleteItem(item)} > <i className="fas fa-trash-alt"></i>&nbsp;Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    ) : (
            <div className="spinner-border "></div>
        );
}