import React from "react";
import styles from '../../styles/Home.module.css';

export default function CategoriesList(props) {

    const { allCategories, handleClickEditCategory, handleClickDeleteCategory } = props;

    return allCategories && allCategories.length > 0 ? (
            <table className="table table-striped table-responsive" >
                <thead>
                    <tr className="table-primary">
                        <th scope="row">Name</th>
                        <th scope="row">Description</th>
                        <th scope="row">SubCategories</th>
                        <th scope="row">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allCategories.map(category => (
                        <tr key={category._id}>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>{category.subCategories && category.subCategories[0] ? `${category.subCategories[0].name}` : ""}</td>
                            <td>
                                
                                <button type="button" className="btn btn-outline-warning" data-toggle="tooltip" data-placement="top" title="Edit Button" data-original-title=""
                                    onClick={() => handleClickEditCategory(category._id)}>Edit</button>
                                        &nbsp;
                                    <button type="button" className="btn btn-outline-danger" data-toggle="tooltip" data-placement="top" title="Delete Button" data-original-title=""
                                    onClick={() => handleClickDeleteCategory(category)}>
                                    Delete
                                    </button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
    ) : (
            <div className="spinner-border bg-success"></div>
        );
}