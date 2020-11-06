
export default function InputCondition(props) {
    const { addCondition, handleChange, cancelCreateNewCondition, createNewCondition } = props

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
                    onChange={handleChange("name")}
                    value={addCondition.name || ""}
                />
            </div>

            <div >
                <label>Description</label>
                <input
                    type="text"
                    size="small"
                    id="description-input"
                    label="Description"
                    onChange={handleChange("description")}
                    value={addCondition.description || ""}
                />
            </div>
            
        </div>
    )
}


/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => cancelCreateNewLocation()}>Cancel</button>
                            <button type="button" className="btn btn-success" onClick={() => createNewLocation()}><i className="fa fa-database">
                            </i> &nbsp; Save</button>
                        </div>*/