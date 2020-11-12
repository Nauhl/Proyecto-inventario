import React, { useState, useEffect } from 'react';
import ConditionList from "../../components/lists/ConditionList";
import { getAllConditions, getCondition, createNewCondition, updateCondition, deleteCondition } from "../../src/lib/ctrlCondition";
import ModalCondition from "../../components/modals/ModalCondition";
// import ConditionDelete from "../../components/DeleteModals/ConditionDelete";
import styles from '../../styles/Home.module.css';

export default function ConditionPage() {

  const [allConditionsState, setAllConditionsState] = React.useState([]);
  const [addCondition, setAddCondition] = React.useState({});
  const [showElements, setShowElements] = React.useState(true);

  const [showModal, setshowModal] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);

  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

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
    setShowDeleteModal(false);
  };

  //**********************   HandleChange ************************************ */

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

  const DeleteConditionOnClick = (conditionID) => {
    console.log(conditionID);
    deleteCondition(conditionID);
    handleCloseModal();
    getConditions();
  }
  // try {
  // const deleting = allConditionsState.filter((condition) => condition.conditionID!==conditionID)
  // console.log("DELETING", conditionID);
  // setAllConditionsState(deleting);
  // handleCloseModal();
  // deleteCondition(conditionID);
  // getConditions();
  // }catch (error) {
  //     console.log(error)

  // }


  // const DeleteConditionOnClick = () => {
  //   deleteCondition();
  //   getAllConditions();
  // }

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
  const handleClickDeleteCondition = conditionID => {
    getCondition(conditionID).then(condition => {
      console.log("FOUND IT", condition);
      setShowDeleteModal(true);
      //getCondition(condition);

    })
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

      <div className="card mb-3" >
        <div className="card-header"></div>
        <div className="card-body">
          <h4 className="card-title">Conditions</h4>
          <p className="card-text">In this page you can create, edit and delete Conditions.</p>
        </div>
      </div>

      <div>
        <ConditionList
          showElements={showElements}
          allConditionsState={allConditionsState}
          handleClickAddCondition={handleClickAddCondition}
          handleClickEditCondition={handleClickEditCondition}
          handleClickDeleteCondition={handleClickDeleteCondition}

          openn={showDeleteModal}
          handleClose={handleCloseModal}
          DeleteConditionOnClick={DeleteConditionOnClick}
        />
      </div>
    </div>
  )
};