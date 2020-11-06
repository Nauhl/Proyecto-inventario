import { getAllItems, getItem, createNewItem, updateItem, deleteItem } from "../../src/lib/ctrlItem";
import { getAllLocations } from "../../src/lib/ctrlLocation";
import { getAllRooms } from "../../src/lib/ctrlRoom";
import { getAllCategories } from "../../src/lib/ctrlCategory";
import { getAllConditions } from "../../src/lib/ctrlCondition";
import  ItemList from "../../components/lists/ItemList";
import  ModalItem  from "../../components/modals/ModalItem";
import styles from '../../styles/Home.module.css';

export default function itemsPage() {

    const [showElements, setShowElements] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const [allItemsState, setAllItemsState] = React.useState([]);
    const [newItem, setNewItem] = React.useState({});
    const [editMode, setEditMode] = React.useState(false);

    React.useEffect(() => getItems(), []);

    const getItems = () => {
        getAllItems().then(allItems => {
            setAllItemsState(allItems);
        })
    }

    const handleCloseModal = () => {
        console.log("handleCloseModal")
        setShowModal(false);
        setNewItem({});
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

    const handleClickDeleteItem = itemID => {
        const deleting = allItemsState.filter((item) => item.itemID !== itemID);
        console.log("DELETING", itemID);
        getItems(deleting)
        handleCloseModal()
        deleteItem(itemID);
        /*setNewLocation(true);
        setShowElements(true);*/
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

    /*const handleClickOnCancelNewItem = () => {
        setNewItem({})
        setShowElements(true);
    };*/

    return (
        <div>
            <ModalItem
                open={showModal}
                handleClose={handleCloseModal}
                allItems={allItemsState}
                handleChange={handleChange}
                handleClickUpdateItem={handleClickUpdateItem}
                handleClickOnCreateNewItem={handleClickOnCreateNewItem}
                //createNewLocation={createNewLocation}
                // cancelCreateNewLocation={cancelCreateNewLocation}
                newItem={newItem}
                editMode={editMode}
            />
            <div >
                <div className={styles.main}>
                    <h3>Items</h3>
                </div>

                <div className={styles.main}>
                    {showElements ?
                        <button className="btn btn-success"
                            // data-toggle="modal" data-target="#newLocation"
                            variant="success" size="sm"
                            onClick={() => handleClickAddItem()}>
                            New Item</button>
                        :
                        null
                    }
                </div>

                <div >
                    {/* {showElements ? */}
                    <ItemList
                        allItems={allItemsState}
                        handleClickEditItem={handleClickEditItem}
                        handleClickDeleteItem={handleClickDeleteItem}
                    />
                </div>
            </div>
        </div>
    )
};