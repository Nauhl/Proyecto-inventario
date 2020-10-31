import React, { useState, useEffect } from 'react';
import ConditionList from "../../components/lists/ConditionList";
import { getAllConditions, createNewCondition, updateCondition } from "../../src/lib/ctrlCondition";
import ModalCondition from "../../components/modals/ModalCondition";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ConditionPage() {
  
  const [allConditionsState, setAllConditionsState] = useState([]);
  const [addCondition, setAddCondition] = useState({});

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
  };

  const handleClickAddCondition = () => {

    createNewCondition(addCondition).then(condition => {
      getConditions()
    })
  };

  const handleClickCancelAddCondition = () => {
    setAddCondition({})
  };

  return (
    <>

      <ModalCondition
              allConditions={allConditionsState}
              handleChange={handleChange}
              AddCondition={handleClickAddCondition}
              cancelAddCondition={handleClickCancelAddCondition}
        />

      <ConditionList
              allConditions={allConditionsState}
            />
            
            
    </>
  ) 
};