import styles from '../../styles/Home.module.css';
import React, {useEffect, useState} from 'react';
import { getAllRooms, getRoom} from "../../src/lib/ctrlRoom";
import Button from "react-bootstrap/Button";

export default function RoomPage() {

  const [allRooms, setAllRooms] = React.useState([]);
  
  React.useEffect(() => {
    getRooms();
  }, []);

  const getRooms = () => {
    getAllRooms().then(rooms => {
      setAllRooms(rooms);
    });
  }

  return allRooms && allRooms.length > 0 ? (
    <>
    <div className={styles.main}>
        <h2>Rooms</h2>
        </div>
      <br />
      <div className={styles.container}>
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Pictures</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allRooms.map(room => (
              <tr key={room._id}>
                <td>{room.name}</td>
                <td>{room.description}</td>
                <td>{room.isActive}</td>
                <td>{room.pictures}</td>
                <td>{room.location}</td>
                <td>
                  <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#staticBackdrop" >Edit</button>
                            &nbsp;
                            <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      
    </>
  ) : (
    <>
      <div className="spinner-border"></div>
    </>
  );
};