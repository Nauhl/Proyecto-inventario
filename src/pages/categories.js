import CategoriesList from '../../components/lists/CategoriesList';
import SubCategoriesList from "../../components/lists/SubCategoriesList";
import styles from "../../styles/Home.module.css";
import { getAllCategories, createNewCategory, updateCategory } from "../../src/lib/ctrlCategory";
import { getAllSubCategories, createNewSubCategory, updateSubCategory } from "../../src/lib/ctrlSubCategory";
import React, { useState, useEffect } from 'react';
import ModalAddCategory from '../../components/modals/CategoryModal';
import ModalAddSubCategory from "../../components/modals/ModalAddSubCategory";

export default function CategoryPage() {

  const [allCategories, setAllCategories] = React.useState([]);
  const [allSubCategories, setAllSubCategories] = React.useState([]);
  const [newCategory, setNewCategory] = React.useState({});
  const [newSubCategory, setNewSubCategory] = React.useState({});
  
  
  React.useEffect(() => {
    getCategories();
    getSubCategories();
  }, []);

  const getCategories = () => {
    getAllCategories().then(categories => {
      setAllCategories(categories);
    });
  }

  const getSubCategories = () => {
    getAllSubCategories().then(categories => {
      setAllSubCategories(categories);
    });
  }

  //************Return */

  return allCategories ? (
    <>

      <ModalAddCategory />
      <CategoriesList
        allCategories={allCategories}
        //editCategory={handleClickEditCategory}
        //handleChange={handleChange}
        //createNewCategory={handleClickOnCreateNewCategory}
        newCategory={newCategory}
      //editMode={editMode}
      />

      <br />

      <ModalAddSubCategory />
      <SubCategoriesList
        allSubCategories={allSubCategories}
      />

      <a href="#" className={styles.goToUpBTN}><i className="far fa-chevron-double-up"></i></a>
    </>
  ) : (
      <>
      </>
    );
};