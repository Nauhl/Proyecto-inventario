import styles from '../../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
//import ModalCondition from '../modals/ModalCondition';

export default function ConditionList(props) {

    const [loading, setLoading] = useState(true);
    const { allConditionsState, handleClickEditCondition, DeleteConditionOnClick } = props;

    useEffect(() => {
        setTimeout(() => {
            setLoading();
        }, 3000);
    }, [])

    const loader = () => {
        let filas = [];
        for (let index = 0; index < 10; index++) {
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

        return allConditionsState && allConditionsState.length > 0 ? (
            <>
                <SkeletonTheme color="gray" highlightColor="white">
                    <div className={styles.container}>
                        <table className="table table-bordered" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filas}
                            </tbody>
                        </table>
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
        return allConditionsState && allConditionsState.length > 0 ? (
            <>
                <div className={styles.main}>
                </div>
                <br />
                <div className={styles.container}>
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allConditionsState.map(condition => (
                                <tr key={condition._id}>
                                    <td>{condition.name}</td>
                                    <td>{condition.description}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning"
                                            onClick={() => handleClickEditCondition(condition._id)}
                                        >Edit</button>
                                        <button type="button" className="btn btn-danger"
                                            onClick={() => DeleteConditionOnClick(condition._id)} >Delete</button>
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
}