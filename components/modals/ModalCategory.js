import { getAllSubCategories } from "../../src/lib/ctrlSubCategory";
import Modal from "react-bootstrap/Modal";
import InputCategory from "../inputs/inputCategory";
//import { useRef } from 'react';

const ModalCategory = props => {

    /*const inputFileRef = useRef()

    const handleButton = (e) => {
        e.preventDefault()
        //console.log(allLocations)
        console.log(inputFileRef.current.files)
    }*/

    const { handleClose, open, allSubCategories, handleChange, editMode, handleClickUpdateCategory,
        createNewCategory, handleClickOnCreateNewCategory, newCategory } = props;

    return (
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton className="bg-info">
                <Modal.Title>{editMode ? `Modifying ${newCategory.name}` : `Add a new Category`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div className="alert alert-danger" role="alert">
                        The fields with <strong>( * )</strong> are required
                    </div>
                < InputCategory 
                newCategory={newCategory}
                handleChange={handleChange}
                allSubCategories={allSubCategories}
                />
            </Modal.Body >

            <Modal.Footer className="bg-secondary">
                <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
                    Cancel
                </button>

                <div variant="primary" onClick={createNewCategory}>
                    {editMode ?
                        <button className="btn btn-info"
                            onClick={() => handleClickUpdateCategory()}>
                                <i className="fas fa-pen-square"></i>&nbsp;
                            Update
                        </button> :
                        <button type="button" className="btn btn-info"
                            onClick={() => handleClickOnCreateNewCategory()}>
                            <i className="fa fa-database">
                            </i> &nbsp; Save</button>}
                        </div>
            </Modal.Footer>
        </Modal >
    )
};

ModalCategory.defaultProps = {
    editMode: true
};

export default ModalCategory;

/*
<div className="row">
                        <div className="col">
                            <label>Pictures</label>
                            <input
                                //fullWidth
                                size="small"
                                type="file" ref={inputFileRef}
                                id="pictures-input"
                                label="Pictures"
                                // variant="outlined"
                                value={newCategory.pictures}
                                onChange={handleChange("pictures")}
                            />
                        </div>
                    </div>
                    */