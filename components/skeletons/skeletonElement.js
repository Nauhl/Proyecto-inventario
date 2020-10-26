import React from 'react';
import styles from '../../styles/Home.module.css';

const SkeletonElement = ({ type }) => {
    const classes = `skeleton ${type}`;

    return (
        <div className={classes}>

        </div>
    )
}

export default SkeletonElement; 