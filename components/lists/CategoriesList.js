import React from "react";
import styles from "../../styles/Home.module.css";

export default function CategoriesList(props) {

    const { allCategories, handleClickEditCategory, handleClickDeleteCategory } = props;

    return allCategories && allCategories.length > 0 ? (
            <table className={styles.main, "table "} >
                <thead className={styles.textItems3}>
                    <tr className="table-primary">
                        <th scope="row">Name</th>
                        <th scope="row">Description</th>
                        <th scope="row">SubCategories</th>
                        <th scope="row">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allCategories.map(category => (
                        <tr key={category._id} className="bg-gray">
                            <td className={styles.textItems3}>{category.name}</td>
                            <td className={styles.textItems3}>{category.description}</td>
                            <td className={styles.textItems3}>{category.subCategories && category.subCategories[0] ? `${category.subCategories[0].name}` : ""}</td>
                            <td className={styles.textItems3}>
                                
                                <button type="button" className="btn btn-outline-warning" 
                                    onClick={() => handleClickEditCategory(category._id)}><i className="fas fa-pen-square"></i>&nbsp;Edit</button>
                                        &nbsp;
                                    <button type="button" className="btn btn-outline-danger" 
                                    onClick={() => handleClickDeleteCategory(category)}><i className="fas fa-trash-alt"></i>&nbsp;
                                    Delete
                                    </button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
    ) : (
            <div className="spinner-border "></div>
        );
}
// data-toggle="tooltip" data-placement="top" title="Edit Button" data-original-title=""
// data-toggle="tooltip" data-placement="top" title="Delete Button" data-original-title=""