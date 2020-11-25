import React from 'react';
import styles from "../../styles/Home.module.css";

export default function ConditionList(props) {

    const { allConditionsState, handleClickEditCondition, handleClickDeleteCondition } = props;

    return allConditionsState && allConditionsState.length > 0 ? (

        <table className={styles.main, "table"}  >
            <thead className={styles.textItems3}>
                <tr className="table-primary">
                    <th scope="row" >Name</th>
                    <th scope="row" >Description</th>
                    <th scope="row" >Action</th>
                </tr>
            </thead>
            <tbody>
                {allConditionsState.map(condition => (
                    <tr key={condition._id} className="bg-gray">
                        <td className={styles.textItems3}>{condition.name}</td>
                        <td className={styles.textItems3}>{condition.description}</td>
                        <td className={styles.textItems3}>

                            <button type="button" className="btn btn-outline-warning "
                                onClick={() => handleClickEditCondition(condition._id)}
                            ><i className="fas fa-pen-square"></i>&nbsp;Edit</button>
                            &nbsp;
                            
                            <button type="button" className="btn btn-outline-danger "
                                onClick={() => handleClickDeleteCondition(condition)}
                            ><i className="fas fa-trash-alt"></i>&nbsp;Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        // </div>
        // <DataTable
        //     shadow={0}
        //     rows={[
        //         allConditionsState.map(condition => (
        //         <tr key={condition._id} className="bg-secondary">
        //             <td id="material">{condition.name}</td>
        //             <td id="description">{condition.description}</td>
        //             <td id="actions">

        //                 <button type="button" className="btn btn-outline-warning"
        //                     onClick={() => handleClickEditCondition(condition._id)}
        //                 >Edit</button>
        //                 <button type="button" className="btn btn-outline-danger" 
        //                     onClick={() => handleClickDeleteCondition(condition)} >Delete</button>
        //             </td>
        //         </tr>
        //     ))
        // ]}
        // >
        //     <TableHeader name="material">Name</TableHeader>
        //     <TableHeader name="description">Description</TableHeader>
        //     <TableHeader name="actions">Action</TableHeader>
        // </DataTable >

    )
        : (
            <div className="spinner-border"></div>
        );
}