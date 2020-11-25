import { Textfield } from 'react-mdl';

export default function InputCategory(props) {

    const { allSubCategories, handleChange, newCategory } = props;

    return (
        <div >

            <Textfield

                required
                id="name-input"
                onChange={() => { }}
                label="Name *"
                floatingLabel
                style={{ width: '200px' }}
                value={newCategory.name || ""}
                onChange={handleChange()("name")}
            />
            {/* <div>
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
            </div> */}
            <br />

            <Textfield

                
                onChange={() => { }}
                label="Description"
                id="description-input"
                floatingLabel
                style={{ width: '200px' }}
                value={newCategory.description || ""}
                onChange={handleChange()("description")}
            />

            {/* <div className="row">
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
            </div> */}

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