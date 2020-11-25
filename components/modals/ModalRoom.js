import Modal from "react-bootstrap/Modal";
import InputRoom from "../inputs/InputRoom";

const ModalRoom = props => {
    
    const { handleClose, open, allLocations, newRoom, editMode, handleChange, handleClickUpdateRoom, createNewRoom, handleClickOnCreateNewRoom } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton className="bg-info">
                <Modal.Title>{editMode ? `Modifying ${newRoom.name}` : `Add a new room`}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <div className="alert alert-danger" role="alert">
                        The fields with <strong>( * )</strong> are required
                    </div>
                <InputRoom
                    newRoom={newRoom}
                    handleChange={handleChange}
                    allLocations={allLocations}
                />
            </Modal.Body>

            <Modal.Footer className="bg-secondary">
                <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
                    Cancel
                </button>

                <div variant="primary" onClick={createNewRoom}>
                    {editMode ? <button className="btn btn-info"
                        onClick={() => handleClickUpdateRoom()}
                        ><i className="fas fa-pen-square"></i>&nbsp;
                        Update
                        </button>
                        :
                        <button type="button" className="btn btn-info" 
                        onClick={() => handleClickOnCreateNewRoom()}>
                        <i className="fa fa-database"></i> &nbsp; Save</button>}
                </div>
            </Modal.Footer>
        </Modal>
    )
};

ModalRoom.defaultProps = {
    editMode: true
};

export default ModalRoom;