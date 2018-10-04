import React from "react";

const today = new Date()

const Footer = (props) => {
    return (
        <footer>
            <p>
                Jirasektek&#169; {today.getFullYear()}
            </p>
        </footer>
    )
}

export default Footer;