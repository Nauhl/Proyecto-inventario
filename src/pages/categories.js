//import CategoriesList from '../../components/lists/CategoriesList';
//import { getAllCategories } from "../../src/lib/ctrlCategory";
import styles from '../../styles/Home.module.css';
import React from 'react'

export default function CategoryPage() {

  //CategoriesList()

  return (
    <>
      <div className={styles.container}>
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>SubCategory</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      
       {/* Card */}
       <div className={styles.card}>
       <div className="card border-info mb-3">
        <div className="card-header">Header</div>
        <div className="card-body text-success">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
      </>
      );
  //)
};

/* Modal 
      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">
        New Category
    </button>

      <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Add new Category</h5>
              <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                &times;
              </button>
            </div>
            <div className="modal-body">
              ...
        </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
      */


      /* 
            {allCategories.map(category => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>{Object.keys(category.subCategories).length}</td>
                <td>
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Edit</button>
                                &nbsp;
                                <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}*/