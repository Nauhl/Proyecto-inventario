import React from 'react';
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';

export default function Foooter() {

    return (
<>
        <Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Partners</a>
                <a href="#">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Details">
            <FooterLinkList>
                <a href="#">Specs</a>
                <a href="#">Tools</a>
                <a href="#">Resources</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <a href="#">How it works</a>
                <a href="#">Patterns</a>
                <a href="#">Usage</a>
                <a href="#">Products</a>
                <a href="#">Contracts</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
                <a href="#">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>

<Footer size="mini" className="bg-dark">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
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