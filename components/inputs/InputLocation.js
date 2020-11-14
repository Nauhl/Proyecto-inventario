
export default function InputLocation(props) {
    const { newLocation, handleChange } = props

    return (
        <div>
            <div >
                <label>Name</label>
                <input
                    required
                    size="small"
                    type="text"
                    id="name-input"
                    placeholder="Name"
                    label="Name"
                    onChange={handleChange()("name")}
                    value={newLocation.name || ""}
                />
            </div>

            <div >
                <label>Description</label>
                <input
                    type="text"
                    size="small"
                    id="description-input"
                    placeholder="Description"
                    label="Description"
                    onChange={handleChange()("description")}
                    value={newLocation.description || ""}
                />
            </div>

        <div >
                <label>Status</label>
                <input
                    size="small"
                    type="text"
                    id="status-input"
                    placeholder="Status"
                    label="Status"
                    onChange={handleChange()("status")}
                    value={newLocation.status || ""}
                />
            </div>

            <div >
                <label>Street number</label>
                <input
                    size="small"
                    type="number"
                    id="streetNumber-input"
                    placeholder="Street Number"
                    label="Street Number"
                    onChange={handleChange("address")("streetNumber")}
                    value={newLocation.address ? newLocation.address.streetNumber : ""}
                />
            </div>

            <div >
                <label>Street</label>
                <input
                    type="text"
                    size="small"
                    id="street-input"
                    placeholder="Street"
                    label="Street"
                    onChange={handleChange("address")("street")}
                    value={newLocation.address ? newLocation.address.street : ""}
                />
            </div>

            <div >
                <label>Street 2</label>
                <input
                    type="text"
                    size="small"
                    id="street2-input"
                    placeholder="Street 2"
                    label="Street 2"
                    onChange={handleChange("address")("street2")}
                    value={newLocation.address ? newLocation.address.street2 : ""}
                />
            </div>

            <div >
                <label>City</label>
                <input
                    type="text"
                    size="small"
                    id="city-input"
                    placeholder="City"
                    label="City"
                    onChange={handleChange("address")("city")}
                    value={newLocation.address ? newLocation.address.city : ""}
                />
            </div>

            <div >
                <label>Province</label>
                <input
                    type="text"
                    size="small"
                    id="province-input"
                    placeholder="Province"
                    label="Province"
                    onChange={handleChange("address")("province")}
                    value={newLocation.address ? newLocation.address.province : ""}
                />
            </div>

            <div >
                <label>Country</label>
                <input
                    size="small"
                    type="text"
                    id="country-input"
                    placeholder="Country"
                    label="Country"
                    onChange={handleChange("address")("country")}
                    value={newLocation.address ? newLocation.address.country : ""}
                />
            </div>
        </div>
    )
}

/*InputLocation.defaultProps = {
    newLocation: {
        name: "",
        description: "",
        //isActive: true,
        //user: "",
        //pictures: "",
        //files: "",
        status: "",
        address: {
            streetNumber: "",
            street: "",
            street2: "",
            city: "",
            province: "",
            country: ""
        }
    }
}*/