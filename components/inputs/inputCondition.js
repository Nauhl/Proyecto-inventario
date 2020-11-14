
export default function InputCondition(props) {
    const { addCondition, handleChange } = props

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
                    placeholder="Description"
                    label="Description"
                    onChange={handleChange("description")}
                    value={addCondition.description || ""}
                />
            </div>
            
        </div>
    )
}