import Modal from "react-bootstrap/Modal";
import styles from "../../styles/Home.module.css";

const ModalConfirmDelete = props => {

  const { handleClose, open, handleConfirmDelete, item } = props;

  return (

    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton  className="btn btn-secondary">
        <Modal.Title>Be Careful</Modal.Title>

      </Modal.Header>

      <Modal.Body className={styles.text3}>
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
        ><i class="fas fa-trash-alt"></i>&nbsp;
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
