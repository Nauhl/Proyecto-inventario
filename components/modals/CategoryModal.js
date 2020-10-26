import { getAllSubCategories } from "../../src/lib/ctrlSubCategory";
import styles from '../../styles/Home.module.css';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, Select, MenuItem, Input } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    fillAvailable: {
        width: "-webkit-fill-available"
    }
}));

const ModalAddCategory = props => {

    const classes = useStyles();
    const elementType = "category";
    const { handleClose, open, allCategories, allSubCategories, handleChange,
        editMode, createNewCategory, cancelCreateNewCategory, newCategory } = props;

    return (

        <>
            <div className={styles.main}>
                <h2>Categories</h2>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#newCategory">New Category</button>
            </div>
            <br />

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
                                    placeholder="Insert new category" />
                                <br />

                                <label>Description</label>
                                <textarea
                                    className="form-control"
                                    type="text"
                                    name="description"
                                    placeholder="Insert new description" />
                                <br />

                                <label>SubCategory</label>
                                <input
                                    className="form-control"
                                    name="text"
                                    placeholder="Insert new subCategory" />
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
                            <button type="button" className="btn btn-success"><i className="fa fa-database"></i> &nbsp; Save</button>
                        </div>
                    </div>
                </div>
            </div>

            { /* Modal create */}
            <form action="/add" method="POST">
                <div className="modal fade" id="newCategory" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>New Category</h2>
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
                                            name="_id" />
                                        <br />

                                        <label>Category</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="category"
                                            placeholder="Insert category" />
                                        <br />

                                        <label>Description</label>
                                        <textarea
                                            className="form-control"
                                            type="text"
                                            name="description"
                                            placeholder="Insert description" />
                                        <br />

                                        <label>SubCategory</label>
                                        <input
                                            className="form-control"
                                            name="text"
                                            placeholder="Insert subCategory" />
                                        <br />&nbsp;

                                <label>New Image</label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            name="pictures"
                                            placeholder="Insert Picture" />
                                        <br />
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-success">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
};

ModalAddCategory.defaultProps = {
    editMode: true
};

export default ModalAddCategory;
