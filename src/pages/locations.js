import { getAllLocations, getLocation, createNewLocation, updateLocation, deleteLocation } from "../../src/lib/ctrlLocation";
import LocationList from "../../components/lists/LocationList";
import styles from '../../styles/Home.module.css';
import ModalLocation from "../../components/modals/ModalLocation";

export default function locationsPage() {

  const [showElements, setShowElements] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
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

  /* this works just if I put name description and "street number", I mean, 
  I need to get the warning in the browser's console to the see the delete change
  if I just put name and description I won't see the change until I refresh the page*/
  const handleClickDeleteLocation = locationID => {
    const borrandoLocation = allLocationsState.filter((location) => location.locationID !== locationID);
    console.log("DELETING", locationID);
    getLocations(borrandoLocation);
    handleCloseModal()
    deleteLocation(locationID);
    getLocations();
    /*setNewLocation(true);
    setShowElements(true);*/
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
      handleCloseModal()
    })
  };

  /*const handleClickOnCancelNewLocation = () => {
    setNewLocation({})
    setShowElements(true);
  };*/

  const handleClickEditLocation = locationID => {
    getLocation(locationID).then(location => {
      console.log("FOUND IT", location);
      setShowModal(true);
      setEditMode(true);
      setNewLocation(location);
    })
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
      <div >
        <div className={styles.main}>
          <h3>Locations</h3>
        </div>

        <div className={styles.main}>
          {showElements ?
            <button className="btn btn-success"
              variant="success" size="sm"
              onClick={() => handleClickAddLocation()}>
              New location</button>
            :
            null
          }
        </div>

        <div >
          {/* {showElements ? */}
          <LocationList
            allLocations={allLocationsState}
            handleClickEditLocation={handleClickEditLocation}
            handleClickDeleteLocation={handleClickDeleteLocation}
          />
        </div>
      </div>
    </div>
  )
};