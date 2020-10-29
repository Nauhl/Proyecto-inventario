import styles from '../../styles/Home.module.css';
import React, {useEffect, useState} from 'react';
import { getAllLocations, getLocation} from "../../src/lib/ctrlLocation";
import Button from "react-bootstrap/Button";

export default function LocationPage() {

  const [allLocations, setAllLocations] = React.useState([]);
  
  React.useEffect(() => {
    getLocations();
  }, []);

  const getLocations = () => {
    getAllLocations().then(location => {
        setAllLocations(location);
    });
  }

  return allLocations && allLocations.length > 0 ? (
    <>
    <div className={styles.main}>
        <h2>Location</h2>
        </div>
      <br />
      <div className={styles.container}>
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allLocations.map(location => (
                <tr key={location._id}>
                <td>{location.name}</td>
                <td>{location.description}</td>
                <td>{location.isActive}</td>
                <td>{location.pictures}</td>
                <td>{location.status}</td>
                <td>{Object.keys(location.address).join(location.streetNumber), 
                (location.street), (location.street2), (location.city), (location.province), (location.country)}</td>
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