import React, {useState, useEffect} from 'react';
import styles from '../../styles/Home.module.css';
import SkeletonElement from '../skeletons/skeletonElement';

const Articles = () => {

    const [articles, setArticle] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('http://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setArticle(data);
        }, 5000)
    })

    return (
        <div className="articles">
            <h2 className={styles.h2}>Articles</h2>

            <SkeletonElement type={styles.skeleton.title} />

            {articles && articles.map(article => (
                <div className="article" key={ article.id}>
                    <h3>{ article.title  }</h3>
            <p>{ article.body }</p>
                    </div>
            ))}
            {!articles && <div>Loading...</div>}
        </div>

    )
}

export default Articles;