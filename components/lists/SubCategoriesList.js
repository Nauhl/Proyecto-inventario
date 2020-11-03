import React from "react";
import styles from '../../styles/Home.module.css';

export default function SubCategoriesList(props) {

    const { allSubCategories, handleClickEditSubCategory, DeleteSubCategoryOnClick } = props;

    return allSubCategories && allSubCategories.length > 0 ? (
        <>
        <div className={styles.main}>

        </div>
        <div className={styles.main}>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {allSubCategories.map(subCategory => (
                        // console.log("subCategory", Object.keys(subCategory.subCategories).length);
                        //return (
                            <tr key={subCategory._id}>
                                <td >{subCategory.name}</td>
                                <td >{subCategory.description}</td>
                                
                            </tr>
                        //)
                    ))}
                </tbody>
            </table>
        </div>
        </>
    ) : (
            <div className="spinner-border"></div>
        );
}
/*
    <button type="button" className="btn btn-warning" onClick={() => handleClickEditSubCategory(subCategory._id)}>Edit</button>
*/


// DELETE

/*<td >
                                    <button type="button" className="btn btn-danger" onClick={() => DeleteSubCategoryOnClick(subCategory._id)} >Delete</button>
                                </td>*/