import Modal from "react-bootstrap/Modal";
import InputItem from "../inputs/inputItem";

const ModalItem = props => {
    
    const { handleClose, open, allItems, allLocations, allRooms, allCategories, allConditions , newItem, editMode, handleChange, handleClickUpdateItem, createNewItem, handleClickOnCreateNewItem } = props;

    return (
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newItem.name}` : `Add new Item`}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <InputItem
                    newItem={newItem}
                    handleChange={handleChange}
                    allLocations={allLocations}
                    allRooms={allRooms}
                    allCategories={allCategories}
                    allConditions={allConditions}
                />
            </Modal.Body>

            <Modal.Footer>
                
                <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
                    Cancel
                </button>

                <div variant="primary" onClick={createNewItem}>
                    {editMode ? <button className="btn btn-outline-success"
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateItem()}
                        >
                        Update
                        </button>
                        :
                        <button type="button" className="btn btn-outline-success" 
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