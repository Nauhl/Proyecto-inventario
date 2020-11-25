import React from 'react';

export default function ConditionList(props) {

    const { allConditionsState, handleClickEditCondition, handleClickDeleteCondition } = props;

    return allConditionsState && allConditionsState.length > 0 ? (

        <table className="table table-striped table-responsive" >
            <thead>
                <tr className="table-primary">
                    <th scope="row">Name</th>
                    <th scope="row">Description</th>
                    <th scope="row">Action</th>
                </tr>
            </thead>
            <tbody>
                {allConditionsState.map(condition => (
                    <tr key={condition._id} className="bg-gray">
                        <td>{condition.name}</td>
                        <td>{condition.description}</td>
                        <td>

                            <button type="button" className="btn btn-outline-warning "
                                onClick={() => handleClickEditCondition(condition._id)}
                            >Edit</button>
                            &nbsp;
                            <button type="button" className="btn btn-outline-danger "
                                onClick={() => handleClickDeleteCondition(condition)}
                            >Delete</button>
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
            <>  </>
            //<div className="spinner-border bg-success"></div>
        );
}