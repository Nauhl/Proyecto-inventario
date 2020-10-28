import CategoriesList from '../../components/lists/CategoriesList';
import SubCategoriesList from "../../components/lists/SubCategoriesList";
import { getAllCategories, createNewCategory, updateCategory } from "../../src/lib/ctrlCategory";
import { getAllSubCategories, createNewSubCategory, updateSubCategory } from "../../src/lib/ctrlSubCategory";
import React, {useState, useEffect} from 'react';
import ModalAddCategory from '../../components/modals/CategoryModal';
import ModalAddSubCategory from "../../components/modals/ModalAddSubCategory";
//import Skeleton from "react-loading-skeleton";

export default function CategoryPage() {
  

  const [allCategories, setAllCategories] = React.useState([]);
  const [allSubCategories, setAllSubCategories] = React.useState([]);
  const [newCategory, setNewCategory] = React.useState({});
  const [newSubCategory, setNewSubCategory] = React.useState({});
  /*const [openModalCategory, setOpenModalCategory] = React.useState(false);
  const [openModalSubCategory, setOpenModalSubCategory] = React.useState(false);
  //const [modalEditar, setModalEditar] = useState(false);
  const [editMode, setEditMode] = React.useState(false);*/


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

  /*const handleCloseModal = () => {
    setOpenModalCategory(false);
    setEditMode(false);
  };

  const handleCloseModalSubCategory = () => {
    setOpenModalSubCategory(false);
    setEditMode(false);
  };

  const handleChange = name => event => {
    setNewCategory({
      ...newCategory,
      [name]: event.target.value
    });
  };

  const handleChangeSubCategory = name => event => {
    setNewSubCategory({
      ...newSubCategory,
      user: user._id,
      [name]: event.target.value
    });
  };

  const handleClickOnCreateNewCategory = () => {
    console.log("SAVING", { editMode, newCategory })
    if (editMode) {
      updateCategory(newCategory).then(() => {
        //setOpenModalCategory(false);
        setEditMode(false);
        getCategories();
        //getSubCategories();
      })
    } else {
      createNewCategory(newCategory).then(() => {
        //setOpenModalCategory(false);
        setEditMode(false);
        getCategories();
        //getSubCategories();
      })
    }
  };
  
  const handleClickOnCreateNewSubCategory = () => {
    createNewSubCategory(newSubCategory).then(subCategory => {
      setOpenModalSubCategory(false);
      setEditMode(false);
    })
  };

  const handleClickOnCancelNewCategory = () => {
    setNewCategory({})
    setEditMode(false);
  };

  const handleClickOnCancelNewSubCategory = () => {
    setNewSubCategory({})
  };

  const handleClickEditCategory = category => {
    setNewCategory(category)
    setEditMode(true)
    setOpenModalCategory(true);
  };*/
  
  //Categories Call Methods

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
      
      <SubCategoriesList 
      allSubCategories={allSubCategories}
      />

    </>
  ) : (
    <>
      
    </>
  );
};