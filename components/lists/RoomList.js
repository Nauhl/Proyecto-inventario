import React, { useState, useEffect } from 'react';

export default function RoomList(props) {

  const { allRooms, showElements , handleClickAddRoom, handleClickEditRoom, handleClickDeleteRoom } = props;

  return allRooms && allRooms.length > 0 ? (
    <table className="table table-striped table-responsive" >
      <thead>
        <tr className="table-primary">
          <th>Name</th>
          <th>Description</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {allRooms.map(room => (
          <tr key={room._id}>
            <td>{room.name}</td>
            <td>{room.description}</td>
            <td>{room.location ? room.location.name : ""}</td>
            <td>

              {showElements ?
                <button className="btn btn-outline-info"
                  variant="success" size="sm"
                  onClick={() => handleClickAddRoom()}>
                  New room</button>
                :
                null
              }
              <button type="button" className="btn btn-outline-warning"
                onClick={() => handleClickEditRoom(room._id)} >Edit</button>
              <button className="btn btn-outline-danger" data-toggle="modal" data-target="#DeleteModal"
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
