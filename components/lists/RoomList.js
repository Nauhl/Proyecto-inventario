import React from 'react';

export default function RoomList(props) {

  const { allRooms, handleClickEditRoom, handleClickDeleteRoom } = props;

  return allRooms && allRooms.length > 0 ? (
    <table className="table table-striped table-responsive" >
      <thead>
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
            <td>{room.name}</td>
            <td>{room.description}</td>
            <td>{room.location ? room.location.name : ""}</td>
            {/* <td>{room.location && room.location[0] ? `${room.location[0].name}` : ""}</td> */}
            <td>

              <button type="button" className="btn btn-outline-warning"
                onClick={() => handleClickEditRoom(room._id)} >Edit</button>
              <button type="button" className="btn btn-outline-danger"
                onClick={() => handleClickDeleteRoom(room)} >Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
      <>
        <div className="spinner-border bg-success"></div>
      </>
    );
}
