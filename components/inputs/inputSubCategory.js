
export default function InputSubCategory(props) {

    const { handleChange, newSubCategory } = props;

    return (

            <div>
                <div>
                    <label>Name</label>
                    <input
                        required
                        size="small"
                        type="text"
                        id="name-input"
                        label="Name"
                        placeholder="Write a name"
                        value={newSubCategory.name || ""}
                        onChange={handleChange()("name")}
                    />
                </div>

                <div>
                    <div>
                        <label>Description</label>
                        <input
                            size="small"
                            type="text"
                            id="description-input"
                            label="Description"
                            placeholder="Write a description"
                            value={newSubCategory.description || ""}
                            onChange={handleChange()("description")}
                        />
                    </div>
                </div>
            </div>
    )
}