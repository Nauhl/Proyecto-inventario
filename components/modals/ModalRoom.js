import Modal from "react-bootstrap/Modal";
import InputRoom from "../inputs/InputRoom";

const ModalRoom = props => {
    
    const { handleClose, open, allRooms, allLocations, newRoom, editMode, handleChange, handleClickUpdateRoom, createNewRoom, handleClickOnCreateNewRoom, cancelCreateNewRoom } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newRoom.name}` : `Add a new room`}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <InputRoom
                    newRoom={newRoom}
                    handleChange={handleChange}
                    allLocations={allLocations}
                />
            </Modal.Body>

            <Modal.Footer>
                <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
                    Cancel
                </button>

                <div variant="primary" onClick={createNewRoom}>
                    {editMode ? <button className="btn btn-success"
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateRoom()}
                        >
                        Update
                        </button>
                        :
                        <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewRoom()}>
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

/*   <Button variant="primary" onClick={createNewRoom}>
                    {editMode ? <Button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateRoom()}
                        >
                        UPDATE
                        </Button>
                        :
                        <Button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewRoom()}><i className="fa fa-database">
                        </i> &nbsp; Save</Button>}
                </Button>*/