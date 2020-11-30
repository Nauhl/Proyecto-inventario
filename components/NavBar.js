import React from 'react';
// import MyApp from '../pages/_app';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import styles from "../styles/Home.module.css";

export default function NavBar() {

    return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Inventory" scroll>
                        <Navigation >
                            {/* <a href="/">Inventory</a> */}
                            <a href="/" className={styles.text}>Home</a>
                            <i className="fas fa-sitemap mdl-color-text--white">&nbsp; &nbsp;<a href="/items" className={styles.text}>Items</a></i>
                            {/* <i className="fas fa-user-tie mdl-color-text--white">&nbsp; &nbsp;<a href="/aboutUs" className={styles.text}>About us</a></i> */}
                            <i className="fas fa-id-card-alt mdl-color-text--white">&nbsp; &nbsp;<a href="/contact" className={styles.text}>Contact</a></i>
                        </Navigation>
                    </Header>
                    <Drawer className="header-draw mdl-color-text--white" title="">
                        <Navigation>
                            <div className="profile_img">
                                <img src="Logo-removebg-preview.png" className={styles.avatarLogo} alt="profile_pic" />
                            </div>
                            <i className="far fa-list-alt mdl-color-text--white">&nbsp; &nbsp;<a href="/categories" className={styles.text}>Categories</a></i>
                            <i className="far fa-compass mdl-color-text--white">&nbsp; &nbsp;<a href="/locations" className={styles.text}>Locations</a></i>
                            <i className="fas fa-window-restore mdl-color-text--white">&nbsp; &nbsp;<a href="/conditions" className={styles.text}>Conditions</a></i>
                            <i className="far fa-calendar-check mdl-color-text--white">&nbsp; &nbsp;<a href="/rooms" className={styles.text}>Rooms</a></i>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                    </Content>
                </Layout>
            </div>

        // <div style={{ height: '668px', position: 'relative' }}>
        //   <Layout style={{ background: 'url(https://mydatascope.com/blog/wp-content/uploads/2019/12/Paper-Field-1-1.jpg) center / cover' }}>
        //     <Header transparent title="Title" style={{ color: 'white' }}>
        //       <Navigation>
        //         <a href="/categories">Categories</a>
        //         <a href="/locations">Locations</a>
        //         <a href="/conditions">Conditions</a>
        //         <a href="/rooms">Rooms</a>
        //       </Navigation>
        //     </Header>
        //     <Drawer title="Title">
        //       <Navigation>
        //         <a href="/">Link</a>
        //         <a href="/">Link</a>
        //         <a href="/">Link</a>
        //         <a href="/">Link</a>
        //       </Navigation>
        //     </Drawer>
        //     <Content />
        //   </Layout>
        // </div>
    )
}

// className="mdl-color-text--white"