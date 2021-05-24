import React from 'react';

const Footer = () => {
    return (
        <div>
            <div></div>
            <div style={{backgroundColor: '#313b47', padding: '25px 250px', textDecoration: 'none'}}>
                <div className="row">
                    <div className="col">
                        <ul>
                            <h6>Novorésumé</h6>
                            <li><a href="#">Homepage</a></li>
                            <li><a href="#">Resume Templates</a></li>
                            <li><a href="#">CV Templates</a></li>
                            <li><a href="#">Cover Letters</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <h6>Learn</h6>
                            <li><a href="#">Career Blog</a></li>
                            <li><a href="#">How to Write a Resume</a></li>
                            <li><a href="#">How to Write CV</a></li>
                            <li><a href="#">How to Write a Cover Letter</a></li>
                            <li><a href="#">Resume Examples</a></li>
                            <li><a href="#">Cover Letter Examples</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <h6>Other</h6>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">E-book: How to get a job in 2020</a></li>
                            <li><a href="#">Media Kit</a></li>
                            <li><a href="#">Affiliates</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <h6>Legal/Contact</h6>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">contact@novoresume.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center text-white" style={{backgroundColor: '#1f262e'}}>
                <p>Our Vision is to</p>
                <h4>Fight Galactic Unemployment</h4>
                <hr className="w-25 m-auto" />
                <p>Ny Carlsberg Vej 80 <br />DK 1799 Copenhagen, Denmark</p>
                <p>Copyright &copy; 2021 Novorésumé ApS. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;