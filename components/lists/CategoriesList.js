import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
//import Category from '../../src/models/Category';
import { getAllCategories, getCategory, updateCategory } from '../../src/lib/ctrlCategory';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export default function CategoriesList(props) {

  /*const [data, setData] = useState(datapaises);*/
  const [loading, setLoading] = useState(true);

  const { allCategories, editCategory } = props;

  useEffect(() => {
    setTimeout(() => {
      setLoading();
    }, 5000);
  }, [])

  /*const datapaises =  [
    { id: 1, nombre: "México", minutos: 245}
  ];*/

  const loader = () => {
    return allCategories && allCategories.length > 0 ? (

      <>
    <SkeletonTheme color="gray" highlightColor="green">
        <div className={styles.container}>
          <table className="table table-bordered" >
            <thead>
              <tr>
                <th><Skeleton /></th>
                <th><Skeleton /></th>
                <th><Skeleton /></th>
                <th><Skeleton /></th>
              </tr>
            </thead>
            <tbody>
              {allCategories.map(category => (
                <tr >
                  <td><Skeleton /></td>
                  <td><Skeleton /></td>
                  <td><Skeleton /></td>
                  <td>
                    <Skeleton />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Card */}
        <div className={styles.footerr}>
          <div className="card border-info mb-3">
            <div className="card-header"><Skeleton /></div>
            <div className="card-body text-success">
              <h5 className="card-title"><Skeleton /></h5>
              <p className="card-text"><Skeleton /></p>
            </div>
          </div>
        </div>
        </SkeletonTheme>
      </>
    ) : (
        <>
          <div className="spinner-border"></div>
        </>
      );
      
    }

  
if (loading) {
  return (
    loader()
  )

}
else {
  return allCategories && allCategories.length > 0 ? (
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

      {/* Card */}
      <div className={styles.footerr}>
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
  }