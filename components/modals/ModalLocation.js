import Modal from "react-bootstrap/Modal";
import InputLocation from "../inputs/InputLocation";

const ModalLocation = props => {
  
  const { handleClose, open, newLocation, editMode, handleChange, handleClickUpdateLocation, createNewLocation, handleClickOnCreateNewLocation } = props;

  return (
    
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton className="bg-info">
        <Modal.Title>{editMode ? `Modifying ${newLocation.name}` : `Add a new location`}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div className="alert alert-danger" role="alert">
                        The fields with <strong>( * )</strong> are required
                    </div>
        <InputLocation
          newLocation={newLocation}
          handleChange={handleChange}
        />
      </Modal.Body>

      <Modal.Footer className="bg-secondary">
        <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
            Cancel
      </button>

        <div variant="primary" onClick={createNewLocation}>
          {editMode ? <button className="btn btn-info"
            onClick={() => handleClickUpdateLocation()}
            ><i className="fas fa-pen-square"></i>&nbsp;
              Update
            </button>
            :
            <button type="button" className="btn btn-info" 
            onClick={() => handleClickOnCreateNewLocation()}>
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