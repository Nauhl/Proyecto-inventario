import { getAllSubCategories } from "../../src/lib/ctrlSubCategory";
import React, { useEffect, useState } from 'react';
import updateCategory from "../../src/lib/ctrlCategory";
import styles from "../../styles/Home.module.css";

const ModalCategory = props => {

    const elementType = "category";
    const { handleChange, createNewCategory, newCategory, allSubCategories, open, deleteCategories } = props;

    return (
        <>
            <div className={styles.main}>
                <h2>Categories</h2>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#newCategory"
                >New Category</button>
            </div>
            <br />

            { /* Modal create */}
            <div className="modal fade" id="newCategory" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Categories</h2>
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

                                    <label>Category</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        placeholder="Insert category"
                                        value={newCategory.name}
                                        onChange={handleChange("name")}
                                    />
                                    <br />

                                    <label>Description</label>
                                    <textarea
                                        className="form-control"
                                        type="text"
                                        name="description"
                                        placeholder="Insert description"
                                        value={newCategory.description}
                                        onChange={handleChange("description")}
                                    />
                                    <br />

                                    <label>New Image</label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        name="pictures"
                                        placeholder="Insert new Picture" 
                                        value={newCategory.pictures}
                                        onchange={handleChange("pictures")}/>
                                    <br />

                                    <br />&nbsp;
                                    </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" >Cancel</button>
                            <button type="button" className="btn btn-success" onClick={createNewCategory}>
                                Save</button>
                        </div>
                    </div>
                </div>
            </div>

            { /* Modal edit */}

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit Category</h5>
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

                                <label>Category</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="category"
                                    placeholder={newCategory.name}
                                    /*value={newCategory.name}
                                    onChange={handleChange("name")} *//>
                                <br />

                                <label>Description</label>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    name="description"
                                    placeholder={newCategory.description}
                                    /*value={newCategory.description}
                                    onChange={handleChange("description")} *//>
                                <br />

                                <label>SubCategory</label>
                                <input
                                    className="form-control"
                                    name="text"
                                    placeholder="Insert new subCategory"
                                /*value={newCategory.subCategories || []}
                                onChange={handleChange("subCategories")}
                                input={<Input />}
                                MenuProps={MenuProps}
                            >
                                <MenuItem value="" disabled>Select subCategory(s)</MenuItem>
                                {allSubCategories.map(subCategory => (
                                    <MenuItem key={subCategory._id} value={subCategory._id}>{subCategory.name}</MenuItem>
                                ))}
                                /</input>*/
                                />
                                <br />&nbsp;

                                <label>New Image</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    name="pictures"
                                    placeholder="Insert new Picture" />
                                <br />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success" ><i className="fa fa-database">
                            </i> &nbsp; Save</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal DELETE */}

            <div className="modal fade" id="DELETEbtn" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Delete Category</h5>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                &times;
                            </button>
                        </div>
                        <button type="button" className="btn btn-danger" onClick={deleteCategories}>
                            ARE YOU SURE YOU WANT TO DELETE {elementType.id} ?
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
};


export default ModalCategory;