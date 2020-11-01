import { getAllLocations, createNewLocation, updateLocation} from "../../src/lib/ctrlLocation";
// import Button from "@material-ui/core/Button";
import Button from "react-bootstrap/Button";
//import LocationsInput from "../../components/inputs/locationInput";
import LocationList from "../../components/lists/LocationList";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import ModalEditar from "../../components/modals/ModalEditarLocation";


export default function locationsPage() {

  const [showElements, setShowElements] = React.useState(true);
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

  const EditarLocation = () => {
    updateLocation(newLocation).then(location => {
      getLocations();
      setEditarL();
    })
  };

  return (
    <div >
      <div >
        <div>
          <h3>Locations</h3>
        </div>

        <div >
          {showElements ?
            <button variant="success" size="sm" onClick={() => setShowElements(false)}>
              <AddIcon fontSize="small" />Add new location</button>
            :
            null
            }
        </div>

        <div >
          {showElements ?
            <LocationList
              allLocations={allLocationsState}
            />
            :
            <ModalEditar
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