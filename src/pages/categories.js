import { getAllCategories, getCategory, createNewCategory, updateCategory, deleteCategory } from "../../src/lib/ctrlCategory";
import { getAllSubCategories, getSubCategory, createNewSubCategory, updateSubCategory, deleteSubCategory } from "../../src/lib/ctrlSubCategory";
import CategoriesList from "../../components/lists/CategoriesList";
import SubCategoriesList from "../../components/lists/SubCategoriesList";
import ModalCategory from "../../components/modals/ModalCategory";
import ModalSubCategory from "../../components/modals/ModalSubCategory";
import ModalConfirmDelete from "../../components/DeleteModal/ModalConfirmDelete";
import { Grid, Cell } from 'react-mdl';
import styles from "../../styles/Home.module.css";

export default function categoriesPage(props) {

    const [allCategories, setAllCategories] = React.useState([]);
    const [allSubCategories, setAllSubCategories] = React.useState([]);
    const [newCategory, setNewCategory] = React.useState({});
    const [newSubCategory, setNewSubCategory] = React.useState({});

    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = React.useState(false);
    const [showElements, setShowElements] = React.useState(true);
    const [showDeleteModalSubCategory, setShowDeleteModalSubCategory] = React.useState(false);
    const [showModal, setshowModal] = React.useState(false);
    const [showModalSubCategory, setShowModalSubCategory] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);

    React.useEffect(() => {
        getCategories();
        getSubCategories();
    }, []);

    //TODO    "GET"  In this part we call all the categories from the controller and when it finds them then do the setAllCategories /
    const getCategories = () => {
        getAllCategories().then(categories => {
            setAllCategories(categories);
        });
    }

    const getSubCategories = () => {
        getAllSubCategories().then(allSubCategories => {
            setAllSubCategories(allSubCategories);
        });
    }

    //* close modal  change if something it's true or false in this case if we want close or open the modal */
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

    const handleCloseModalSubCategory = () => {
        setShowModalSubCategory(false);
        setEditMode(false);
    };

    const handleCloseConfirmDeleteModal = () => {
        setShowConfirmDeleteModal(false);
    };

    //TODO------ Show Add Modal ------/

    const handleClickAddCategory = () => {
        console.log("handleClickAddCategory")
        setshowModal(true);
        setEditMode(false);
        setNewCategory({});
    }

    const handleClickAddSubCategory = () => {
        console.log("handleClickAddSubCategory")
        setShowModalSubCategory(true);
        setEditMode(false);
        setNewSubCategory({});
    }

    //TODO------ Show Update Modal  ------/

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
            getCategories();
        })
    }

    //TODO------ Show Delete Modal ------/

    const handleClickDeleteCategory = category => {
        setNewCategory(category);
        setShowConfirmDeleteModal(true);
    };

    const handleClickDeleteSubCategory = subCategory => {
        setNewSubCategory(subCategory);
        setShowDeleteModalSubCategory(true);
    };


    const handleChange = path => name => event => {
        if (path) {
            setNewCategory({
                ...newCategory,
                [path]: {
                    ...newCategory[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewCategory({
                ...newCategory,
                [name]: event.target.value
            });
        }
        console.log(newCategory);
    };

    const handleChangeSubCategory = path => name => event => {
        if (path) {
            setNewSubCategory({
                ...newSubCategory,
                [path]: {
                    ...newSubCategory[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewSubCategory({
                ...newSubCategory,
                [name]: event.target.value
            });
        }
        console.log(newSubCategory);
    };

    //? Create Method 

    const handleClickOnCreateNewCategory = () => {
        createNewCategory(newCategory).then((category) => {
            getCategories();
            setNewCategory({})
            setShowElements(true);
            handleCloseModal()
        })
    };

    const handleClickOnCreateNewSubCategory = () => {
        createNewSubCategory(newSubCategory).then(subCategory => {
            getSubCategories();
            setNewSubCategory({});
            setShowElements(true);
            handleCloseModalSubCategory()
        })
    };

    //? Edit Method

    const handleClickEditCategory = categoryID => {
        getCategory(categoryID).then(category => {
            console.log("FOUND IT", category);
            setEditMode(true);
            setshowModal(true);
            setNewCategory(category);
        })
    };

    const handleClickEditSubCategory = subCategoryID => {
        getSubCategory(subCategoryID).then(subCategory => {
            console.log("FOUND", subCategory);
            setShowModalSubCategory(true);
            setEditMode(true);
            setNewSubCategory(subCategory);
        })
    };

    //? Delete Method

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

    return (
        <>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className={styles.landingGrid} >
                    &nbsp; &nbsp;
                <Cell col={4}>
                        <img className="w-full responsive-img" src="/undraw_Home_settings_re_pkya.svg"
                            className={styles.avatarImg}
                        />
                        <div className={styles.vanished}>
                            <CategoriesList
                                allCategories={allCategories}
                            />
                        </div>
                    </Cell>
                    <Cell col={4} className="mdl-color-text--white">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Hi, Welcome to your Categories & SubCategories</h2>
                        <h4 className={styles.text}>Section where everyone can do a new Category for the new Items</h4>
                    </Cell>
                </Grid>
            </div>
            <> </>
            <br />
            <br />
            <div className="container">

                <ModalCategory
                    open={showModal}
                    handleClose={handleCloseModal}
                    handleChange={handleChange}
                    allCategories={allCategories}
                    allSubCategories={allSubCategories}
                    handleClickOnCreateNewCategory={handleClickOnCreateNewCategory}
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

                <div className="card mb-3" >
                    <div className="card-header" style={{ background: '#1CB5E0' }} ></div>
                    <div className="card-body">
                        <h4 className="card-title">Categories</h4>
                        <p className="card-text">In this page you can create, edit and delete Categories to your items.</p>
                    </div>
                </div>

                {showElements ?
                    <button className="btn btn-outline-success"
                        onClick={() => handleClickAddCategory()}>
                        New category
                    </button>
                    :
                    null
                }

                <div >
                    <CategoriesList
                        allCategories={allCategories}
                        showElements={showElements}
                        handleClickEditCategory={handleClickEditCategory}
                        handleClickDeleteCategory={handleClickDeleteCategory}
                    />
                </div>

                <ModalConfirmDelete
                    open={showDeleteModalSubCategory}
                    handleClose={handleCloseConfirmDeleteModal}
                    handleConfirmDelete={DeleteSubCategoryOnClick}
                    item={newSubCategory}
                />

                <div className="card mb-3" >
                    <div className="card-header" style={{ background: '#1CB5E0' }}></div>
                    <div className="card-body">
                        <h4 className="card-title">SubCategories</h4>
                        <p className="card-text">With this table you can create, edit and delete SubCategories to your Categories.</p>
                    </div>
                </div>

                {showElements ?
                    <button type="button" className="btn btn-outline-info"
                        onClick={() => handleClickAddSubCategory()}
                    >
                        New sub category
                </button>
                    :
                    null
                }

                <div >
                    <SubCategoriesList
                        allSubCategories={allSubCategories}
                        handleClickEditSubCategory={handleClickEditSubCategory}
                        handleClickDeleteSubCategory={handleClickDeleteSubCategory}
                    />
                </div>
            </div >
        </>
    )
};