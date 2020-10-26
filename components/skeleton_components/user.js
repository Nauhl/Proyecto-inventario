import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';

const User = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('http://jsonplaceholder.typicode.com/users/1');
            const data = await res.json();
            setProfile(data);
        }, 5000)
    })

    return (
        <div className="user">
            <h2 className={styles.h2}>User</h2>

            {profile && (
                <div className="profile">
                    <h3>{ profile.username }</h3>
                    <p>{ profile.email }</p>
                    <a href={ profile.website }>{ profile.website}</a>
                </div>
            )}

            {!profile && <div className="spinner-border">Loading...</div>}
        </div>
    )
}

export default User;