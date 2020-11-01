
export default function LocationsInput(props) {
    const { newLocation, allLocations, handleChange, createNewLocation, cancelCreateNewLocation } = props

    return (
        <div>
            <div
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <div item xs={12} md={6}>
                    <label>Name</label>
                    <input
                        required
                        size="small"
                        id="name-input"
                        label="Name"
                        onChange={handleChange()("name")}
                        value={newLocation.name || ""}
                    />
                </div>

                <div item xs={12} md={6}>
                <label>Description</label>
                    <input
                        
                        size="small"
                        id="description-input"
                        label="Description"
                        onChange={handleChange()("description")}
                        value={newLocation.description || ""}
                    />
                </div>

                <div item xs={2} md={4}>
                <label>Street number</label>
                    <input
                        size="small"
                        id="streetNumber-input"
                        label="Number"
                        onChange={handleChange("address")("streetNumber")}
                        value={newLocation.address ? newLocation.address.streetNumber : ""}
                    />
                </div>

                <div item xs={10} md={8}>
                <label>Street</label>
                    <input
                        
                        size="small"
                        id="street-input"
                        label="Street"
                        onChange={handleChange("address")("street")}
                        value={newLocation.address ? newLocation.address.street : ""}
                    />
                </div>

                <div item xs={12} md={6}>
                <label>Street 2</label>
                    <input
                        
                        size="small"
                        id="street2-input"
                        label="Street 2"
                        onChange={handleChange("address")("street2")}
                        value={newLocation.address ? newLocation.address.street2 : ""}
                    />
                </div>

                <div item xs={12} md={6}>
                <label>City</label>
                    <input
                        
                        size="small"
                        id="city-input"
                        label="City"
                        onChange={handleChange("address")("city")}
                        value={newLocation.address ? newLocation.address.city : ""}
                    />
                </div>

                <div item xs={12} md={6}>
                <label>Province</label>
                    <input
                        
                        size="small"
                        id="province-input"
                        label="Province"
                        onChange={handleChange("address")("province")}
                        value={newLocation.address ? newLocation.address.province : ""}
                    />
                </div>

                <div item xs={12} md={6}>
                <label>Country</label>
                    <input
                        size="small"
                        id="country-input"
                        label="Country"
                        onChange={handleChange("address")("country")}
                        value={newLocation.address ? newLocation.address.country : ""}
                    />
                </div>

                <div item xs={12} md={6}>
                    <button variant="contained" disabled={!newLocation.name}  onClick={() => createNewLocation()}>Add location</button>
                </div>

                <div item xs={12} md={6}>
                    <button variant="contained" onClick={() => cancelCreateNewLocation()}>Cancel</button>
                </div>

            </div>

        </div>
    )
}

LocationsInput.defaultProps = {
    newLocation: {
        name: "",
        description: "",
        isActive: true,
        user: "",
        pictures: "",
        files: "",
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
}