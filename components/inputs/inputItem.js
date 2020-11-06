import { useRef } from 'react';

export default function InputItem(props) {
    const { newItem, handleChange, cancelCreateNewItem, createNewItem } = props

    const inputFileRef = useRef()

    const handleButton = (e) => {
        e.preventDefault()
        //console.log(allLocations)
        console.log(inputFileRef.current.files)
    }

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

            <div>
                <label>Pictures</label>
                <input
                    type="file" ref={inputFileRef}
                    size="small"
                    id="pictures-input"
                    label="Pictures"
                    placeholder="Insert new Picture"
                    onChange={handleChange()("pictures")}
                    value={newItem.pictures || ""} />

            </div>

            {/* El warning sale por el como empieza la lista, 
        quiero decir se debe ingresar primero las variables que se encuentran dentro de addres */  }

            <div >
                <label>Location</label>
                <input
                    size="small"
                    type="text"
                    id="location-input"
                    label="Location"
                    onChange={handleChange()("location")}
                    value={newItem.location || ""} />
            </div>

            <div >
                <label>Room</label>
                <input
                    type="text"
                    size="small"
                    id="room-input"
                    label="Room"
                    onChange={handleChange()("room")}
                    value={newItem.room || ""} />
            </div>

            <div >
                <label>Category</label>
                <input
                    type="text"
                    size="small"
                    id="category-input"
                    label="Category"
                    onChange={handleChange()("category")}
                    value={newItem.category || ""} />
            </div>

            <div >
                <label>Condition</label>
                <input
                    type="text"
                    size="small"
                    id="condition-input"
                    label="Condition"
                    onChange={handleChange()("condition")}
                    value={newItem.condition || ""} />
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
                <label>Purchase Date</label>
                <input
                    size="small"
                    type="text"
                    id="purchaseDate-input"
                    label="Purchase Date"
                    onChange={handleChange()("purchaseDate")}
                    value={newItem.purchaseInfo ? newItem.purchaseInfo.purchaseDate : ""} />
            </div>

            <div >
                <label>Cost</label>
                <input
                    size="small"
                    type="number"
                    id="cost-input"
                    label="Cost"
                    onChange={handleChange()("cost")}
                    value={newItem.purchaseInfo ? newItem.purchaseInfo.cost : ""} />
            </div>
        </div>
    )
}

InputItem.defaultProps = {
    newItem: {
        name: "",
        description: "",
        pictures: "",
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
            purchaseDate: "",
            cost: ""
        }
    }
}
