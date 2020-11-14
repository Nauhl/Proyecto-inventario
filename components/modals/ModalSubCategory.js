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
      </Modal.Body>

      <Modal.Footer>
        <button className="btn btn-danger" variant="secondary" onClick={handleCloseSub}>
          Cancel
      </button>
        <div variant="primary" onClick={createNewSubCategory}>
          {editMode ?
            <button className="btn btn-outline-success"
              onClick={() => handleClickUpdateSubCategory()}>
              Update
            </button> :
            <button type="button" className="btn btn-outline-success"
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