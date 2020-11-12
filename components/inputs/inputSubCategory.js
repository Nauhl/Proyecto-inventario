
export default function InputSubCategory(props) {

    const { openSub, handleCloseSub, handleChange, createNewSubCategory, editMode, newSubCategory,
        handleClickUpdateSubCategory, handleClickOnCreateNewSubCategory } = props;

    return (

            <div>
                <div>
                    <label>Name</label>
                    <input
                        //fullWidth
                        required
                        size="small"
                        id="name-input"
                        label="Name"
                        placeholder="Write a name"
                        // variant="outlined"
                        value={newSubCategory.name || ""}
                        onChange={handleChange("name")}
                    />
                </div>

                <div>
                    <div>
                        <label>Description</label>
                        <input
                            //fullWidth
                            size="small"
                            id="description-input"
                            label="Description"
                            placeholder="Write a description"
                            // variant="outlined"
                            value={newSubCategory.description || ""}
                            onChange={handleChange("description")}
                        />
                    </div>
                </div>
            </div>
    )
}