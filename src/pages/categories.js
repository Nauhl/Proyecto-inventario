import { getAllCategories, getCategory, createNewCategory, updateCategory, deleteCategory } from "../../src/lib/ctrlCategory";
import { getAllSubCategories, getSubCategory, createNewSubCategory, updateSubCategory, deleteSubCategory } from "../../src/lib/ctrlSubCategory";
//import styles from '../../styles/Home.module.css';
import CategoriesList from "../../components/lists/CategoriesList";
import SubCategoriesList from "../../components/lists/SubCategoriesList";
import ModalCategory from "../../components/modals/ModalCategory";
import ModalSubCategory from "../../components/modals/ModalSubCategory";
import ModalConfirmDelete from "../../components/DeleteModal/ModalConfirmDelete";

export default function categoriesPage(props) {

    const [allCategories, setAllCategories] = React.useState([]);
    const [allSubCategories, setAllSubCategories] = React.useState([]);
    const [newCategory, setNewCategory] = React.useState({});
    const [newSubCategory, setNewSubCategory] = React.useState({});

    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = React.useState(false);
    const [showDeleteModalSubCategory, setShowDeleteModalSubCategory] = React.useState(false);
    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setshowModal] = React.useState(false);
    const [showModalSubCategory, setShowModalSubCategory] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    // const [newCategoryy, setNewCategoryy] = React.useState({});

    const [showDeleteModal, setShowDeleteModal] = React.useState(false);

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

    const handleCloseConfirmDeleteModal = () => {
        setShowConfirmDeleteModal(false);
    };

    const handleCloseDeleteModalSubCategory = () => {
        setShowDeleteModalSubCategory(false);
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
            getCategories();
        })
    }

    const DeleteCategoryOnClick = () => {
        console.log("DELETING", newCategory);
        deleteCategory(newCategory._id).then(() => {
            getCategories();
            setNewCategory({});
            setShowConfirmDeleteModal(false);
        })
    }

    const DeleteSubCategoryOnClick = () => {
        console.log("DELETING", newSubCategory);
        deleteSubCategory(newSubCategory._id).then(() => {
            getSubCategories();
            getCategories();
            setNewSubCategory({});
            setShowDeleteModalSubCategory(false);
        })
    }

    /*const DeleteCategoryOnClick = categoryID => {
        const deleting = allCategories.filter((category) => category.categoryID !== categoryID);
        console.log("DELETING", categoryID);
        getCategories(deleting);
        handleCloseModal();
        deleteCategory(categoryID);
        getCategories();
    }

    const DeleteSubCategoryOnClick = subCategoryID => {
        const deleting = allSubCategories.filter((subCategory) => subCategory.subCategoryID !== subCategoryID);
        console.log("DELETING", subCategoryID);
        getSubCategories(deleting);
        handleCloseSubcategoryModal()
        deleteSubCategory(subCategoryID);
        getSubCategories();
    }*/

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

    const handleClickDeleteCategory = category => {
        setNewCategory(category);
        setShowConfirmDeleteModal(true);
        // categoryID => {
        //     getCategory(categoryID).then(category => {
        //         console.log("FOUND IT", category);
        //         setShowDeleteModal(true);
        //         getCategories();
        //         //ShowDeleteModal(true);
        //         //setEditMode(true);
        //         //setAddCondition(condition);
        //     })
    };

    const handleClickDeleteSubCategory = subCategory => {
        setNewSubCategory(subCategory);
        setShowDeleteModalSubCategory(true);
        // subCategoryID => {
        //     getSubCategory(subCategoryID).then(subCategory => {
        //         console.log("FOUND IT", subCategory);
        //         setShowDeleteModal(true);
        //         getSubCategories();
        //         //ShowDeleteModal(true);
        //         //setEditMode(true);
        //         //setAddCondition(condition);
        //     })
    };

    return (
        <div>
            <ModalCategory
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

            <ModalSubCategory
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

            <ModalConfirmDelete
                open={showConfirmDeleteModal}
                handleClose={handleCloseConfirmDeleteModal}
                handleConfirmDelete={DeleteCategoryOnClick}
                item={newCategory}
            />

<ModalConfirmDelete
                open={showDeleteModalSubCategory}
                handleClose={handleCloseConfirmDeleteModal}
                handleConfirmDelete={DeleteSubCategoryOnClick}
                item={newSubCategory}
            />

            <div className="card mb-3" >
                <div className="card-header"></div>
                <div className="card-body">
                    <h4 className="card-title">Categories</h4>
                    <p className="card-text">In this page you can create, edit and delete Categories to your items.</p>
                </div>
            </div>

            {/* <div >
                {showElements ?
                    <button className="btn btn-success"
                        variant="success" size="sm"
                        onClick={() => handleClickAddCategory()}>
                        New category
                    </button>
                    :
                    null
                }
            </div> */}

            <div >
                <CategoriesList
                    allCategories={allCategories}
                    showElements={showElements}
                    handleClickAddCategory={handleClickAddCategory}
                    handleClickEditCategory={handleClickEditCategory}
                    handleClickDeleteCategory={handleClickDeleteCategory}

                /*openn={showDeleteModal}
                handleClose={handleCloseModal}
    DeleteCategoryOnClick={DeleteCategoryOnClick}*/
                />
            </div>

            <div className="card mb-3" >
                <div className="card-header"></div>
                <div className="card-body">
                    <h4 className="card-title">SubCategories</h4>
                    <p className="card-text">With this table you can create, edit and delete SubCategories to your Categories.</p>
                </div>
            </div>

            <div >
                <SubCategoriesList
                    allSubCategories={allSubCategories}
                    handleClickAddSubCategory={handleClickAddSubCategory}
                    handleClickEditSubCategory={handleClickEditSubCategory}
                    handleClickDeleteSubCategory={handleClickDeleteSubCategory}

                    // openn={showDeleteModal}
                    // allSubCategories={allSubCategories}
                    // handleClose={handleCloseSubcategoryModal}
                    //DeleteSubCategoryOnClick={DeleteSubCategoryOnClick}
                />
            </div>
        </div >
    )
};