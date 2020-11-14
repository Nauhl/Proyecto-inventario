//import { useRef } from 'react';

export default function InputItem(props) {
    const { newItem, handleChange, allLocations, allRooms, allCategories, allConditions} = props

    return (
        <div>
            <div >
                <label>Name</label>
                <input
                    required
                    size="small"
                    type="text"
                    id="name-input"
                    label="Name"
                    onChange={handleChange()("name")}
                    value={newItem.name || ""}
                />
            </div>

            <div >
                <label>Description</label>
                <input
                    type="text"
                    size="small"
                    id="description-input"
                    label="Description"
                    onChange={handleChange()("description")}
                    value={newItem.description || ""}
                />
            </div>

            <div >
                <form >
                    <div className="form-group">
                        <label htmlFor="multi-location">Location</label>
                        <select className="custom-select" id="multi-location"
                            //multiple
                            value={newItem.location ? newItem.location._id : []}
                            // value={newItem.location || []}
                            onChange={handleChange()("location")}
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

            <div >
                <form >
                    <div className="form-group">
                        <label htmlFor="multi-room">Room</label>
                        <select className="custom-select" id="multi-room"
                            //multiple
                            value={newItem.room ? newItem.room._id : []}
                            // value={newItem.room || []}
                            onChange={handleChange()("room")}
                        >
                            <option value="" disabled  >Select Room(s)</option>
                            {allRooms.map(room => (
                                <option key={room._id} value={room._id}
                                >{room.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>

            <div >
                <form >
                    <div className="form-group">
                        <label htmlFor="multi-category">Category</label>
                        <select className="custom-select" id="multi-category"
                            //multiple
                            value={newItem.category ? newItem.category._id : []}
                            // value={newItem.category || []}
                            onChange={handleChange()("category")}
                        >
                            <option value="" disabled  >Select Category(s)</option>
                            {allCategories.map(category => (
                                <option key={category._id} value={category._id}
                                >{category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>

            <div >
                <form >
                    <div className="form-group">
                        <label htmlFor="multi-condition">Condition</label>
                        <select className="custom-select" id="multi-condition"
                            //multiple
                            value={newItem.condition ? newItem.condition._id : []}
                            // value={newItem.condition || []}
                            onChange={handleChange()("condition")}
                        >
                            <option value="" disabled  >Select Condition(s)</option>
                            {allConditions.map(condition => (
                                <option key={condition._id} value={condition._id}
                                >{condition.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>


            <div >
                <label>Estimated Value</label>
                <input
                    type="number"
                    size="small"
                    id="estimatedValue-input"
                    label="Estimated Value"
                    onChange={handleChange()("estimatedValue")}
                    value={newItem.estimatedValue || ""} />
            </div>

            <div >
                <label>Model</label>
                <input
                    size="small"
                    type="text"
                    id="model-input"
                    label="Model"
                    onChange={handleChange()("model")}
                    value={newItem.model || ""} />
            </div>

            <div >
                <label>Brand</label>
                <input
                    size="small"
                    type="text"
                    id="brand-input"
                    label="Brand"
                    onChange={handleChange()("brand")}
                    value={newItem.brand || ""} />
            </div>

            <div >
                <label>Serial Number</label>
                <input
                    size="small"
                    type="text"
                    id="serialNumber-input"
                    label="Serial Number"
                    onChange={handleChange()("serialNumber")}
                    value={newItem.serialNumber || ""} />
            </div>

            <div >
                <label>Notes</label>
                <input
                    size="small"
                    type="text"
                    id="notes-input"
                    label="Notes"
                    onChange={handleChange()("notes")}
                    value={newItem.notes || ""} />
            </div>

            <div >
                <label>Cost</label>
                <input
                    size="small"
                    type="number"
                    id="cost-input"
                    label="Cost"
                    onChange={handleChange("purchaseInfo")("cost")}
                    value={newItem.purchaseInfo ? newItem.purchaseInfo.cost : ""} />
            </div>
        </div>
    )
}

InputItem.defaultProps = {
    newItem: {
        name: "",
        description: "",
        //pictures: "",
        location: "",
        room: "",
        category: "",
        condition: "",
        estimatedValue: "",
        model: "",
        brand: "",
        serialNumber: "",
        notes: "",
        purchaseInfo: {
            cost: ""
        }
    }
}