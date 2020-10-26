import styles from '../../styles/Home.module.css';
import React from 'react';
import { getAllConditions, getCondition} from "../../src/lib/ctrlCondition";

export default function ConditionPage() {

  const [allConditions, setAllConditions] = React.useState([]);
  //const [newCategory, setNewCategory] = React.useState({});
  
  React.useEffect(() => {
    getConditions();
  }, []);

  const getConditions = () => {
    getAllConditions().then(conditions => {
      setAllConditions(conditions);
    });
  }

  return allConditions && allConditions.length > 0 ? (
    <>
    <div className={styles.main}>
        <h2>Condition</h2>
        </div>
      <br />
      <div className={styles.container}>
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allConditions.map(condition => (
              <tr key={condition._id}>
                <td>{condition.name}</td>
                <td>{condition.description}</td>
                <td>{condition.isActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </>
  ) : (
    <>
      <div className="spinner-border"></div>
    </>
  );
};

/*<div>
<div className={styles.card}>
  <img src="../../utils/img/home_inventory.png" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Card with stretched link</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
    </div>
    </div>
</div>*/