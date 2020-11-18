import React, {useState, useEffect} from 'react';
import SkeletonArticle from '../skeletons/skeletonArticle';
//import SkeletonElement from '../skeletons/skeletonElement';
//import styles from '../../styles/Home.module.css';

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

            

            {articles && articles.map(article => (
                <div className="article" key={ article.id}>
                    <h3>{ article.title  }</h3>
            <p>{ article.body }</p>
                    </div>
            ))}

            {!articles && [1,2,3,4,5].map((n) => <SkeletonArticle key={n} theme="dark"/>)}
        </div>

    )
}

export default Articles;

/* <SkeletonElement type="title" />
            <SkeletonElement type="text" />
            <SkeletonElement type="thumbnail" />
            <SkeletonElement type="avatar" />*/