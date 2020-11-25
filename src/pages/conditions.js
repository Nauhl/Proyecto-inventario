import React, { useState, useEffect } from 'react';
import ConditionList from "../../components/lists/ConditionList";
import { getAllConditions, getCondition, createNewCondition, updateCondition, deleteCondition } from "../../src/lib/ctrlCondition";
import ModalCondition from "../../components/modals/ModalCondition";
import ModalConfirmDelete from "../../components/DeleteModal/ModalConfirmDelete";
import { Grid, Cell } from 'react-mdl';
import styles from "../../styles/Home.module.css";

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

    <>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className={styles.landingGrid} >
          &nbsp; &nbsp;
                <Cell col={4}>
            <img className="w-full responsive-img" src="/undraw_Preferences_re_49in.svg"
              className={styles.avatarImg}
            />
            <div className={styles.vanished}>
              <ConditionList
                allConditionsState={allConditionsState}
              />
            </div>
          </Cell>
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          <Cell col={4} className="mdl-color-text--white">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className={styles.text}>Hi Welcome to your Conditions</h2>
            <h4 className={styles.text}>Section where everyone can do a new Condition for the new Items</h4>
          </Cell>
        </Grid>
      </div>
      <> </>
      <br />
      <br />
      <div className="container">

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

        {/* <div className="container">
          <div className={styles.main}>
            <h3 className={styles.text}>
              You can add a condition to allow to the items about something like "in good conditions or state" or "it is too old"
        </h3>
          </div>
        </div> */}

        <div className="card mb-3" >
          <div className="card-header" style={{ background: '#1CB5E0' }}></div>
          <div className="card-body">
            <h4 className="card-title">Conditions</h4>
            <p className="card-text">In this page you can create, edit and delete Conditions.</p>
          </div>
        </div> 

        <br />  

        {showElements ?
          <button className="btn btn-outline-success"
            onClick={() => handleClickAddCondition()}><i class="fas fa-plus-circle"></i>&nbsp;
            New condition
        </button>
          :
          null
        }
        <br />        
        <br />

        {/* 
<FABButton colored ripple>
    <Icon name="add" onClick={() => handleClickAddCondition()}/>
</FABButton> */}

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
    </>
  )
};