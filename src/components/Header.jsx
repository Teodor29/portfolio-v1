import { Link } from "react-router-dom";
import { Box, textFieldClasses } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      }
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box className="header">
      <Box>
        <h1>
          <Link to="#home" onClick={() => handleScroll("home")}>
            Teodor Lien
          </Link>
        </h1>
        <h2>Frontend Developer</h2>
        <p>
          <a href="mailto:teodor.lien@gmail.com">teodor.lien@gmail.com</a>
        </p>

        <Box className="nav-links">
          <Link to="#home" onClick={() => handleScroll("home")}>
            <span>Home</span>
          </Link>
          <Link to="#skills" onClick={() => handleScroll("skills")}>
            <span>Skills</span>
          </Link>
          <Link to="#projects" onClick={() => handleScroll("projects")}>
            <span>Projects</span>
          </Link>
          <Link to="#contact" onClick={() => handleScroll("contact")}>
            <span>Contact</span>
          </Link>
        </Box>
      </Box>
      <Box className="links">
        <Link to="https://github.com/Teodor29" target="_blank">
          <FaGithub size={30} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/teodor-lien-a848b026a/"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
