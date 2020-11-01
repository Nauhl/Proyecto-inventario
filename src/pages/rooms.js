import { getAllRooms, createNewRoom } from "../../src/lib/ctrlRoom";
import InputRoom from "../../components/inputs/roomInput";
import RoomList from "../../components/lists/RoomList";
import styles from '../../styles/Home.module.css';

export default function roomsPage() {

  const [showElements, setShowElements] = React.useState(true);
  const [allRoomsState, setAllRoomsState] = React.useState([]);
  const [newRoom, setNewRoom] = React.useState({});

  React.useEffect(() => getRooms(), []);

  const getRooms = () => {
    getAllRooms().then(allRooms => {
      setAllRoomsState(allRooms);
    })
  }

  const handleChange = name => event => {
    setNewRoom({
      ...newRoom,
      [name]: event.target.value
    });
  };

  const handleClickOnCreateNewRoom = () => {

    createNewRoom(newRoom).then(room => {
      getRooms()
      setShowElements(true);
    })
  };

  const handleClickOnCancelNewRoom = () => {
    setNewRoom({})
    setShowElements(true);
  };


  return (
    <>
      <div className={styles.main}>
        <h2>Rooms</h2>
        {showElements ?
          <button type="button" className="btn btn-dark"
            data-toggle="modal" data-target="#newRoom" onClick={() => setShowElements(false)}>Add  room</button>
          :
          null}
      </div>
      <br />

      <div>
        {showElements ?
          <RoomList
            allRooms={allRoomsState}
          />
          :
          <InputRoom
            allRooms={allRoomsState}
            handleChange={handleChange}
            createNewRoom={handleClickOnCreateNewRoom}
            cancelCreateNewRoom={handleClickOnCancelNewRoom}
          />
        }
      </div>
    </>
  )
};
