import React from 'react';
import SkeletonElement from './skeletonElement';
import Shimmer from '../skeletons/Shimmer';
//import styles from './skeleton.module.css';

const SkeletonArticle = ({ theme }) => {

    const themeClass = theme || 'light';

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="title" />
                <SkeletonElement type="title" />
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonArticle;