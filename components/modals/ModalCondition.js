import Modal from "react-bootstrap/Modal";
import InputCondition from "../inputs/inputCondition";

const ModalCondition = props => {
    
    const { handleClose, open, addCondition, editMode, handleChange, handleClickUpdateCondition, createNewCondition, handleClickOnCreateNewCondition } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton className="bg-info">
                <Modal.Title>{editMode ? `Modifying ${addCondition.name}` : `Add a new Condition`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div className="alert alert-danger" role="alert">
                        The fields with <strong>( * )</strong> are required
                    </div>
                <InputCondition
                    addCondition={addCondition}
                    handleChange={handleChange}
                />
            </Modal.Body>

            <Modal.Footer className="bg-secondary">
                <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
                    Cancel
                </button>

                <div variant="primary" onClick={createNewCondition}>
                    {editMode ? <button className="btn btn-info"
                        onClick={() => handleClickUpdateCondition()}
                        ><i className="fas fa-pen-square"></i>&nbsp;
                        Update
                        </button>
                        :
                        <button type="button" className="btn btn-info" 
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