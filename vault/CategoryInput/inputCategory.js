import { getAllSubCategories } from "../../src/lib/ctrlSubCategory";


export default function InputCategory(props) {
    
    const { handleClose, newCategory, handleChange, allSubCategories, cancelCreateNewCategory, createNewCategory } = props

    

    return (
        <>
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
                        value={newCategory.name || ""}
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
                        value={newCategory.description || ""}
                    />
                </div>
            </div>
        </>
    )
}
/*  MenuItem value="" disabled

<Grid item xs={6}>
                    <Button variant="secondary"
                        className={classes.fillAvailable}
                        //onClick={handleClose}
                        disabled>
                        Add picture
                        </Button>
                </Grid>

                <Grid item xs={6}>
                    <Button variant="secondary"
                        className={classes.fillAvailable}
                        //onClick={handleClose}
                        disabled>
                        Add file
                        </Button>
                </Grid>*/



/*
<InputLabel id="multiselect-subCategories-label">Sub Categories</InputLabel>
    <Select
        labelId="multiselect-subCategories-label"
        id="multiselect-subCategories"
        multiple
        value={newCategory.subCategories || []}
        onChange={handleChange("subCategories")}
        input={<Input />}
        MenuProps={MenuProps}
    >
        <tbody>Select subCategory(s)
        {allSubCategories.map(subCategory => (
            <MenuItem key={subCategory._id} value={subCategory._id}>{subCategory.name}</MenuItem>
        ))}
        </tbody>
    </Select>
</form>
*/