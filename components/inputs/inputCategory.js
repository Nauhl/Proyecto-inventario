
export default function InputCategory(props) {

    const { allSubCategories, handleChange, newCategory } = props;

    return (
        <div >
            <div>
                <label>Name</label>
                <input
                    required
                    size="small"
                    type="text"
                    id="name-input"
                    label="Name"
                    placeholder="Name"
                    value={newCategory.name || ""}
                    onChange={handleChange()("name")}
                />
            </div>

            <div className="row">
                <div className="col">
                    <label>Description</label>
                    <input
                        size="small"
                        type="text"
                        id="description-input"
                        label="Description"
                        placeholder="Description"
                        value={newCategory.description || ""}
                        onChange={handleChange()("description")}
                    />
                </div>
            </div>

            <div >
                <form >
                    <div className="form-group">
                        <label htmlFor="multi-subcategories">Subcategories</label>
                        <select className="custom-select" id="multi-subcategories"
                            //multiple
                            value={newCategory.subCategories && newCategory.subCategories[0] ? newCategory.subCategories[0]._id : []}
                            onChange={handleChange()("subCategories")}
                        >
                            <option value="" disabled  >Select subCategory(s)</option>
                            {allSubCategories.map(subCategory => (
                                <option key={subCategory._id} value={subCategory._id}>
                                    {subCategory.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}