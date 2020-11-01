import React, { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.css";

export default function InputRoom(props) {
    const { allRooms, handleChange, createNewRoom, cancelCreateNewRoom } = props

    return (
        <div>
            <div className={styles.main}      >
                <div >
                <label>Name</label>
                    <input
                        required
                        size="small"
                        id="name-input"
                        label="Name"
                        variant="outlined"
                        onChange={handleChange("name")}
                    />
                </div>

                <div >
                <label>Description</label>
                    <input
                        required
                        size="small"
                        id="description-input"
                        label="Description"
                        variant="outlined"

                        onChange={handleChange("description")}
                    />
                </div>

                <div >
                    <button type="button" className="btn btn-success" onClick={() => createNewRoom()}>Add room</button>
                </div>

                <div >
                    <button type="button" className="btn btn-danger" onClick={() => cancelCreateNewRoom()}>Cancel</button>
                </div>

            </div>

        </div>
    )
}