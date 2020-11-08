
export default function InputSubCategory(props) {

    const { openSub, handleCloseSub, handleChange, createNewSubCategory, editMode, newSubCategory,
        handleClickUpdateSubCategory, handleClickOnCreateNewSubCategory } = props;

    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <label>Name</label>
                    <input
                        //fullWidth
                        required
                        size="small"
                        id="name-input"
                        label="Name"
                        // variant="outlined"
                        value={newSubCategory.name || ""}
                        onChange={handleChange("name")}
                    />
                </div>

                <div className="row">
                    <div className="col">
                        <label>Description</label>
                        <input
                            //fullWidth
                            size="small"
                            id="description-input"
                            label="Description"
                            // variant="outlined"
                            value={newSubCategory.description || ""}
                            onChange={handleChange("description")}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}