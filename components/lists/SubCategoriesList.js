import React from "react";
import styles from '../../styles/Home.module.css';
import Modal from "react-bootstrap/Modal";

export default function SubCategoriesList(props) {

    const { openn, handleClose, allSubCategories, handleClickEditSubCategory, handleClickDeleteSubCategory, DeleteSubCategoryOnClick } = props;

    return allSubCategories && allSubCategories.length > 0 ? (
        <>
        <div className={styles.container}>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allSubCategories.map(subCategory => (
                        <tr key={subCategory._id}>
                            <td >{subCategory.name}</td>
                            <td >{subCategory.description}</td>
                            <td>
                                <button type="button" className="btn btn-warning"
                                    onClick={() => handleClickEditSubCategory(subCategory._id)}>Edit</button>
                                        &nbsp;
                                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#DeleteModal"
                                    onClick={() => handleClickDeleteSubCategory(subCategory._id)}>
                                    Delete
                                    </button>
                            </td>

                            <td>
                                    <div className="modal fade" id="DeleteModal" >
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Be Careful</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>

                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                ARE YOU SURE YOU WANT TO DELETE THIS ITEM ?
                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal" >Close</button>
                                                </div>
                                                <button type="button" className="btn btn-danger" onClick={() => DeleteSubCategoryOnClick(subCategory._id)} data-dismiss="modal">
                                                    <i className="fa fa-database"></i> &nbsp; Delete</button>

                                            </div>
                                        </div>
                                    </div>
                                </td>

                        </tr>
                        //)
                    ))}
                </tbody>
            </table>
        </div>
        

        {/* <Modal show={openn} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Be Careful
        </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ARE YOU SURE YOU WANT TO DELETE THIS ITEM ?
        </Modal.Body>

                <Modal.Footer>
                    <tbody>
                    {allSubCategories.map(subCategory => (
                        <tr key={subCategory._id}>
                            <td>
                                <button className="btn btn-dark" variant="secondary" onClick={handleClose}>
                                    Cancel
                                </button>

                                <button type="button" className="btn btn-danger" onClick={() => DeleteSubCategoryOnClick(subCategory._id)}>
                                    <i className="fa fa-database"></i> &nbsp; Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Modal.Footer>
            </Modal> */}
        </>

    ) : (
            <div className="spinner-border"></div>
        );
}