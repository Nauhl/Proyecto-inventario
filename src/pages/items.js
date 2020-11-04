//import { getAuth } from "../../utils/common";
import { makeStyles } from "@material-ui/core/styles";
import { getAllItems, createNewItem } from "../../src/lib/ctrlItem";
import { getAllLocations } from "../../src/lib/ctrlLocation";
import { getAllRooms } from "../../src/lib/ctrlRoom";
import { getAllCategories } from "../../src/lib/ctrlCategory";
import { getAllConditions } from "../../src/lib/ctrlCondition";

// import Button from "@material-ui/core/Button";
import Button from "react-bootstrap/Button";
import ItemsInput from "../../components/inputs/ItemInput/inputItem";
import ItemsList from "../../components/lists/ItemList";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function itemsPage() {
    const classes = useStyles();

    const [showElements, setShowElements] = React.useState(true);
    const [allItemsState, setAllItemsState] = React.useState([]);
    const [newItem, setNewItem] = React.useState({});

    React.useEffect(() => getItems(), []);

    const getItems = () => {
        getAllItems().then(allItems => {
            setAllItemsState(allItems);
        })
    }

    const handleChange = name => event => {
        setNewItem({
            ...newItem,
            [name]: event.target.value
        });
    };

    const handleChangeSelect = name => event => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setNewItem({
            ...newItem,
            [name]: value
        });

    };

    const handleClickOnCreateNewItem = () => {

        createNewItem(newItem).then(item => {
            getItems()
            setShowElements(true);
        })
    };

    const handleClickOnCancelNewItem = () => {
        setNewItem({})
        setShowElements(true);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h3>Items</h3>
                </Grid>

                <Grid item xs={6}>
                    {showElements ?
                        <Button variant="success" size="sm" onClick={() => setShowElements(false)}>
                            <AddIcon fontSize="small" />Add new item</Button>
                        :
                        null
                        //<Button variant="dark" size="sm" onClick={() => setShowElements(true)}>Show all categories</Button>
                    }
                </Grid>

                <Grid item xs={12}>
                    {showElements ?
                        <ItemsList
                            allItems={allItemsState}
                        />
                        :
                        <ItemsInput
                            allItems={allItemsState}
                            handleChange={handleChange}
                            handleChangeSelect={handleChangeSelect}
                            createNewItem={handleClickOnCreateNewItem}
                            cancelCreateNewItem={handleClickOnCancelNewItem}
                            newItem={newItem}
                        />
                    }
                </Grid>

            </Grid>

        </div>
    )
};