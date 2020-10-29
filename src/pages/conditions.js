import styles from '../../styles/Home.module.css';
import fetch from 'isomorphic-unfetch';
import React, {useEffect, useState} from 'react';
import { getAllConditions, getCondition} from "../../src/lib/ctrlCondition";
import {Confirm, Button, Loader } from 'semantic-ui-react';

export default function ConditionPage() {

  const [allConditions, setAllConditions] = React.useState([]);
  //const [newCategory, setNewCategory] = React.useState({});
  
  React.useEffect(() => {
    getConditions();
  }, []);

  const getConditions = () => {
    getAllConditions().then(conditions => {
      setAllConditions(conditions);
    });
  }

  return allConditions && allConditions.length > 0 ? (
    <>
    <div className={styles.main}>
        <h2>Condition</h2>
        </div>
      <br />
      <div className={styles.container}>
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allConditions.map(condition => (
              <tr key={condition._id}>
                <td>{condition.name}</td>
                <td>{condition.description}</td>
                <td>{condition.isActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      
    </>
  ) : (
    <>
      <div className="spinner-border"></div>
    </>
  );
};