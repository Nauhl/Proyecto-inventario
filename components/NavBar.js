import React from 'react';
// import MyApp from '../pages/_app';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

export default function NavBar() {

    return (
        
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Title" scroll>
                        <Navigation>
                            <a href="/categories">Categories</a>
                            <a href="/locations">Locations</a>
                            <a href="/conditions">Conditions</a>
                            <a href="/rooms">Rooms</a>
                        </Navigation>
                    </Header>
                    <Drawer className="header-draw" title="Title">
                        <Navigation>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
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

/*
<i className="fas fa-window-restore"></i>
<i className="far fa-calendar-check"></i>
<i className="far fa-compass"></i>
<i className="far fa-list-alt"></i>
*/