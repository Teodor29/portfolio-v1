import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


function Footer() {
    return (
        <Box className="footer" id="contact">
            <h2>Contact me!</h2>
            <Box className="links">
                <p>
                    <Link to="mailto:teodor.lien@gmail.com">
                        <IoMail size={16} />
                        teodor.lien@gmail.com
                    </Link>
                </p>
                <p>
                    <Link
                        to="https://www.linkedin.com/in/teodor-lien-a848b026a/"
                        target="_blank"
                    >
                        <FaLinkedin size={16} />
                        LinkedIn
                    </Link>
                </p>
            </Box>
        </Box>
    );
}

export default Footer;
