import React from "react";
import styles from '../../styles/Home.module.css';

export default function CategoriesList(props) {

    const { allCategories, handleClickEditCategory, DeleteCategoryOnClick } = props;

    return allCategories && allCategories.length > 0 ? (
        <>
            <div className={styles.main}>
            </div>
            <br />
            <div className={styles.main}>
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Sub Categories</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allCategories.map(category => (
                            <tr key={category._id}>
                                <td>{category.name}</td>
                                <td >{category.description}</td>
                                <td >{Object.keys(category.subCategories).length}</td>
                                <td >
                                    <button type="button" className="btn btn-warning" 
                                    onClick={() => handleClickEditCategory(category._id)}>Edit</button>

                                    <button type="button" className="btn btn-danger" 
                                    onClick={() => DeleteCategoryOnClick(category._id)} >Delete</button>
                                </td>
                                </tr>
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
<td >
    <button type="button" data-toggle="modal" data-target="#DeleteCategoryModal" className="btn btn-danger" onClick={() => deleteCategoryOpenModal()}>Delete</button>
</td> */