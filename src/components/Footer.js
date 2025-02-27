import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-bar">
            <p>&copy; {new Date().getFullYear()} Temperature Dashboard. All rights reserved.</p>
        </footer>
    );
};

export default Footer;