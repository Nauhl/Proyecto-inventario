import React from 'react';
import './skeleton.css';

const SkeletonElement = ({ type }) => {
    const classes = `skeleton ${type}`;

    // before of classes was skeleton but the guy put the variable to put any kind of call (type.text, type.avatar, etc.)
    return (
        <div className={classes}> 
        </div>
    )
}

export default SkeletonElement; 