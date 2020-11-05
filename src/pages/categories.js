import { getAllCategories, getCategory, createNewCategory, updateCategory, deleteCategory } from "../../src/lib/ctrlCategory";
import { getAllSubCategories, getSubCategory, createNewSubCategory, updateSubCategory, deleteSubCategory } from "../../src/lib/ctrlSubCategory";
import styles from '../../styles/Home.module.css';
import CategoriesList from "../../components/lists/CategoriesList";
import SubCategoriesList from "../../components/lists/SubCategoriesList";
import ModalAddCategory from "../../components/modals/ModalAddCategory";
import ModalAddSubCategory from "../../components/modals/ModalAddSubCategory";

export default function categoriesPage(props) {

    const [allCategories, setAllCategories] = React.useState([]);
    const [allSubCategories, setAllSubCategories] = React.useState([]);
    const [newCategory, setNewCategory] = React.useState({});
    const [newSubCategory, setNewSubCategory] = React.useState({});

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setshowModal] = React.useState(false);
    const [showModalSubCategory, setShowModalSubCategory] = React.useState(false);
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

    const handleCloseSubcategoryModal = () => {
        console.log("handleCloseSubcategoryModal")
        setShowModalSubCategory(false);
        setNewSubCategory({});
    };

    //******************************** */

    const handleClickAddCategory = () => {
        console.log("handleClickAddCategory")
        setshowModal(true);
        setEditMode(false);
        setNewCategory({});
    }

    /****************  Curioso */
    const handleClickAddSubCategory = () => {
        console.log("handleClickAddSubCategory")
        setShowModalSubCategory(true);
        setEditMode(false);
        setNewSubCategory({});
    }

    //************************ */

    const handleClickUpdateCategory = () => {
        updateCategory(newCategory).then(() => {
            handleCloseModal()
            getCategories();
        })
    }

    const handleClickUpdateSubCategory = () => {
        updateSubCategory(newSubCategory).then(() => {
            handleCloseSubcategoryModal()
            getSubCategories();
        })
    }

    const DeleteCategoryOnClick = categoryID => {
        const deleting = allCategories.filter((category) => category.categoryID !== categoryID);
        console.log("DELETING", categoryID);
        getCategories(deleting)
        handleCloseModal()
        deleteCategory(categoryID);
    }

    const DeleteSubCategoryOnClick = subCategoryID => {
        const deleting = allSubCategories.filter((subCategory) => subCategory.subCategoryID !== subCategoryID);
        console.log("DELETING", subCategoryID);
        getSubCategories(deleting)
        handleCloseSubcategoryModal()
        deleteSubCategory(subCategoryID);
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

    const handleClickOnCreateNewCategory = () => {
        createNewCategory(newCategory).then((category) => {
            getCategories();
            setNewCategory({})
            setShowElements(true);
            handleCloseModal()
        })
    };

    /* This one create a new subCategory, put the edit mode in false and close the modal too after do the create action*/
    const handleClickOnCreateNewSubCategory = () => {
        createNewSubCategory(newSubCategory).then(subCategory => {
            getSubCategories();
            setNewSubCategory({});
            setShowElements(true);
            handleCloseModalSubCategory()
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

    // open the edit button to see the dynamic modal 
    const handleClickEditSubCategory = subCategoryID => {
        getSubCategory(subCategoryID).then(subCategory => {
            console.log("FOUND", subCategory);
            setEditMode(true);
            setShowModalSubCategory(true);
            setNewSubCategory(subCategory);
        })
    };

    const handleCloseModalSubCategory = () => {
        setShowModalSubCategory(false);
        setEditMode(false);
    };

    return (
        <div>
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
                openSub={showModalSubCategory}
                handleCloseSub={handleCloseSubcategoryModal}
                handleChange={handleChangeSubCategory}
                allSubCategories={allSubCategories}
                handleClickOnCreateNewSubCategory={handleClickOnCreateNewSubCategory}
                //cancelCreateNewSubCategory={handleClickOnCancelNewSubCategory}
                handleClickUpdateSubCategory={handleClickUpdateSubCategory}

                newSubCategory={newSubCategory}
                editMode={editMode}
            />

            <div >
                <div className={styles.main} >
                    <h3>Categories</h3>
                </div>

                <div className={styles.main}>
                    {showElements ?
                        <button className="btn btn-success"
                            variant="success" size="sm"
                            onClick={() => handleClickAddCategory()}>
                            New category
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
                    //handleClickDeleteCategory={handleClickDeleteCategory}
                    />
                </div>

                <div className={styles.main} >
                    <h3>Sub Categories</h3>
                </div>

                <div className={styles.main}>
                    <button type="button" className="btn btn-dark" variant="warning"
                        onClick={() => handleClickAddSubCategory()}
                    >
                        New sub category
                    </button>
                </div>

                <div >
                    <SubCategoriesList
                        allSubCategories={allSubCategories}
                        handleClickEditSubCategory={handleClickEditSubCategory}
                        DeleteSubCategoryOnClick={DeleteSubCategoryOnClick}
                        />
                </div>
            </div>
        </div >
    ) 
};