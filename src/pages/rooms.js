import { getAllRooms, getRoom, createNewRoom, updateRoom, deleteRoom } from "../../src/lib/ctrlRoom";
import { getAllLocations, getLocation} from "../../src/lib/ctrlLocation";
import RoomList from "../../components/lists/RoomList";
import styles from '../../styles/Home.module.css';
import ModalRoom from "../../components/modals/ModalRoom";

export default function roomsPage() {

  const [showElements, setShowElements] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const [allRoomsState, setAllRoomsState] = React.useState([]);
  const [allLocations, setLocationState] = React.useState([]);
  const [newRoom, setNewRoom] = React.useState({});

  React.useEffect(() => {
    getRooms();
    getLocations();
  }, []);

  const getRooms = () => {
    getAllRooms().then(allRooms => {
      setAllRoomsState(allRooms);
    });
  }

  const getLocations = () => {
    getAllLocations().then(allRooms => {
      setLocationState(allRooms);
    });
  }

  const handleCloseModal = () => {
    console.log("handleCloseModal")
    setShowModal(false);
    setNewRoom({});
  };


  const handleClickAddRoom = () => {
    console.log("handleClickAddRoom")
    setShowModal(true);
    setEditMode(false);
    setNewRoom({});

  }

  const handleClickUpdateRoom = () => {
    updateRoom(newRoom).then(() => {
      handleCloseModal()
      getRooms();
    })
  }

  const handleClickDeleteRoom = roomID => {
    const DeletingRoom = allRoomsState.filter((room) => room.roomID !== roomID);
    console.log("DELETING", roomID);
    getRooms(DeletingRoom);
    handleCloseModal()
    deleteRoom(roomID);
    getRooms();
    /*setNewLocation(true);
    setShowElements(true);*/
  }

  const handleChange = name => event => {
    setNewRoom({
      ...newRoom,
      [name]: event.target.value
    });
    console.log(newRoom);
  };

  const handleClickOnCreateNewRoom = () => {
    createNewRoom(newRoom).then(room => {
      getRooms();
      setNewRoom({})
      setShowElements(true);
      handleCloseModal()
    })
  };

  /*const handleClickOnCancelNewRoom = () => {
    setNewRoom({})
    setShowElements(true);
  };*/

  const handleClickEditRoom = roomID => {
    getRoom(roomID).then(room => {
      console.log("FOUND IT", room);
      setShowModal(true);
      setEditMode(true);
      setNewRoom(room);
    })
  };


  return (
    <div>
      <ModalRoom
        open={showModal}
        handleClose={handleCloseModal}
        allRooms={allRoomsState}
        allLocations={allLocations}
        handleChange={handleChange}
        handleClickUpdateRoom={handleClickUpdateRoom}
        
        handleClickOnCreateNewRoom={handleClickOnCreateNewRoom}
        //cancelCreateNewRoom={handleClickOnCancelNewRoom}
        newRoom={newRoom}
        editMode={editMode}
      />

      <div>
        <div className={styles.main}>
          <h3>Rooms</h3>
        </div>
        <div className={styles.main}>
          {showElements ?
            <button className="btn btn-success"
              variant="success" size="sm"
              onClick={() => handleClickAddRoom()}>
              New room</button>
            :
            null
          }
        </div>

        <div>
          { /*showElements ? */}
          <RoomList
            allRooms={allRoomsState}
            handleClickEditRoom={handleClickEditRoom}
            handleClickDeleteRoom={handleClickDeleteRoom}
          />
          {/*:
          <InputRoom
          /> */}
        </div>
      </div >
    </div >
  )
};