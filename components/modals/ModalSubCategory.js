import Modal from "react-bootstrap/Modal";
import InputSubCategory from "../inputs/inputSubCategory";
const ModalSubCategory = props => {

  const { openSub, handleCloseSub, handleChange, createNewSubCategory, editMode, newSubCategory,
    handleClickUpdateSubCategory, handleClickOnCreateNewSubCategory } = props;

  return (

    <Modal show={openSub} onHide={handleCloseSub}>
      <Modal.Header closeButton>
        <Modal.Title>{editMode ? `Modifying ${newSubCategory.name}` : `Add a SubCategory`}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InputSubCategory 
        newSubCategory={newSubCategory}
        handleChange={handleChange}
        />
      {/* <div className="container">
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
        </div> */}
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-danger" variant="secondary" onClick={handleCloseSub}>
          Cancel
      </button>
        <div variant="primary" onClick={createNewSubCategory}>
          {editMode ?
            <button className="btn btn-success"
              variant="success" size="sm"
              onClick={() => handleClickUpdateSubCategory()}>
              Update
            </button> :
            <button type="button" className="btn btn-success"
              onClick={() => handleClickOnCreateNewSubCategory()}>
              <i className="fa fa-database">
              </i> &nbsp; Save </button>}
        </div>
      </Modal.Footer>
    </Modal>
  )
};

ModalSubCategory.defaultProps = {
  editMode: true
};

export default ModalSubCategory;