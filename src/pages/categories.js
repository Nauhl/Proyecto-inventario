import CategoriesList from '../../components/lists/CategoriesList';
import SubCategoriesList from "../../components/lists/SubCategoriesList";
import styles from "../../styles/Home.module.css";
import { getAllCategories, createNewCategory, updateCategory, deleteCategory } from "../../src/lib/ctrlCategory";
import { getAllSubCategories, createNewSubCategory, updateSubCategory } from "../../src/lib/ctrlSubCategory";
import React, { useState, useEffect } from 'react';
import ModalCategory from '../../components/modals/ModalCategory';
import ModalSubCategory from "../../components/modals/ModalSubCategory";

export default function CategoryPage() {

  const [allCategories, setAllCategories] = React.useState([]);
  const [allSubCategories, setAllSubCategories] = React.useState([]);
  const [newCategory, setNewCategory] = React.useState({});
  const [borrar, setBorrar] = React.useState({});
  //const [newSubCategory, setNewSubCategory] = React.useState({});
  const [openModalCategory, setOpenModalCategory] = React.useState(false);
  //const [openModalSubCategory, setOpenModalSubCategory] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);

  //****** GET  ***** */
  
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
  
  const handleChange = name => event => {
    setNewCategory({
      ...newCategory,
      [name]: event.target.value
    });
    console.log(newCategory);
  };
  
  const handleCloseModal = () => {
    setOpenModalCategory(false);
  };

  
  //******** CREATE ********/
  
  const handleClickOnCreateNewCategory = () => {
    createNewCategory(newCategory).then(() => {
      setOpenModalCategory(false);
      getCategories();
    })
  };

  
  const handleClickOnCancelNewCategory = () => {
    setNewCategory({})
  };

  //********* UPDATE *********/

  //********* DELETE *********/

  const handleClickOnDeleteCategory = (id) => {
    deleteCategory(borrar.id).then(() => {
      setOpenModalCategory(false);
      setBorrar(id);
    })
    console.log(newCategory.id);
  };

  return allCategories ? (
    <>

      <ModalCategory 
      open={openModalCategory}
      handleClose={handleCloseModal}
      createNewCategory={handleClickOnCreateNewCategory}
      cancelCreateNewCategory={handleClickOnCancelNewCategory}
      newCategory={newCategory}
      handleChange={handleChange}
      deleteCategories={handleClickOnDeleteCategory}
      />
      <CategoriesList
        allCategories={allCategories}
      
      />
      <br />

      <ModalSubCategory />

      <SubCategoriesList
        allSubCategories={allSubCategories}
      />
      </>
  ) : (
      <>
      </>
    );
};