//import { useRef } from 'react';

export default function InputRoom(props) {

    /*const inputFileRef = useRef()

    const handleButton = (e) => {
        e.preventDefault()
        //console.log(allLocations)
        console.log(inputFileRef.current.files)
    }*/

    const { newRoom, allRooms, handleChange, createNewRoom, cancelCreateNewRoom, allLocations } = props

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

            <div >
                <form >
                    <div className="form-group">
                        <label htmlFor="multi-location">Location</label>
                        <select className="custom-select" id="multi-location"
                            //multiple
                            value={newRoom.location || []}
                            onChange={handleChange("location")}
                        >
                            <option value="" disabled  >Select Location(s)</option>
                            {allLocations.map(location => (
                                <option key={location._id} value={location._id}
                                >{location.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}



/*<div className="row">
                <div className="col">
                    <label>Pictures</label>
                    <input
                        //fullWidth
                        size="small"
                        type="file" ref={inputFileRef}
                        id="pictures-input"
                        label="Pictures"
                        // variant="outlined"
                        value={newRoom.pictures}
                        onChange={handleChange("pictures")}
                    />
                </div>
            </div>*/