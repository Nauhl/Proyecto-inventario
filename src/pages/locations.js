//import { getAuth } from "../../utils/common";
//import { makeStyles } from "@material-ui/core/styles";
import { getAllLocations, createNewLocation, updateLocation} from "../../src/lib/ctrlLocation";
// import Button from "@material-ui/core/Button";
import Button from "react-bootstrap/Button";
import LocationsInput from "../../components/inputs/locationInput";
import LocationList from "../../components/lists/LocationList";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import InputEditar from "../../components/inputs/Location/inputEditar";

/*const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));*/

export default function locationsPage() {
  //const classes = useStyles();

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
      getLocations
      setEditarL();
    })
  };

  return (
    <div >
      <div container spacing={1}>
        <div item xs={12}>
          <h3>Locations</h3>
        </div>

        <div item xs={6}>
          {showElements ?
            <button variant="success" size="sm" onClick={() => setShowElements(false)}>
              <AddIcon fontSize="small" />Add new location</button>
            :
            null
            //<button variant="dark" size="sm" onClick={() => setShowElements(true)}>Show all categories</button>
          }
        </div>

        <div item xs={12}>
          {showElements ?
            <LocationList
              allLocations={allLocationsState}
            />
            :
            <LocationsInput
              allLocations={allLocationsState}
              handleChange={handleChange}
              createNewLocation={handleClickOnCreateNewLocation}
              cancelCreateNewLocation={handleClickOnCancelNewLocation}
              newLocation={newLocation}
            />
          }
          
        <InputEditar 
        handleChange={handleChange}
        Editar={EditarLocation}
        cancelCreateNewLocation={handleClickOnCancelNewLocation}/>
        </div>
      </div>
    </div>
  )
};