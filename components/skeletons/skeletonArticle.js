import React from 'react';
import SkeletonElement from './skeletonElement';

const SkeletonArticle = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-article">
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="title" />
                <SkeletonElement type="title" />
            </div>
        </div>
    )
}

export default SkeletonArticle;