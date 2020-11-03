import { makeStyles, useTheme } from "@material-ui/core/styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddLocation from "../inputs/LocationInputs/inputAddLocation";

const useStyles = makeStyles(theme => ({

}));

const ModalLocation = props => {
  const classes = useStyles();
  // const { handleClose, open, allLocations, handleChange, createNewLocation, cancelCreateNewLocation, newLocation, editMode } = props;
  const { handleClose, open, allLocations, newLocation, editMode, handleChange, handleClickUpdateLocation, createNewLocation, handleClickOnCreateNewLocation, cancelCreateNewLocation } = props;

  return (
    
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editMode ? `Modifying ${newLocation.name}` : `Add a new location`}</Modal.Title>

      </Modal.Header>

      <Modal.Body>
        <AddLocation
          newLocation={newLocation}
          handleChange={handleChange}
        />

      </Modal.Body>

      <Modal.Footer>

        <div>FOOTER</div>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
      </Button>

        <div variant="primary" onClick={createNewLocation}>
          {editMode ? <Button
            variant="success" size="sm"
            onClick={() => handleClickUpdateLocation()}
          >
              UPDATE
        </Button>
            :
            <Button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewLocation()}><i className="fa fa-database">
            </i> &nbsp; Save</Button>}
        </div>

      </Modal.Footer>

    </Modal>

  )
};

ModalLocation.defaultProps = {
  editMode: true
};

export default ModalLocation;