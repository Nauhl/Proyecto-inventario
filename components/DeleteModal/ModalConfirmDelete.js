import Modal from "react-bootstrap/Modal";

const ModalConfirmDelete = props => {

  const { handleClose, open, handleConfirmDelete, item } = props;

  return (

    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Be Careful</Modal.Title>

      </Modal.Header>

      <Modal.Body>
        ARE YOU SURE YOU WANT TO DELETE THIS ITEM: <strong>{item.name}</strong>?
      </Modal.Body>

      <Modal.Footer>

        <button
          className="btn btn-secondary"
          onClick={handleClose}
        >
          Cancel
        </button>

        <button
          className="btn btn-danger"
          onClick={handleConfirmDelete}
        >
          DELETE
        </button>
      </Modal.Footer>
    </Modal>
  )
};

ModalConfirmDelete.defaultProps = {
  editMode: true
};

export default ModalConfirmDelete;
