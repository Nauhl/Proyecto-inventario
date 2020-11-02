import { getAllLocations, getLocation, createNewLocation, updateLocation, deleteLocation } from "../../src/lib/ctrlLocation";
// import Button from "@material-ui/core/Button";
import Button from "react-bootstrap/Button";
//import LocationsInput from "../../components/inputs/locationInput";
import LocationList from "../../components/lists/LocationList";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import AddLocation from "../../components/inputs/LocationInputs/inputAddLocation";
import styles from '../../styles/Home.module.css';

export default function locationsPage() {

  

  const [showElements, setShowElements] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [allLocationsState, setAllLocationsState] = React.useState([]);
  const [newLocation, setNewLocation] = React.useState({});
  const [editarL, setEditarL] = React.useState({});

  React.useEffect(() => getLocations(), []);

  const getLocations = () => {
    getAllLocations().then(allLocations => {
      setAllLocationsState(allLocations);
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
    })

  };

  const handleClickOnCancelNewLocation = () => {
    setNewLocation({})
    setShowElements(true);
  };

  const handleClickEditLocation = locationID => {
    getLocation(locationID).then(location => {
      console.log("FOUND IT", location);
      setShowModal(true);
      setNewLocation(location);
    })
  };

  /*const handleClickEditLocation = locationID => {
    getLocation(locationID).then(location => {
      updateLocation(location);
      setShowModal(true);
      setNewLocation(location);
    })
  };*/

  const handleClickDeleteLocation = locationID => {
    const borrandoLocation = allLocationsState.filter((location) => location.locationID !== locationID);
    console.log("DELETING", locationID);
    setAllLocationsState(borrandoLocation)
    
    deleteLocation(locationID);
    setNewLocation(true);
    setShowElements(true);
  };


  /*const EditarLocation = () => {
    updateLocation(newLocation).then(location => {
      getLocations();
      setEditarL();
    })
  };*/

  return (
    <div >
      <div >
        <div className={styles.main}>
          <h3>Locations</h3>
        </div>

        <div className={styles.main}>
          {showElements ?
            <button
              data-toggle="modal" data-target="#newLocation"
              variant="success" size="sm"
              onClick={() => setShowElements(false)}>
              <AddIcon fontSize="small" />Add new location</button>
            :
            null
          }
        </div>

        <div >
          {showElements ?
            <LocationList
              allLocations={allLocationsState}
              handleClickEditLocation={handleClickEditLocation}
              
              Borrar={handleClickDeleteLocation}
            />
            :
            <AddLocation
              show={showModal}
              allLocations={allLocationsState}
              handleChange={handleChange}
              createNewLocation={handleClickOnCreateNewLocation}
              cancelCreateNewLocation={handleClickOnCancelNewLocation}
              newLocation={newLocation}

            />
          }

        </div>
      </div>
    </div>
  )
};

//Editar={EditarLocation}