import React from "react";
//import styles from '../../styles/Home.module.css';

export default function CategoriesList(props) {

    const { allCategories, handleClickAddCategory,handleClickEditCategory, DeleteCategoryOnClick, showElements, handleClickDeleteCategory
        , openn, handleClose } = props;

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
                            {/* <td>{Object.keys(category.subCategories).length} ({category.subCategories[0].name}) </td> */}
                            <td>{category.subCategories && category.subCategories[0] ? `${Object.keys(category.subCategories).length} (${category.subCategories[0].name})` : 0}</td>
                            {/* <td>{category.subCategories ? category.subCategories.name : ""}</td> */}
                            <td>
                                
                                    {showElements ?
                                        <button className="btn btn-outline-success"
                                            onClick={() => handleClickAddCategory()}>
                                            New category
                                        </button>
                                        :
                                        null
                                    }

                                <button type="button" className="btn btn-outline-warning" data-toggle="tooltip" data-placement="top" title="Edit Button" data-original-title=""
                                    onClick={() => handleClickEditCategory(category._id)}>Edit</button>
                                        &nbsp;
                                    <button type="button" className="btn btn-outline-danger" data-toggle="tooltip" data-placement="top" title="Delete Button" data-original-title=""//data-toggle="modal" data-target="#DeleteModal"
                                    onClick={() => handleClickDeleteCategory(category._id)}>
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