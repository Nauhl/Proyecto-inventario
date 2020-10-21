import { getAllCategories, createNewCategory, updateCategory } from "../../src/lib/ctrlCategory";
import { getAllSubCategories, createNewSubCategory } from "../../src/lib/ctrlSubCategory";
import CategoriesList from "../../components/lists/CategoriesList";
import SubCategoriesList from "../../components/lists/SubCategoriesList";
import Grid from "@material-ui/core/Grid";

export default function categoriesPage(props) {

  const [allCategories, setAllCategories] = React.useState([]);
  const [allSubCategories, setAllSubCategories] = React.useState([]);
  const [editMode, setEditMode] = React.useState(false);
 
  React.useEffect(() => {
    getCategories();
    getSubCategories();
  }, []);

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
  
  const handleClickEditCategory = category => {
    setEditMode(true)
  };
  
  return allCategories ? ( 
    <div >
      
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h3>Categories</h3> 
        </Grid>
        
        <Grid item xs={12}>
          <CategoriesList
            allCategories={allCategories}
          />
        </Grid>

        <Grid item xs={12}>
          <SubCategoriesList
            allSubCategories={allSubCategories}
          />
        </Grid>

      </Grid>

    </div>
  ) : (
      <h1>LOADING...</h1>
    );
};