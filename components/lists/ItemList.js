import React from "react";

export default function ItemList(props) {

    const { allItems, showElements, handleClickAddItem, handleClickEditItem, handleClickDeleteItem,
        DeleteItemOnClick, openn, handleClose } = props;

    return allItems && allItems.length > 0 ? (
        <main>


            <table className="table table-striped table-responsive" >
                <thead>
                    <tr className="table-primary">
                        <th scope="row">Name</th>
                        <th scope="row">Description</th>
                        {/* scope="row" <th>Location</th> */}
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
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            {/* <td>{item.location ? item.location.name : ""}</td> */}
                            <td>{item.room ? item.room.name : ""}</td>
                            <td>{item.category ? item.category.name : ""}</td>
                            <td>{item.condition ? item.condition.name : ""}</td>
                            {/* <td>{item.estimatedValue}</td> */}
                            <td>{item.model}</td>
                            <td>{item.brand}</td>
                            {/* <td>{item.serialNumber}</td> */}
                            {/* <td>{item.notes}</td> */}
                            {/* <td>{item.purchaseInfo ? item.purchaseInfo.cost : ""}</td> */}
                            <td>

                                <button type="button" className="btn btn-outline-warning"
                                    onClick={() => handleClickEditItem(item._id)}
                                ><i class="fas fa-pen-square"></i>&nbsp;Edit</button>
                                <button type="button" className="btn btn-outline-danger"
                                    onClick={() => handleClickDeleteItem(item)} > <i class="fas fa-trash-alt"></i>&nbsp;Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    ) : (
            <div className="spinner-border bg-success"></div>
        );
}