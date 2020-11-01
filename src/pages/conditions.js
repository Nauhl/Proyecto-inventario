import React, { useState, useEffect } from 'react';
import ConditionList from "../../components/lists/ConditionList";
import { getAllConditions, createNewCondition, updateCondition, deleteCondition } from "../../src/lib/ctrlCondition";
import ModalCondition from "../../components/modals/ModalCondition";
import "bootstrap/dist/css/bootstrap.min.css";
import { name } from 'faker';

export default function ConditionPage() {

  const [allConditionsState, setAllConditionsState] = useState([]);
  const [addCondition, setAddCondition] = useState({});
  const [editar, setEditar] = useState({});
  const [deleteCondition, setDeleteCondition] = useState({});

  useEffect(() => {
    getConditions();
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
  
  const EditConditions = (id, updateCondi) => {
    setEditar(false); 
    setAllConditionsState(allConditionsState.map(name => (name.id === id ? updateCondi : name)))
    };

  /**************** Delete condition */

  const BorrarCondition = (id) => {
    
    setAddCondition(addCondition.filter(name => name.id !== id))
  }

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

        borrar={BorrarCondition}
      />

      <ConditionList
        allConditions={allConditionsState}
      />


    </>
  )
};