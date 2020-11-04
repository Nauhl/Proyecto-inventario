//import React, { useEffect, useState } from 'react';
//import styles from "../../styles/Home.module.css";

export default function InputRoom(props) {

    const { newRoom ,allRooms, handleChange, createNewRoom, cancelCreateNewRoom } = props

    return (
        <div>
            <div >
                <label>Name</label>
                    <input
                    required
                        size="small"
                        id="name-input"
                        type="text"
                        label="Name"
                        onChange={handleChange("name")}
                        value={newRoom.name}
                    />
                </div>

                <div >
                <label>Description</label>
                    <input
                        size="small"
                        type="text"
                        id="description-input"
                        label="Description"
                        onChange={handleChange("description")}
                        value={newRoom.description}
                    />
                </div>
        </div>
    )
}

/*InputRoom.defaultProps = {
    newRoom: {
        name: "",
        description: "",
        isActive: true,
        //user: "",
        pictures: "",
        location: {
            
        }
    }
}*/