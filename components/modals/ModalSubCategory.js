import React, { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.css";

const ModalSubCategory = props => {

    return (
        <>
        <div className={styles.main}>
                <h2>SubCategories</h2>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#newSubCategory" >New SubCategory</button>
                </div>
            <br />

            { /* Modal create */}
            
                <div className="modal fade" id="newSubCategory" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>SubCategories</h2>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                    &times;
                            </button>
                            </div>
                            <div className="modal-body">

                                <div className="card-body">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input
                                            className="form-control"
                                            readOnly
                                            type="text"
                                        />
                                        <br />

                                        <label>SubCategory</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Insert Subcategory"
                                        /*value={newCategory.name}
                                        onChange={handleChange("name")}*/
                                        />
                                        <br />

                                        <label>Description</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="description"
                                            placeholder="Insert description"
                                        /*value={newCategory.description}
                                        onChange={handleChange("description")}*/
                                        />
                                        <br />&nbsp;
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" >Cancel</button>
                                <button type="button" className="btn btn-success" >
                                    Edit</button>
                            </div>
                        </div>
                    </div>
                </div>

                { /* Modal edit */}
            
                <div className="modal fade" id="SubCategoriesEditBTN" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Edit SubCategory</h5>
                                <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                    &times;
                            </button>
                            </div>

                            <div className="card-body">
                                <div className="form-group">
                                    <label>ID</label>
                                    <input
                                        className="form-control"
                                        readOnly
                                        type="text"
                                        name="_id" />
                                    <br />

                                    <label>SubCategory</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="category"
                                        placeholder="Insert new SubCategory"
                                    /*value={newCategory.name}
                                    onChange={handleChange("name")} *//>
                                    <br />

                                    <label>Description</label>
                                    <textarea
                                        className="form-control"
                                        type="text"
                                        name="description"
                                        placeholder="Insert new description"
                                    /*value={newCategory.description}
                                    onChange={handleChange("description")} *//>
                                    <br />

                                    &nbsp;
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-success"><i className="fa fa-database">
                                </i> &nbsp; Save</button>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
};


export default ModalSubCategory;