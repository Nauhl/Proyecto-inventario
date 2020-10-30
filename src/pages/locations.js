import styles from '../../styles/Home.module.css';
import LocationList from '../../components/lists/LocationList';
import React, { useEffect, useState } from 'react';
import { getAllLocations, getLocation } from "../../src/lib/ctrlLocation";
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

    return allLocations ? (
        <>

        <LocationList 
        allLocations={allLocations}
        />
        </>
    ) : (
            <>
                <div className="spinner-border"></div>
            </>
        );
};