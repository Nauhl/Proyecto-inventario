import CategoriesList from '../../components/lists/CategoriesList';
import { getAllCategories, createNewCategory, updateCategory } from "../../src/lib/ctrlCategory";
import styles from '../../styles/Home.module.css';
import React from 'react';
import ModalAddCategory from '../../components/modals/CategoryModal';

export default function CategoryPage() {

  const [allCategories, setAllCategories] = React.useState([]);
  const [newCategory, setNewCategory] = React.useState({});
  
  const [editMode, setEditMode] = React.useState(false);


  React.useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    getAllCategories().then(categories => {
      setAllCategories(categories);
    });
  }
  
   const handleChange = name => event => {
    setNewCategory({
      ...newCategory,
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

  //CategoriesList()

  /*const handleClickEditCategory = category => {
    setNewCategory(category)
    setEditMode(true)
    setOpenModalCategory(true);
  };*/

  return allCategories ? (
    <>

    <ModalAddCategory />

      <div item="true" xs={12}></div>
      <CategoriesList
        allCategories={allCategories}
        //editCategory={handleClickEditCategory}
        handleChange={handleChange}
        createNewCategory={handleClickOnCreateNewCategory}
        newCategory={newCategory}
        editMode={editMode}
      />

    </>
  ) : (
    <>
      <div className="spinner-border"></div>
    </>
  );
  //)
};