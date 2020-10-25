import styles from '../../styles/Home.module.css';
import React from 'react';
import Category from '../../src/models/Category';
import { getAllCategories, getCategory, updateCategory } from '../../src/lib/ctrlCategory';

export default function CategoriesList(props) {

  const { allCategories, editCategory } = props;

  return allCategories && allCategories.length > 0 ? (
    <>
      <div className={styles.main}>
        <h2>Categories</h2>
        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#newCategory">New Category</button>
      </div>
      <br />
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
            {allCategories.map(category => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>{Object.keys(category.subCategories).length}</td>
                <td>
                  <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#staticBackdrop">Edit</button>
                            &nbsp;
                            <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      { /* Modal edit */}
      <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Edit Category</h5>
              <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                &times;
              </button>
            </div>

            <div className="form-group">
              <label>ID</label>
              <input
                className="form-control"
                readOnly
                type="text"
                name="id"
              />
              <br />

              <label>Category</label>
              <input
                className="form-control"
                type="text"
                name="category" />
              <br />

              <label>Description</label>
              <input
                className="form-control"
                type="text"
                name="description" 
                />
              <br />

              <label>SubCategory</label>
              <input
                className="form-control"
                name="text" />

            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>

      { /* Modal create */}
      <div className="modal fade" id="newCategory" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Add new Category</h5>
              <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                &times;
              </button>
            </div>
            <div className="modal-body">

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>

      { /* Posible implementacion */ }
      <div className="btn-group">
        <button type="button" className="btn btn-primary">Categories</button>
        <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
          <span className="caret"></span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Tablet</a>
          <a className="dropdown-item" href="#">Smartphone</a>
        </div>
      </div>

      { /* Posible implementacion */ }
      <input type="file" className="form-control-file border"></input>

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
  ) : (
      <>
        <div className="spinner-border"></div>
      </>
    );
}

