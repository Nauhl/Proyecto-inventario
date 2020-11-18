import React from "react";

export default function ItemList(props) {

    const { allItems, showElements, handleClickAddItem, handleClickEditItem, handleClickDeleteItem,
        DeleteItemOnClick, openn, handleClose } = props;

    return allItems && allItems.length > 0 ? (
        <table className="table table-bordered table-striped table-responsive" >
            <thead>
                <tr className="table-primary">
                    <th>Name</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Room</th>
                    <th>Category</th>
                    <th>Condition</th>
                    {/* <th>Estimated value</th> */}
                    <th>Model</th>
                    <th>Brand</th>
                    {/* <th>Seral Number</th> */}
                    <th>Notes</th>
                    {/* <th>Cost</th> */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {allItems.map(item => (
                    <tr key={item._id} className="bg-secondary">
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.location ? item.location.name : ""}</td>
                        <td>{item.room ? item.room.name : ""}</td>
                        <td>{item.category ? item.category.name : ""}</td>
                        <td>{item.condition ? item.condition.name : ""}</td>
                        {/* <td>{item.estimatedValue}</td> */}
                        <td>{item.model}</td>
                        <td>{item.brand}</td>
                        {/* <td>{item.serialNumber}</td> */}
                        <td>{item.notes}</td>
                        {/* <td>{item.purchaseInfo ? item.purchaseInfo.cost : ""}</td> */}
                        <td>

                            <button type="button" className="btn btn-outline-warning"
                                onClick={() => handleClickEditItem(item._id)}
                            >Edit</button>
                            <button type="button" className="btn btn-outline-danger"
                                onClick={() => handleClickDeleteItem(item)} >Delete</button>
                        </td>
                    </tr>
                ))} 
            </tbody>
        </table>
    ) : (
            <div className="spinner-border bg-success"></div>
        );
}