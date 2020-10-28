import React from 'react';
import SkeletonElement from './skeletonElement';

const SkeletonProfile = ({ theme }) => {

    const themeClass = theme || 'light';  // If the theme by default is "dark" it will set dark if not the default will be light or inverse

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-profile">
                <div>
                    <SkeletonElement type="avatar" />
                </div>

                <div>
                    <SkeletonElement type="title" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                </div>
            </div>
        </div>
    )
}

export default SkeletonProfile; 