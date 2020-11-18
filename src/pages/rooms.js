import { getAllRooms, getRoom, createNewRoom, updateRoom, deleteRoom } from "../../src/lib/ctrlRoom";
import { getAllLocations, getLocation } from "../../src/lib/ctrlLocation";
import RoomList from "../../components/lists/RoomList";
import ModalRoom from "../../components/modals/ModalRoom";
import ModalConfirmDelete from "../../components/DeleteModal/ModalConfirmDelete";

export default function roomsPage() {

  const [showElements, setShowElements] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = React.useState(false);
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

  const handleCloseConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(false);
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

  const DeleteRoomOnClick = () => {
    console.log("DELETING", newRoom);
    deleteRoom(newRoom._id).then(() => {
      getRooms();
      setNewRoom({});
      setShowConfirmDeleteModal(false);
    })
  }

  const handleChange = path => name => event => {
    if (path) {
      setNewRoom({
        ...newRoom,
        [path]: {
          ...newRoom[path],
          [name]: event.target.value
        }
      });
    } else {
      setNewRoom({
        ...newRoom,
        [name]: event.target.value
      });
    }
    console.log(newRoom);
  };

  const handleClickOnCreateNewRoom = () => {
    createNewRoom(newRoom).then(room => {
      getRooms();
      setNewRoom({})
      setShowElements(true);
      handleCloseModal();
    })
  };

  const handleClickEditRoom = roomID => {
    getRoom(roomID).then(room => {
      console.log("FOUND IT", room);
      setShowModal(true);
      setEditMode(true);
      setNewRoom(room);
    })
  };

  // Abre el modal de delete
  const handleClickDeleteRoom = room => {
    setNewRoom(room);
    setShowConfirmDeleteModal(true);
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
        newRoom={newRoom}
        editMode={editMode}
      />

      <ModalConfirmDelete
        open={showConfirmDeleteModal}
        handleClose={handleCloseConfirmDeleteModal}
        handleConfirmDelete={DeleteRoomOnClick}
        item={newRoom}
      />

      <div className="card mb-3" >
        <div className="card-header"></div>
        <div className="card-body">
          <h4 className="card-title">Rooms</h4>
          <p className="card-text">In this page you can create, edit and delete Rooms to your items.</p>
        </div>
      </div>

      {showElements ?
        <button className="btn btn-outline-info"
          variant="success" size="sm"
          onClick={() => handleClickAddRoom()}>
          New room</button>
        :
        null
      }

      <div>
        <RoomList
          allRooms={allRoomsState}
          handleClickEditRoom={handleClickEditRoom}
          handleClickDeleteRoom={handleClickDeleteRoom}
        />
      </div>
    </div >
  )
};