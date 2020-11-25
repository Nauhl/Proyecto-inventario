import Modal from "react-bootstrap/Modal";
import InputItem from "../inputs/inputItem";

const ModalItem = props => {

    const { handleClose, open, allItems, allLocations, allRooms, allCategories, allConditions, newItem, editMode, handleChange, handleClickUpdateItem, createNewItem, handleClickOnCreateNewItem } = props;

    return (
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton className="bg-info">
                <Modal.Title>{editMode ? `Modifying ${newItem.name}` : `Add new Item`}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div className="alert alert-danger" role="alert">
                        The fields with <strong>( * )</strong> are required
                    </div>
                <InputItem
                
                    newItem={newItem}
                    handleChange={handleChange}
                    allLocations={allLocations}
                    allRooms={allRooms}
                    allCategories={allCategories}
                    allConditions={allConditions}
                />
            </Modal.Body>

            <Modal.Footer className="bg-secondary">

                <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
                    Cancel
                </button>

                <div variant="primary" onClick={createNewItem} >
                    {editMode ? <button className="btn btn-info"
                        onClick={() => handleClickUpdateItem()}
                    ><i className="fas fa-pen-square"></i>&nbsp;
                        Update
                        </button>
                        :
                        <button type="button" className="btn btn-info"
                            onClick={() => handleClickOnCreateNewItem()}>
                            <i className="fa fa-database"></i> &nbsp; Save</button>}
                </div>
            </Modal.Footer>
        </Modal>
    )
};

ModalItem.defaultProps = {
    editMode: true
};

export default ModalItem;