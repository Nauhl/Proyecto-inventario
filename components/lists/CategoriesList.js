import React from "react";
import styles from '../../styles/Home.module.css';
import Modal from "react-bootstrap/Modal";

export default function CategoriesList(props) {

    const { allCategories, handleClickEditCategory, DeleteCategoryOnClick, handleClickDeleteCategory 
        , openn, handleClose } = props;

    return allCategories && allCategories.length > 0 ? (
        <>
        <div className={styles.container}>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>SubCategories</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allCategories.map(category => (
                        <tr key={category._id}>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            {/* <td>{Object.keys(category.subCategories).length} ({category.subCategories[0].name}) </td> */}
                            <td>{category.subCategories && category.subCategories[0] ? `${Object.keys(category.subCategories).length} (${category.subCategories[0].name})` : 0}</td>
                            {/* <td>{category.subCategories ? category.subCategories.name : ""}</td> */}
                            <td>
                                <button type="button" className="btn btn-warning"
                                    onClick={() => handleClickEditCategory(category._id)}>Edit</button>
                                        &nbsp;
                                    <button type="button" className="btn btn-danger" //data-toggle="modal" data-target="#DeleteModal"
                                    onClick={() => handleClickDeleteCategory(category._id)}>
                                    Delete
                                    </button>
                            </td>
                        </tr>
                    )
                    )}
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
                    {allCategories.map(category => (
                        <tr key={category._id}>
                            <td>
                                <button className="btn btn-dark" variant="secondary" onClick={handleClose}>
                                    Cancel
                                </button>

                                <button type="button" className="btn btn-danger" onClick={() => DeleteCategoryOnClick(category._id)}>
                                    <i className="fa fa-database"></i> &nbsp; Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Modal.Footer>
            </Modal>
        </>
    ) : (
            <div className="spinner-border"></div>
        );
}
//&nbsp;

/*  Boton para borrar

                                    <button type="button" className="btn btn-danger"
                                        onClick={() => DeleteCategoryOnClick(category._id)} >Delete</button>

                                        */


/*
<td>
                            <div className="modal fade" id="DeleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                Are you sure you want to delete this Category ?
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-danger"
                                                    onClick={() => DeleteCategoryOnClick(category._id)} >Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </td>
                                */

/*
<td><img src={category.pictures} className="img-fluid" alt="" /></td>
*/

// && category.subCategories[0] ? `${Object.keys(category.subCategories).length} (${category.subCategories[0].name})` : 0