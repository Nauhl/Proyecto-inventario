import styles from '../../styles/Home.module.css';
import RoomList from '../../components/lists/RoomList';
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

  return allRooms ? (
    <>
    <RoomList 
    allRooms={allRooms}
    />
    </>
  ) : (
    <>
      <div className="spinner-border"></div>
    </>
  );
};