// import React from "react";
// import MyApp from '../pages/_app';
// import { getAllItems, getItem, createNewItem, updateItem, deleteItem } from "../../src/lib/ctrlItem";
// import { getAllLocations } from "../../src/lib/ctrlLocation";
// import { getAllRooms } from "../../src/lib/ctrlRoom";
// import { getAllCategories } from "../../src/lib/ctrlCategory";
// import { getAllConditions } from "../../src/lib/ctrlCondition";
// import ItemList from "../../components/lists/ItemList";
// import ModalItem from "../../components/modals/ModalItem";
// import ModalConfirmDelete from "../../components/DeleteModal/ModalConfirmDelete";

export default function Home() {

    // const [showConfirmDeleteModal, setShowConfirmDeleteModal] = React.useState(false);
    // const [showElements, setShowElements] = React.useState(true);
    // const [showModal, setShowModal] = React.useState(false);
    // const [allItemsState, setAllItemsState] = React.useState([]);

    // const [allLocations, setLocationState] = React.useState([]);
    // const [allRooms, setRoomsState] = React.useState([]);
    // const [allCategories, setCategoriesState] = React.useState([]);
    // const [allConditions, setConditionsState] = React.useState([]);
    // const [newItem, setNewItem] = React.useState({});
    // const [editMode, setEditMode] = React.useState(false);

    // const [showDeleteModal, setShowDeleteModal] = React.useState(false);

    // React.useEffect(() => {
    //     getItems();
    //     getLocations();
    //     getRooms();
    //     getCategories();
    //     getConditions();
    // }, []);

    // const getItems = () => {
    //     getAllItems().then(allItems => {
    //         setAllItemsState(allItems);
    //     });
    // }

    // const getLocations = () => {
    //     getAllLocations().then(allItems => {
    //         setLocationState(allItems);
    //     });
    // }

    // const getRooms = () => {
    //     getAllRooms().then(allItems => {
    //         setRoomsState(allItems);
    //     });
    // }

    // const getCategories = () => {
    //     getAllCategories().then(allItems => {
    //         setCategoriesState(allItems);
    //     });
    // }

    // const getConditions = () => {
    //     getAllConditions().then(allItems => {
    //         setConditionsState(allItems);
    //     });
    // }

    // const handleCloseModal = () => {
    //     console.log("handleCloseModal")
    //     setShowModal(false);
    //     setNewItem({});
    //     setShowDeleteModal(false);
    // };

    // const handleCloseConfirmDeleteModal = () => {
    //     setShowConfirmDeleteModal(false);
    // };

    // const handleClickAddItem = () => {
    //     console.log("handleClickAddItem")
    //     setShowModal(true);
    //     setEditMode(false);
    //     setNewItem({});
    // }

    // const handleClickUpdateItem = () => {
    //     updateItem(newItem).then(() => {
    //         handleCloseModal()
    //         getItems();
    //     })
    // }

    // const DeleteItemOnClick = () => {
    //     console.log("DELETING", newItem);
    //     deleteItem(newItem._id).then(() => {
    //         getItems();
    //         setNewItem({});
    //         setShowConfirmDeleteModal(false);
    //     })
    // }

    // const handleChange = path => name => event => {
    //     if (path) {
    //         setNewItem({
    //             ...newItem,
    //             [path]: {
    //                 ...newItem[path],
    //                 [name]: event.target.value
    //             }
    //         });
    //     } else {
    //         setNewItem({
    //             ...newItem,
    //             [name]: event.target.value
    //         });
    //     }
    //     console.log(newItem);
    // };

    // const handleClickOnCreateNewItem = () => {
    //     createNewItem(newItem).then(item => {
    //         getItems();
    //         setNewItem({})
    //         setShowElements(true);
    //         handleCloseModal()
    //     })
    // };

    // const handleClickEditItem = itemID => {
    //     getItem(itemID).then(item => {
    //         console.log("FOUND IT", item);
    //         setShowModal(true);
    //         setEditMode(true);
    //         setNewItem(item);
    //     })
    // };

    // // Abre el modal de delete
    // const handleClickDeleteItem = item => {
    //     setNewItem(item);
    //     setShowConfirmDeleteModal(true);
    // };

    return (
        <>
        

            
        </>
    )
}