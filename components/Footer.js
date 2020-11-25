import React from 'react';
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import styles from "../styles/Home.module.css";

export default function Foooter() {

    return (
<>
        <Footer size="mega" className={styles.footerr}>
    <FooterSection type="middle" className={styles.textItems}>
        <FooterDropDownSection  title="">
            <FooterLinkList>
            <img src="Logo-removebg-preview.png" className={styles.avatarLogoFooter} alt="profile_pic" />
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Contact">
            <FooterLinkList>
            <li><a href="https://github.com/Nauhl">GitHub</a>&nbsp;&nbsp;<i className="fab fa-github text-light mr-4 "></i></li>                
            <li><a href="#">Twitter</a>&nbsp;&nbsp;<i className="fab fa-twitter-square text-light mr-4 "></i></li>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="About us">
            <FooterLinkList>
                <p>We want to help bring to the people a good managment tool</p>
            </FooterLinkList>
        </FooterDropDownSection>
        
    </FooterSection>
</Footer>

<Footer size="mini" className={styles.textItems2} >
    <FooterSection type="left" logo="Inventory">
        <FooterLinkList>
            <a>
                &copy;{new Date().getFullYear()}  INVENTORY | All right deserved | Terms 
            </a>
            <a>Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
</>

        // <div className="footer">
        //     <div className="container">
        //         <div className="row">
        //             {/* Column */}
        //             <div className="col">
        //                 <h4>Inventory</h4>
        //                 <ul className="list-unstyled">
        //                     {/* <li className="float-lg-right "><a href="">Back to top</a></li>  */}
        //                     <li><a href="https://github.com/Nauhl">GitHub</a>&nbsp;&nbsp;<i className="fab fa-github text-light mr-4 "></i></li>
        //                     <li><a href="#">Twitter</a>&nbsp;&nbsp;<i className="fab fa-twitter-square text-light mr-4 "></i></li>
        //                 </ul>
        //             <p>Made by <a href="https://github.com/Nauhl">Me</a>.</p>
        //             </div>
        //             <hr />
        //             <div className="row">
        //                 <p className="col-sm">
        //                     &copy;{new Date().getFullYear()}  INVENTORY | ALL right deserved | Terms | 
        //                 </p>
        //                 </div>
        //         </div>
        //     </div>
        // </div>
    )
}
//&nbsp;&nbsp;&nbsp;&nbsp;