import CategoriesList from '../../components/lists/CategoriesList';
import SubCategoriesList from "../../components/lists/SubCategoriesList";
import styles from "../../styles/Home.module.css";
import { getAllCategories, createNewCategory, updateCategory } from "../../src/lib/ctrlCategory";
import { getAllSubCategories, createNewSubCategory, updateSubCategory } from "../../src/lib/ctrlSubCategory";
import React, { useState, useEffect } from 'react';
import ModalAddCategory from '../../components/modals/CategoryModal';
import ModalAddSubCategory from "../../components/modals/ModalAddSubCategory";
import {makeStyles} from '@material-ui/core/styles';
import { Modal, Button, TextField } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

export default function CategoryPage() {

  const [allCategories, setAllCategories] = React.useState([]);
  const [allSubCategories, setAllSubCategories] = React.useState([]);
  const [newCategory, setNewCategory] = React.useState({});
  const [newSubCategory, setNewSubCategory] = React.useState({});

  
  const [List, setList]=useState({
    name: '',
    description:'',
    subCategories: ''
  })

  //****************************** */
  const [modalInsertar, setModalInsertar] = useState(false);
  
  const styles= useStyles();

  React.useEffect(() => {
    getCategories();
    getSubCategories();
  }, []);

  //*********************** METHODS */

  
  const handleChange=e=>{
    const {name, value}=e.target;
    setList(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(List);
  }

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

  
  const peticionPost=async ()=>{
    await axios.post(getAllCategories, List)
    .then(response=>{
      setList(getCategories.concat(response.getCategories))
      abrirCerrarModalInsertar()
    })
  }

  
  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  }
  
  const selectCategory=(lista, caso)=>{
    setList(lista);
    (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }



  //******************BODY  */
  
  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nueva Consola</h3>
      <TextField name="name" className={styles.inputMaterial} label="Nombre" onChange={handleChange}/>
      <br />
      <TextField name="description" className={styles.inputMaterial} label="Empresa" onChange={handleChange}/>
      <br />
      <TextField name="subCategories" className={styles.inputMaterial} label="Lanzamiento" onChange={handleChange}/>
      <br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  

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

      <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>

      <a href="#" className={styles.goToUpBTN}><i className="far fa-chevron-double-up"></i></a>
    </>
  ) : (
      <>
      </>
    );
};