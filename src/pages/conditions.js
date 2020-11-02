import React, { useState, useEffect } from 'react';
import ConditionList from "../../components/lists/ConditionList";
import { getAllConditions, createNewCondition, updateCondition, deleteCondition } from "../../src/lib/ctrlCondition";
import ModalCondition from "../../components/modals/ModalCondition";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ConditionPage() {

  const [allConditionsState, setAllConditionsState] = useState([]);
  const [addCondition, setAddCondition] = useState({});

  const [openModalCondition, setOpenModalCondition] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [deleteCondition, setDeleteCondition] = useState([]);

  useEffect(() => {
    getConditions();
  }, []);

  const getConditions = () => {
    getAllConditions().then(conditions => {
      setAllConditionsState(conditions);
    });
  }

  //**********************   HandleChange ************************************ */
  const handleChange = name => e => {
    setAddCondition({
      ...addCondition,
      [name]: e.target.value
    });
    console.log(addCondition);
  };

  const handleClickAddCondition = () => {
    createNewCondition(addCondition).then(condition => {
      getConditions()
    })
  };

  const handleClickCancelAddCondition = () => {
    setAddCondition({})
  };

  //**************    Edit Condition       ******************************* */
  
  /*const handleCloseModal = () => {
    setOpenModalCondition(false);
    setEditMode(false);
  };*/
  
  const handleEdit = () => {
    console.log ("guardado", {editMode })
    if (editMode){
    updateCondition(addCondition).then(() => {
    setEditMode(false);
    })
  } else {
      console.log("no guardado");
    }
  };
  
  const handleClickEditCondition = condition => {
    setAddCondition(condition)
    setEditMode(true)
    //setOpenModalCategory(true);
  };

  /**************** Delete condition */

  const BorrarCondition = () => {
      setAddCondition(deleteCondition.filter(name => name.id !== id));
      console.log(setAllConditionsState);
  }

  return (
    <>

      <ModalCondition
        allConditions={allConditionsState}
        handleChange={handleChange}
        AddCondition={handleClickAddCondition}
        cancelAddCondition={handleClickCancelAddCondition}

        editMode={editMode}
        editCondition={handleClickEditCondition}
      />

      <ConditionList
        allConditions={allConditionsState}
      />

      
    </>
  )
};