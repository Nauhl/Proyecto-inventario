import Modal from "react-bootstrap/Modal";
import InputSubCategory from "../inputs/inputSubCategory";
const ModalSubCategory = props => {

  const { openSub, handleCloseSub, handleChange, createNewSubCategory, editMode, newSubCategory,
    handleClickUpdateSubCategory, handleClickOnCreateNewSubCategory } = props;

  return (

    <Modal show={openSub} onHide={handleCloseSub}>
      <Modal.Header closeButton className="bg-info">
        <Modal.Title>{editMode ? `Modifying ${newSubCategory.name}` : `Add a SubCategory`}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div className="alert alert-danger" role="alert">
                        The fields with <strong>( * )</strong> are required
                    </div>
        <InputSubCategory 
        newSubCategory={newSubCategory}
        handleChange={handleChange}
        />
      </Modal.Body>

      <Modal.Footer className="bg-secondary">
        <button className="btn btn-danger" variant="secondary" onClick={handleCloseSub}>
          Cancel
      </button>
        <div variant="primary" onClick={createNewSubCategory}>
          {editMode ?
            <button className="btn btn-info"
              onClick={() => handleClickUpdateSubCategory()}>
                <i className="fas fa-pen-square"></i>&nbsp;
              Update
            </button> :
            <button type="button" className="btn btn-info"
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