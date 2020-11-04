import { makeStyles } from "@material-ui/core/styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputRoom from "../inputs/roomInput";

const useStyles = makeStyles(theme => ({

}));

const ModalRoom = props => {
    const classes = useStyles();
    const { handleClose, open, allRooms, newRoom, editMode, handleChange, handleClickUpdateRoom, createNewRoom, handleClickOnCreateNewRoom, cancelCreateNewRoom } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${newRoom.name}` : `Add a new room`}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <InputRoom
                    newRoom={newRoom}
                    handleChange={handleChange}
                />

            </Modal.Body>

            <Modal.Footer>

                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>

                <div variant="primary" onClick={createNewRoom}>
                    {editMode ? <Button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateRoom()}
                        >
                        UPDATE
                        </Button>
                        :
                        <Button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewRoom()}><i className="fa fa-database">
                        </i> &nbsp; Save</Button>}
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