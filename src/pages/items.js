import styles from '../../styles/Home.module.css';
import ItemList from '../../components/lists/ItemList';
import React, { useEffect, useState } from 'react';
import { getAllItems, getItem } from "../../src/lib/ctrlItem";
import Button from "react-bootstrap/Button";

export default function ItemPage() {

    const [allItems, setAllItems] = React.useState([]);

    React.useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        getAllItems().then(items => {
            setAllItems(items);
        });
    }

    return allItems  ? (
        <>
            <ItemList 
            allItems={allItems}
            />
        </>
    ) : (
            <>
                <div className="spinner-border"></div>
            </>
        );
};