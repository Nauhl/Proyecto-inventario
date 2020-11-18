import React, { useState, useEffect } from 'react';
import ConditionList from "../../components/lists/ConditionList";
import { getAllConditions, getCondition, createNewCondition, updateCondition, deleteCondition } from "../../src/lib/ctrlCondition";
import ModalCondition from "../../components/modals/ModalCondition";
import ModalConfirmDelete from "../../components/DeleteModal/ModalConfirmDelete";

export default function ConditionPage() {

  const [allConditionsState, setAllConditionsState] = React.useState([]);
  const [addCondition, setAddCondition] = React.useState({});
  const [showElements, setShowElements] = React.useState(true);

  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = React.useState(false);
  const [showModal, setshowModal] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);

  React.useEffect(() => {
    getConditions();
  }, []);

  const getConditions = () => {
    getAllConditions().then(conditions => {
      setAllConditionsState(conditions);
    });
  }

  const handleCloseModal = () => {
    console.log("handleCloseModal")
    setshowModal(false);
    setAddCondition({});
    setshowModal(false);
  };

  const handleCloseConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(false);
  };

  const handleClickAddCondition = () => {
    console.log("handleClickAddCondition")
    setshowModal(true);
    setEditMode(false);
    setAddCondition({});

  }

  const handleClickUpdateCondition = () => {
    updateCondition(addCondition).then(() => {
      handleCloseModal()
      getConditions();
    })
  }

  const DeleteConditionOnClick = () => {
    console.log("DELETING", addCondition);
    deleteCondition(addCondition._id).then(() => {
      getConditions();
      setAddCondition({});
      setShowConfirmDeleteModal(false);
    })
  }

  const handleChange = name => e => {
    setAddCondition({
      ...addCondition,
      [name]: e.target.value
    });
    console.log(addCondition);
  };

  const handleClickOnCreateNewCondition = () => {
    createNewCondition(addCondition).then((condition) => {
      getConditions();
      setAddCondition({})
      setShowElements(true);
      handleCloseModal()
    })
  };

  const handleClickEditCondition = conditionID => {
    getCondition(conditionID).then(condition => {
      console.log("FOUND IT", condition);
      setshowModal(true);
      setEditMode(true);
      setAddCondition(condition);
    })
  };

  // Abre el modal de delete
  const handleClickDeleteCondition = condition => {
    setAddCondition(condition);
    setShowConfirmDeleteModal(true);
  };

  return (
    <div>
      <ModalCondition
        open={showModal}
        handleClose={handleCloseModal}
        handleChange={handleChange}
        allConditions={allConditionsState}
        handleClickOnCreateNewCondition={handleClickOnCreateNewCondition}
        handleClickUpdateCondition={handleClickUpdateCondition}
        addCondition={addCondition}
        editMode={editMode}
      />

      <ModalConfirmDelete
        open={showConfirmDeleteModal}
        handleClose={handleCloseConfirmDeleteModal}
        handleConfirmDelete={DeleteConditionOnClick}
        item={addCondition}
      />

      <div className="card mb-3" >
        <div className="card-header"></div>
        <div className="card-body">
          <h4 className="card-title">Conditions</h4>
          <p className="card-text">In this page you can create, edit and delete Conditions.</p>
        </div>
      </div>

      {showElements ?
        <button className="btn btn-outline-success"
          onClick={() => handleClickAddCondition()}>
          New condition
        </button>
        :
        null
      }

      <div>
        <ConditionList
          showElements={showElements}
          allConditionsState={allConditionsState}
          handleClickAddCondition={handleClickAddCondition}
          handleClickEditCondition={handleClickEditCondition}
          handleClickDeleteCondition={handleClickDeleteCondition}
        />
      </div>
    </div>
  )
};