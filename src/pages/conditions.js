import styles from '../../styles/Home.module.css';
import ConditionList from '../../components/lists/ConditionList';
import React, {useEffect, useState} from 'react';
import { getAllConditions, getCondition} from "../../src/lib/ctrlCondition";
import Button from "react-bootstrap/Button";

export default function ConditionPage() {

  const [allConditions, setAllConditions] = React.useState([]);
  
  React.useEffect(() => {
    getConditions();
  }, []);

  const getConditions = () => {
    getAllConditions().then(conditions => {
      setAllConditions(conditions);
    });
  }

  return allConditions ? (
    <>
    
    <ConditionList 
    allConditions={allConditions}
    />
    </>
  ) : (
    <>
      <div className="spinner-border"></div>
    </>
  );
};