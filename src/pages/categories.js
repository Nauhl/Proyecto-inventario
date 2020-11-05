import { getAllCategories, getCategory, createNewCategory, updateCategory, deleteCategory } from "../../src/lib/ctrlCategory";
import { getAllSubCategories, createNewSubCategory, deleteSubCategory } from "../../src/lib/ctrlSubCategory";
import styles from '../../styles/Home.module.css';
import CategoriesList from "../../components/lists/CategoriesList";
import SubCategoriesList from "../../components/lists/SubCategoriesList";
import ModalAddCategory from "../../components/modals/ModalAddCategory";
import ModalAddSubCategory from "../../components/modals/ModalAddSubCategory";
//import DeleteModalCategory from "../../vault/DeleteModals/DeleteModalCategory";
import AddIcon from "@material-ui/icons/Add";

export default function categoriesPage(props) {

    const [allCategories, setAllCategories] = React.useState([]);
    const [allSubCategories, setAllSubCategories] = React.useState([]);
    const [newCategory, setNewCategory] = React.useState({});
    const [newSubCategory, setNewSubCategory] = React.useState({});

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setshowModal] = React.useState(false);
    const [openModalSubCategory, setOpenModalSubCategory] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);

    React.useEffect(() => {
        getCategories();
        getSubCategories();
    }, []);

    /* GET */ /** In this part we call all the categories from the controller and when it finds them then do the setAllCategories */
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

    /* close modal */ /* change if something it's true or false in this case if we want close or open the modal */
    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setshowModal(false);
        setNewCategory({});
    };

    //******************************** */

    const handleClickAddCategory = () => {
        console.log("handleClickAddCategory")
        setshowModal(true);
        setEditMode(false);
        setNewCategory({});
    }

    const handleClickUpdateCategory = () => {
        updateCategory(newCategory).then(() => {
            handleCloseModal()
            getCategories();
        })
    }

    const DeleteCategoryOnClick = categoryID => {
        const deleting = allCategories.filter((category) => category.categoryID !== categoryID);
        console.log("DELETING", categoryID);
        getCategories(deleting)
        handleCloseModal()
        deleteCategory(categoryID);
    }

    /* Handle Change */ /* we set a variable that it will be changing it state*/
    const handleChange = name => event => {
        setNewCategory({
            ...newCategory,
            [name]: event.target.value
        });
        console.log(newCategory);
    };

    const handleChangeSubCategory = name => event => {
        setNewSubCategory({
            ...newSubCategory,
            //user: user._id,
            [name]: event.target.value
        });
        console.log(newSubCategory);
    };


    /* Handle create */ /*  This method do 2 functions using an "if" because it will do an specific mode depending what 
                            mode/action we want/click and it contains more methods to open the modal when we click in 
                            these ones for example BUT we put false so it will do the inverse action to open*/
    /*const handleClickOnCreateNewCategory = () => {
        console.log("SAVING", { editMode, newCategory })
        if (editMode) {
            updateCategory(newCategory).then(() => {
                setshowModal(false);
                setEditMode(false);
                getCategories();
                getSubCategories();
            })
        } else {
            createNewCategory(newCategory).then(() => {
                setshowModal(false);
                setEditMode(false);
                getCategories();
                getSubCategories();
            })
        }
    };*/

    const handleClickOnCreateNewCategory = () => {
        createNewCategory(newCategory).then((category) => {
          getCategories();
          setNewCategory({})
          setShowElements(true);
          handleCloseModal()
        })
      };
    
      
    /* open the edit button to see the dynamic modal */
    const handleClickEditCategory = categoryID => {
        getCategory(categoryID).then(category => {
        console.log("FOUND IT", category);
        setEditMode(true);
        setshowModal(true);
        setNewCategory(category);
        })
    };

    /* This one create a new subCategory, put the edit mode in false and close the modal too after do the create action*/
    const handleClickOnCreateNewSubCategory = () => {
        createNewSubCategory(newSubCategory).then(subCategory => {
            getCategories();
            getSubCategories();
            setOpenModalSubCategory(false);
            setEditMode(false);
        })
    };

    const handleCloseModalSubCategory = () => {
        setOpenModalSubCategory(false);
        setEditMode(false);
    };

    /* Close the modal and it's called in the close button in the modal add category */
    /*const handleClickOnCancelNewCategory = () => {
        setNewCategory({})
        setEditMode(false);
    };

    const handleClickOnCancelNewSubCategory = () => {
        setNewSubCategory({})
    };*/

    /*const DeleteCategoryOnClick = categoryID => {
        const deleting = allCategories.filter((category) => category.categoryID !== categoryID);
        console.log("DELETING", categoryID);
        getCategories(deleting)
        handleCloseModal()
        deleteCategory(categoryID);
    }*/

    /** SubCategory  Delete ***/

    /* open the edit button to see the dynamic modal 
    const handleClickEditSubCategory = subCategory => {
        setNewSubCategory(subCategory)
        setEditMode(true)
        setOpenModalSubCategory(true);
    };*/

    /*const DeleteSubCategoryOnClick = subCategoryID => {
        const deletingSubCategory = allSubCategories.filter((subCategory) => subCategory.subCategoryID !== subCategoryID);
        console.log("DELETING", subCategoryID);
        getSubCategories(deletingSubCategory)
        handleCloseModal()
        deleteSubCategory(subCategoryID);
    }*/

    /*const handleClickDeleteCategory = category => {
        setNewCategory(category)
        //setEditMode(true)
        setshowModal(true);
    };*/

    return /*allCategories ?*/ (
        <div /*className={styles.container}*/>

            <ModalAddCategory
                open={showModal}
                handleClose={handleCloseModal}
                handleChange={handleChange}
                allCategories={allCategories}
                allSubCategories={allSubCategories}
                handleClickOnCreateNewCategory={handleClickOnCreateNewCategory}
                //cancelCreateNewCategory={handleClickOnCancelNewCategory}
                handleClickUpdateCategory={handleClickUpdateCategory}

                newCategory={newCategory}
                editMode={editMode}
            />

            <ModalAddSubCategory
                open={openModalSubCategory}
                handleClose={handleCloseModalSubCategory}
                handleChange={handleChangeSubCategory}
                allSubCategories={allSubCategories}
                createNewSubCategory={handleClickOnCreateNewSubCategory}
                //cancelCreateNewSubCategory={handleClickOnCancelNewSubCategory}
                newSubCategory={newSubCategory}
                editMode={editMode}
            />

            <div >
                <div className={styles.main} >
                    <h3>Categories</h3>
                </div>

                <div className={styles.main}>
                    {showElements ?
                    <button 
                        variant="success" size="sm"
                        onClick={() => handleClickAddCategory()}>
                        <AddIcon fontSize="small"/> New category
                    </button>
                    :
                    null
                    }
                </div>

            <div >
                <CategoriesList
                    allCategories={allCategories}
                    handleClickEditCategory={handleClickEditCategory}
                    DeleteCategoryOnClick={DeleteCategoryOnClick}
                />
            </div>


            <div className={styles.main} >
                <h3>Sub Categories</h3>
            </div>

            <div className={styles.main}>
                <button type="button" className="btn btn-warning" variant="warning"
                    onClick={() => setOpenModalSubCategory(true)}
                >
                    New sub category
                    </button>
            </div>

            <div >
                <SubCategoriesList
                    allSubCategories={allSubCategories}
                //DeleteSubCategoryOnClick={DeleteSubCategoryOnClick}
                />
            </div>
        </div>
        </div >
    ) /*: (
            <div className="spinner-border"></div>
        );*/
};
/*<div>
                <DeleteModalCategory
                    allCategories={allCategories}
                    //deleteCategoryOpenModal={handleClickDeleteCategory}
                    DeleteCategoryOnClick={DeleteCategoryOnClick}
                />
            </div>*/