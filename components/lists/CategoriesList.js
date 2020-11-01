import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export default function CategoriesList(props) {

  const { allCategories , editCategory } = props;
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading();
    }, 3000);
  }, [])

  const loader = () => {
    let filas=[];
    for (let index = 0; index < 10; index++){
      filas.push(
        
        <tr key={index}>
        <td><Skeleton /></td>
        <td><Skeleton /></td>
        <td><Skeleton /></td>
        <td>
          <Skeleton />
        </td>
      </tr>

      );
    }

    return allCategories && allCategories.length > 0 ? (

      <>
    <SkeletonTheme color="gray" highlightColor="white">
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
              {filas}
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
                  <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#staticBackdrop" >Edit</button>
                            &nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#DELETEbtn" >Delete</button>
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
        
      </>
    );
  }
  }