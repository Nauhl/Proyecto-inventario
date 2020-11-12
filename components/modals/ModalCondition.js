import Modal from "react-bootstrap/Modal";
import InputCondition from "../inputs/inputCondition";

const ModalCondition = props => {
    
    const { handleClose, open, allConditions, addCondition, editMode, handleChange, handleClickUpdateCondition, createNewCondition, handleClickOnCreateNewCondition, cancelCreateNewCondition } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${addCondition.name}` : `Add a new Condition`}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <InputCondition
                    addCondition={addCondition}
                    handleChange={handleChange}
                />

            </Modal.Body>

            <Modal.Footer>

                <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
                    Cancel
                </button>

                <div variant="primary" onClick={createNewCondition}>
                    {editMode ? <button className="btn btn-outline-success"
                        onClick={() => handleClickUpdateCondition()}
                    >
                        Update
                        </button>
                        :
                        <button type="button" className="btn btn-outline-success" 
                        onClick={() => handleClickOnCreateNewCondition()}>
                        <i className="fa fa-database"></i> &nbsp; Save</button>}
                </div>
            </Modal.Footer>
        </Modal>
    )
};

ModalCondition.defaultProps = {
    editMode: true
};

export default ModalCondition;