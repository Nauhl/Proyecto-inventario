import React from 'react';
import styles from "../../styles/Home.module.css";

export default function RoomList(props) {

  const { allRooms, handleClickEditRoom, handleClickDeleteRoom } = props;

  return allRooms && allRooms.length > 0 ? (
    <table className={styles.main, "table"}>
      <thead className={styles.textItems3}>
        <tr className="table-primary">
          <th scope="row">Name</th>
          <th scope="row">Description</th>
          <th scope="row">Location</th>
          <th scope="row">Action</th>
        </tr>
      </thead>
      <tbody>
        {allRooms.map(room => (
          <tr key={room._id} className="bg-gray">
            <td className={styles.textItems3}>{room.name}</td>
            <td className={styles.textItems3}>{room.description}</td>
            <td className={styles.textItems3}>{room.location ? room.location.name : ""}</td>
            {/* className={styles.textItems3} <td>{room.location && room.location[0] ? `${room.location[0].name}` : ""}</td> */}
            <td className={styles.textItems3}>

              <button type="button" className="btn btn-outline-warning"
                onClick={() => handleClickEditRoom(room._id)} ><i className="fas fa-pen-square"></i>&nbsp;Edit</button>
              &nbsp;
              <button type="button" className="btn btn-outline-danger"
                onClick={() => handleClickDeleteRoom(room)} > <i className="fas fa-trash-alt"></i>&nbsp;Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
      <>
        <div className="spinner-border "></div>
      </>
    );
}
