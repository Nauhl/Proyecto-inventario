import React from "react";
import styles from "../../styles/Home.module.css";

export default function SubCategoriesList(props) {

    const { allSubCategories, handleClickEditSubCategory, handleClickDeleteSubCategory } = props;

    return allSubCategories && allSubCategories.length > 0 ? (

        <table className={styles.main, "table "}>
            <thead className={styles.textItems3}>
                <tr className="table-primary">
                    <th scope="row">Name</th>
                    <th scope="row">Description</th>
                    <th scope="row">Action</th>
                </tr>
            </thead>
            <tbody>
                {allSubCategories.map(subCategory => (
                    <tr key={subCategory._id} className="bg-gray">
                        <td className={styles.textItems3}>{subCategory.name}</td>
                        <td className={styles.textItems3}>{subCategory.description}</td>
                        <td className={styles.textItems3}>

                            <button type="button" className="btn btn-outline-warning"
                                onClick={() => handleClickEditSubCategory(subCategory._id)}><i className="fas fa-pen-square"></i>&nbsp;Edit</button>
                                        &nbsp;
                                    <button type="button" className="btn btn-outline-danger"
                                onClick={() => handleClickDeleteSubCategory(subCategory)}><i className="fas fa-trash-alt"></i>&nbsp;
                                Delete
                                    </button>
                        </td>
                    </tr>
                    //)
                ))}
            </tbody>
        </table>
    ) : (
            <div className="spinner-border "></div>
        );
}