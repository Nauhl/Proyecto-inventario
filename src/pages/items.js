import { getAllItems, getItem, createNewItem, updateItem, deleteItem } from "../../src/lib/ctrlItem";
import { getAllLocations } from "../../src/lib/ctrlLocation";
import { getAllRooms } from "../../src/lib/ctrlRoom";
import { getAllCategories } from "../../src/lib/ctrlCategory";
import { getAllConditions } from "../../src/lib/ctrlCondition";
import ItemList from "../../components/lists/ItemList";
import ModalItem from "../../components/modals/ModalItem";
import ModalConfirmDelete from "../../components/DeleteModal/ModalConfirmDelete";
import { Grid, Cell } from 'react-mdl';
import styles from "../../styles/Home.module.css";

export default function itemsPage() {

    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = React.useState(false);
    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [allItemsState, setAllItemsState] = React.useState([]);

    const [allLocations, setLocationState] = React.useState([]);
    const [allRooms, setRoomsState] = React.useState([]);
    const [allCategories, setCategoriesState] = React.useState([]);
    const [allConditions, setConditionsState] = React.useState([]);
    const [newItem, setNewItem] = React.useState({});
    const [editMode, setEditMode] = React.useState(false);

    const [showDeleteModal, setShowDeleteModal] = React.useState(false);

    React.useEffect(() => {
        getItems();
        getLocations();
        getRooms();
        getCategories();
        getConditions();
    }, []);

    const getItems = () => {
        getAllItems().then(allItems => {
            setAllItemsState(allItems);
        });
    }

    const getLocations = () => {
        getAllLocations().then(allItems => {
            setLocationState(allItems);
        });
    }

    const getRooms = () => {
        getAllRooms().then(allItems => {
            setRoomsState(allItems);
        });
    }

    const getCategories = () => {
        getAllCategories().then(allItems => {
            setCategoriesState(allItems);
        });
    }

    const getConditions = () => {
        getAllConditions().then(allItems => {
            setConditionsState(allItems);
        });
    }

    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setShowModal(false);
        setNewItem({});
        setShowDeleteModal(false);
    };

    const handleCloseConfirmDeleteModal = () => {
        setShowConfirmDeleteModal(false);
    };

    const handleClickAddItem = () => {
        console.log("handleClickAddItem")
        setShowModal(true);
        setEditMode(false);
        setNewItem({});
    }

    const handleClickUpdateItem = () => {
        updateItem(newItem).then(() => {
            handleCloseModal()
            getItems();
        })
    }

    const DeleteItemOnClick = () => {
        console.log("DELETING", newItem);
        deleteItem(newItem._id).then(() => {
            getItems();
            setNewItem({});
            setShowConfirmDeleteModal(false);
        })
    }

    const handleChange = path => name => event => {
        if (path) {
            setNewItem({
                ...newItem,
                [path]: {
                    ...newItem[path],
                    [name]: event.target.value
                }
            });
        } else {
            setNewItem({
                ...newItem,
                [name]: event.target.value
            });
        }
        console.log(newItem);
    };

    const handleClickOnCreateNewItem = () => {
        createNewItem(newItem).then(item => {
            getItems();
            setNewItem({})
            setShowElements(true);
            handleCloseModal()
        })
    };

    const handleClickEditItem = itemID => {
        getItem(itemID).then(item => {
            console.log("FOUND IT", item);
            setShowModal(true);
            setEditMode(true);
            setNewItem(item);
        })
    };

    //Abre el modal de delete
    const handleClickDeleteItem = item => {
        setNewItem(item);
        setShowConfirmDeleteModal(true);
    };

    return (
        <>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className={styles.landingGrid} >
                    &nbsp; &nbsp;
                <Cell col={4}>
                        <img className="w-full responsive-img" src="/undraw_Booking_re_gw4j.svg"
                            className={styles.avatarImg}
                        />
                        <div className={styles.vanished}>
                            <ItemList
                                allItems={allItemsState}
                            />
                        </div>
                    </Cell>
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                    <Cell col={4} className="mdl-color-text--white">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h2>Hi, Welcome to your Items </h2>
                        <h4 className={styles.text}>Here is where you will see the most important information about your items, where everyone can do new Items incluiding their Locations, Conditions, Categories and SubCategories</h4>
                    </Cell>
                </Grid>
            </div>
            <> </>
            <br />
            <br />
            <div className="container">

                <ModalItem
                    open={showModal}
                    handleClose={handleCloseModal}
                    allItems={allItemsState}
                    allLocations={allLocations}
                    allRooms={allRooms}
                    allCategories={allCategories}
                    allConditions={allConditions}

                    handleChange={handleChange}
                    handleClickUpdateItem={handleClickUpdateItem}
                    handleClickOnCreateNewItem={handleClickOnCreateNewItem}

                    newItem={newItem}
                    editMode={editMode}
                />
                <div >

                    <ModalConfirmDelete
                        open={showConfirmDeleteModal}
                        handleClose={handleCloseConfirmDeleteModal}
                        handleConfirmDelete={DeleteItemOnClick}
                        item={newItem}
                    />

                    <div className="card mb-3" >
                        <div className="card-header"></div>
                        <div className="card-body">
                            <h4 className="card-title">Items</h4>
                            <p className="card-text">In this page you can create, edit and delete Items to your inventory.</p>
                        </div>
                    </div>

                    {showElements ?
                        <button className="btn btn-outline-success"
                            variant="success" size="sm"
                            onClick={() => handleClickAddItem()}>
                            New Item</button>
                        :
                        null
                    }

                    <div >
                        <ItemList
                            showElements={showElements}
                            allItems={allItemsState}
                            handleClickAddItem={handleClickAddItem}
                            handleClickEditItem={handleClickEditItem}
                            DeleteItemOnClick={DeleteItemOnClick}

                            openn={showDeleteModal}
                            handleClose={handleCloseModal}
                            handleClickDeleteItem={handleClickDeleteItem}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};