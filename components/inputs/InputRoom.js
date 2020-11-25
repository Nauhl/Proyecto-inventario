import { Textfield } from 'react-mdl';

export default function InputRoom(props) {

    const { newRoom, handleChange, allLocations } = props

    return (
        <div>
            <Textfield

                required
                id="name-input"
                onChange={() => { }}
                label="Name *"
                floatingLabel
                style={{ width: '200px' }}
                onChange={handleChange()("name")}
                    value={newRoom.name || ""}
            />
<br />
            <Textfield


                onChange={() => { }}
                label="Description"
                id="description-input"
                floatingLabel
                style={{ width: '200px' }}
                onChange={handleChange()("description")}
                    value={newRoom.description || ""}
            />

            {/* <div >
                <label>Name</label>
                <input
                    required
                    size="small"
                    id="name-input"
                    placeholder="Name"
                    type="text"
                    label="Name"
                    onChange={handleChange()("name")}
                    value={newRoom.name || ""}
                />
            </div>

            <div >
                <label>Description</label>
                <input
                    size="small"
                    type="text"
                    id="description-input"
                    placeholder="Description"
                    label="Description"
                    onChange={handleChange()("description")}
                    value={newRoom.description || ""}
                />
            </div> */}

            <div >
                <div className="form-group">
                    <label htmlFor="multi-location">Location</label>
                    <select className="custom-select" id="multi-location"
                        //multiple
                        onChange={handleChange()("location")}
                        value={newRoom.location ? newRoom.location._id : []}
                    // value={newRoom.location && newRoom.location[0]  ? newRoom.location[0]._id : []}
                    >
                        <option value="" disabled  >Select Location(s)</option>
                        {allLocations.map(location => (
                            <option key={location._id} value={location._id}
                            >{location.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}