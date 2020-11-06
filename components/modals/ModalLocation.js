import Modal from "react-bootstrap/Modal";
import InputLocation from "../inputs/InputLocation";

const ModalLocation = props => {
  
  const { handleClose, open, allLocations, newLocation, editMode, handleChange, handleClickUpdateLocation, createNewLocation, handleClickOnCreateNewLocation, cancelCreateNewLocation } = props;

  return (
    
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editMode ? `Modifying ${newLocation.name}` : `Add a new location`}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InputLocation
          newLocation={newLocation}
          handleChange={handleChange}
        />
      </Modal.Body>

      <Modal.Footer>

        <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
            Cancel
      </button>

        <div variant="primary" onClick={createNewLocation}>
          {editMode ? <button className="btn btn-success"
            variant="success" size="sm"
            onClick={() => handleClickUpdateLocation()}
            >
              Update
            </button>
            :
            <button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewLocation()}>
            <i className="fa fa-database"></i> &nbsp; Save</button>}
        </div>
      </Modal.Footer>
    </Modal>
  )
};

ModalLocation.defaultProps = {
  editMode: true
};

export default ModalLocation;