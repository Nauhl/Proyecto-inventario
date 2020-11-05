import { getAllSubCategories } from "../../src/lib/ctrlSubCategory";
import Modal from "react-bootstrap/Modal";
import { useRef } from 'react';

const ModalAddCategory = props => {

    const inputFileRef = useRef()

    const handleButton = (e) => {
        e.preventDefault()
        //console.log(allLocations)
        console.log(inputFileRef.current.files)
    }

    const { handleClose, open, allCategories, allSubCategories, handleChange, editMode, handleClickUpdateCategory,
        createNewCategory, handleClickOnCreateNewCategory, cancelCreateNewCategory, newCategory } = props;

    return (
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newCategory.name}` : `Add a new Category`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label>Name</label>
                            <input
                                //fullWidth
                                required
                                size="small"
                                id="name-input"
                                label="Name"
                                // variant="outlined"
                                value={newCategory.name}
                                onChange={handleChange("name")}
                            />
                        </div>

                        <div className="row">
                            <div className="col">
                                <label>Description</label>
                                <input
                                    //fullWidth
                                    size="small"
                                    id="description-input"
                                    label="Description"
                                    // variant="outlined"
                                    value={newCategory.description}
                                    onChange={handleChange("description")}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <label>Pictures</label>
                                <input
                                    //fullWidth
                                    size="small"
                                    type="file" ref={inputFileRef}
                                    id="description-input"
                                    label="Description"
                                    // variant="outlined"
                                    value={newCategory.pictures}
                                    onChange={handleChange("pictures")}
                                />
                            </div>
                        </div>

                        <div >
                            <form >
                                <div className="form-group">
                                    <label htmlFor="multi-subcategories">Subcategories</label>
                                    <select className="custom-select" id="multi-subcategories"
                                        //multiple
                                        value={newCategory.subCategories || []}
                                        onChange={handleChange("subCategories")}
                                    >
                                        <option value="" disabled  >Select subCategory(s)</option>
                                        {allSubCategories.map(subCategory => (
                                            <option key={subCategory._id} value={subCategory._id}
                                            >{subCategory.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body >

            <Modal.Footer>
                <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
                    Cancel
                </button>

                <div variant="primary" onClick={createNewCategory}>
                    {editMode ?
                        <button
                            variant="success" size="sm"
                            onClick={() => handleClickUpdateCategory()}>
                            UPDATE
                        </button> :
                        <button type="button" className="btn btn-success"
                            onClick={() => handleClickOnCreateNewCategory()}>
                            <i className="fa fa-database">
                            </i> &nbsp; Save</button>}
                </div>
            </Modal.Footer>
        </Modal >
    )
};

ModalAddCategory.defaultProps = {
    editMode: true
};

export default ModalAddCategory;