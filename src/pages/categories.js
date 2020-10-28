import CategoriesList from '../../components/lists/CategoriesList';
import { getAllCategories, createNewCategory, updateCategory } from "../../src/lib/ctrlCategory";
import styles from '../../styles/Home.module.css';
import React, {useState, useEffect} from 'react';
import ModalAddCategory from '../../components/modals/CategoryModal';

import Skeleton from "react-loading-skeleton";

export default function CategoryPage() {
  
  /*const [data, setData] = useState(getAllCategories);
  const [loading, setLoading] =useState(true);*/

  const [allCategories, setAllCategories] = React.useState([]);
  const [newCategory, setNewCategory] = React.useState({});
  const [editMode, setEditMode] = React.useState(false);

  /*useEffect(() =>{
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  },[])*/

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

  const handleClickEditCategory = category => {
    setNewCategory(category)
    setEditMode(true)
    setOpenModalCategory(true);
  };

  /*const loader =()=>{
    return (
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
    )
  }

  if(loading){
    return (
      loader()
      )

  }
  else{*/

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
//}
  //)
};