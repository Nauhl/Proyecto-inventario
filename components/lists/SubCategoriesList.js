import React from "react";
import styles from '../../styles/Home.module.css';

export default function SubCategoriesList(props) {

    const { allSubCategories, handleClickEditSubCategory, handleClickDeleteSubCategory } = props;

    return allSubCategories && allSubCategories.length > 0 ? (
        <table className="table table-responsive table-striped ">
            <thead>
                <tr className="table-primary">
                    <th scope="row">Name</th>
                    <th scope="row">Description</th>
                    <th scope="row">Action</th>
                </tr>
            </thead>
            <tbody>
                {allSubCategories.map(subCategory => (
                    <tr key={subCategory._id}>
                        <td >{subCategory.name}</td>
                        <td >{subCategory.description}</td>
                        <td>

                            <button type="button" className="btn btn-outline-warning"
                                onClick={() => handleClickEditSubCategory(subCategory._id)}>Edit</button>
                                        &nbsp;
                                    <button type="button" className="btn btn-outline-danger" 
                                onClick={() => handleClickDeleteSubCategory(subCategory)}>
                                Delete
                                    </button>
                        </td>
                    </tr>
                    //)
                ))}
            </tbody>
        </table>
    ) : (
            <div className="spinner-border bg-success"></div>
        );
}