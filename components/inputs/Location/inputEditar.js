
export default function InputEditar(props) {
    const { newLocation, allLocations, handleChange, createNewLocation, cancelCreateNewLocation, Editar } = props

    return (
        <div>
            <div className="modal fade" id="editCondition" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Edit Condition</h5>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                                &times;
            </button>
                        </div>
                        <div>
                            <div item xs={12} md={6}>
                                <label>Name</label>
                                <input
                                    required
                                    size="small"
                                    type="text"
                                    id="name-input"
                                    label="Name"
                                    onChange={handleChange()("name")}
                                    value={newLocation.name || ""}
                                />
                            </div>

                            <div item xs={12} md={6}>
                                <label>Description</label>
                                <input
                                type="text"
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
                                    type="number"
                                    id="streetNumber-input"
                                    label="Number"
                                    onChange={handleChange("address")("streetNumber")}
                                    value={newLocation.address ? newLocation.address.streetNumber : ""}
                                />
                            </div>

                            <div item xs={10} md={8}>
                                <label>Street</label>
                                <input
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                    type="text"
                                    id="country-input"
                                    label="Country"
                                    onChange={handleChange("address")("country")}
                                    value={newLocation.address ? newLocation.address.country : ""}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => cancelCreateNewLocation()}>Cancel</button>
                            <button type="button" className="btn btn-success" onClick={() => Editar()}><i className="fa fa-database">
                            </i> &nbsp; Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

InputEditar.defaultProps = {
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

/*

                            <div item xs={12} md={6}>
                                <button variant="contained" disabled={!newLocation.name} onClick={() => Editar()}>Edit location</button>
                            </div>

                            <div item xs={12} md={6}>
                                <button variant="contained" onClick={() => cancelCreateNewLocation()}>Cancel</button>
                            </div>
                        </div>*/