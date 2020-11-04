import { makeStyles, useTheme } from "@material-ui/core/styles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputCondition from "../inputs/ConditionInput/inputCondition";

const useStyles = makeStyles(theme => ({

}));

const ModalCondition = props => {
    const classes = useStyles();
    // const { handleClose, open, allLocations, handleChange, createNewLocation, cancelCreateNewLocation, newLocation, editMode } = props;
    const { handleClose, open, allConditions, addCondition, editMode, handleChange, handleClickUpdateCondition, createNewCondition, handleClickOnCreateNewCondition, cancelCreateNewCondition } = props;

    return (

        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{editMode ? `Modifying ${addCondition.name}` : `Add a new location`}</Modal.Title>

            </Modal.Header>

            <Modal.Body>
                <InputCondition
                    addCondition={addCondition}
                    handleChange={handleChange}
                />

            </Modal.Body>

            <Modal.Footer>

                <div>FOOTER</div>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>

                <div variant="primary" onClick={createNewCondition}>
                    {editMode ? <Button
                        variant="success" size="sm"
                        onClick={() => handleClickUpdateCondition()}
                    >
                        UPDATE
        </Button>
                        :
                        <Button type="button" className="btn btn-success" onClick={() => handleClickOnCreateNewCondition()}><i className="fa fa-database">
                        </i> &nbsp; Save</Button>}
                </div>
            </Modal.Footer>
        </Modal>
    )
};

ModalCondition.defaultProps = {
    editMode: true
};

export default ModalCondition;