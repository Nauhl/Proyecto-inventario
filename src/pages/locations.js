import React from "react";
import Articles from "../../components/skeleton_components/articles";
import User from "../../components/skeleton_components/user";
//import styles from '../../components/skeletons/skeleton.module.css';
import style from '../../styles/Home.module.css';

export default function LocationPage() { 
    return (
        <>
            <h1>Location goes here!</h1>

            
      <div className={style.content}>
                <Articles />
                <User />
            </div>
        </>
    );
};
