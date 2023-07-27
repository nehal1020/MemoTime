import React from 'react';
import './footer.css'

function Footer() {
    return (
        <footer class="footer-distributed">

        <div class="footer-left">
            <h3>Memo<span>Time</span></h3>

            <p class="footer-links">
                <a href="#">Home</a>
                &nbsp;|&nbsp;
                <a href="#">About</a>
                &nbsp;|&nbsp;
                <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">Copyright © 2023 <strong>MemoTime</strong> All rights reserved</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p>Jaipur, Rajasthan</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+91 0000011111</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto: nehalsharma668@gmail.com">memotime.memories@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
                <strong>MemoTime</strong> is a memory storage web-app where you can store and organized your cherished
                moments
                Effects along with
                React.js, Redux and Backened using Node.js, MongoDb.
            </p>
            <div class="footer-icons">
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-youtube"></i></a>
            </div>
        </div>
    </footer>
    );
}

export default Footer;