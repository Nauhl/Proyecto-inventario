import React, { useState, useEffect } from 'react';
import { DataTable, TableHeader, ProgressBar, Button } from 'react-mdl';
import  Table  from "react-bootstrap/Table";

export default function ConditionList(props) {

    const { allConditionsState, handleClickEditCondition, handleClickDeleteCondition } = props;

    return allConditionsState && allConditionsState.length > 0 ? (

        <div className="content">
        <Table className="table table-striped table-bordered" >
            <thead className="table-warning">
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {allConditionsState.map(condition => (
                    <tr key={condition._id} className="bg-secondary">
                        <td>{condition.name}</td>
                        <td>{condition.description}</td>
                        <td>

                            <Button type="button" raised accent ripple className="btn btn-warning"
                                onClick={() => handleClickEditCondition(condition._id)}
                            >Edit</Button>
                            <Button type="button" raised accent ripple className="btn btn-danger" 
                                onClick={() => handleClickDeleteCondition(condition)} >Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>

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
        <ProgressBar indeterminate />
            //<div className="spinner-border bg-success"></div>
        );
}