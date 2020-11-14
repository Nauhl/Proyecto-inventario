import { getAllLocations, getLocation, createNewLocation, updateLocation, deleteLocation } from "../../src/lib/ctrlLocation";
import LocationList from "../../components/lists/LocationList";
import styles from '../../styles/Home.module.css';
import ModalLocation from "../../components/modals/ModalLocation";
import ModalConfirmDelete from "../../components/DeleteModal/ModalConfirmDelete";

export default function locationsPage() {

  const [showElements, setShowElements] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [allLocationsState, setAllLocationsState] = React.useState([]);
  const [newLocation, setNewLocation] = React.useState({});

  React.useEffect(() => getLocations(), []);

  const getLocations = () => {
    getAllLocations().then(allLocations => {
      setAllLocationsState(allLocations);
    })
  };

  const handleCloseModal = () => {
    console.log("handleCloseModal")
    setShowModal(false);
    setNewLocation({});
  };

  const handleCloseConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(false);
  };

  const handleClickAddLocation = () => {
    console.log("handleClickAddLocation")
    setShowModal(true);
    setEditMode(false);
    setNewLocation({});

  }

  const handleClickUpdateLocation = () => {
    updateLocation(newLocation).then(() => {
      handleCloseModal()
      getLocations();
    })
  }

  const DeleteLocationOnClick = () => {
    console.log("DELETING", newLocation);
    deleteLocation(newLocation._id).then(() => {
      getLocations();
      setNewLocation({});
      setShowConfirmDeleteModal(false);
    })
  }

  const handleChange = path => name => event => {
    if (path) {
      setNewLocation({
        ...newLocation,
        [path]: {
          ...newLocation[path],
          [name]: event.target.value
        }
      });
    } else {
      setNewLocation({
        ...newLocation,
        [name]: event.target.value
      });
    }
    console.log(newLocation);
  };

  const handleClickOnCreateNewLocation = () => {
    createNewLocation(newLocation).then(location => {
      getLocations();
      setNewLocation({})
      setShowElements(true);
      handleCloseModal();
    })
  };

  const handleClickEditLocation = locationID => {
    getLocation(locationID).then(location => {
      console.log("FOUND IT", location);
      setShowModal(true);
      setEditMode(true);
      setNewLocation(location);
      getLocations();
    })
  };

  // Abre el modal de delete
  const handleClickDeleteLocation = location => {
    setNewLocation(location);
    setShowConfirmDeleteModal(true);
  };

  return (
    <div >
      <ModalLocation
        open={showModal}
        handleClose={handleCloseModal}
        allLocations={allLocationsState}
        handleChange={handleChange}
        handleClickUpdateLocation={handleClickUpdateLocation}
        handleClickOnCreateNewLocation={handleClickOnCreateNewLocation}
        newLocation={newLocation}
        editMode={editMode}
      />

      <ModalConfirmDelete
        open={showConfirmDeleteModal}
        handleClose={handleCloseConfirmDeleteModal}
        handleConfirmDelete={DeleteLocationOnClick}
        item={newLocation}
      />

      <div className="card mb-3" >
        <div className="card-header"></div>
        <div className="card-body">
          <h4 className="card-title">Locations</h4>
          <p className="card-text">In this page you can create, edit and delete Locations to your items.</p>
        </div>
      </div>

      {showElements ?
        <button className="btn btn-outline-success"
          variant="success" size="sm"
          onClick={() => handleClickAddLocation()}>
          New location</button>
        :
        null
      }

      <div >
        {/* {showElements ? */}
        <LocationList
          allLocations={allLocationsState}
          handleClickEditLocation={handleClickEditLocation}
          handleClickDeleteLocation={handleClickDeleteLocation}
        />
      </div>
    </div>
  )
};