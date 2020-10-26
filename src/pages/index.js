//import Head from 'next/head'     // I change/move head to _document.js
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <div className="jumbotron">
            <h1>Welcome to your Inventory</h1>
            <p>Here you will be able to ...lsdnljndkjnkg</p>
          </div>
        </h1>
      </div>

        {/* Card */}
        <div className={styles.footerr}>
          <div className="card border-info mb-3">
            <div className="card-header">Header</div>
            <div className="card-body text-success">
              <h5 className="card-title">Info card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
    </>
  )
}
//<main className={styles.main}></main>