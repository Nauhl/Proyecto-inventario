import React, { useState, useEffect } from 'react';
import ConditionList from "../../components/lists/ConditionList";
import { getAllConditions, createNewCondition, updateCondition, deleteCondition } from "../../src/lib/ctrlCondition";
import ModalCondition from "../../components/modals/ModalCondition";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ConditionPage() {

  const [allConditionsState, setAllConditionsState] = useState([]);
  const [addCondition, setAddCondition] = useState({});
  const [editar, setEditar] = useState({});

  useEffect(() => {
    getConditions();
    EditConditions
  }, []);

  const getConditions = () => {
    getAllConditions().then(conditions => {
      setAllConditionsState(conditions);
    });
  }
  
  /*const EditConditions = () => {
    updateCondition().then(conditions => { 
      setAllConditionsState(conditions)
    });
  }*/

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

  //****************************************************************************** */
  const handleEdit = name => e => {
    setEditar({
      ...editar,
      [name]: e.target.value
    });
    console.log(editar);
  };

  const EditConditions = () => {
    updateCondition(editar).then(condition => {
      getConditions()
    })
  };

  const handleClickEditCondition = () => {
    setAddCondition({})
  };

  return (
    <>

      <ModalCondition
        allConditions={allConditionsState}
        handleChange={handleChange}
        AddCondition={handleClickAddCondition}
        cancelAddCondition={handleClickCancelAddCondition}
        
        handleEdit={handleEdit}
        MetodoEditar={EditConditions}
        handleclickEditCondition={handleClickEditCondition}
      />

      <ConditionList
        allConditions={allConditionsState}
      />


    </>
  )
};