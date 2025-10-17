import React from "react";
import "./styles/main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from "./components/Header";
import ScrollTop from "./components/ScrollTop";

const skillsList = [
    "HTML",
    "PHP",
    "JavaScript",
    "CSS",
    "SCSS",
    "Python",
    "Twig",
    "React",
    "Pico CMS",
    "Bootstrap",
    "Material-UI",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Visual Studio Code",
    "Figma",
    "Photoshop",
    "REST API",
    "Postman",
];

function App() {
    return (
        <Router>
            <Box sx={{ marginX: ["0.5rem", "0.5rem", "1.5rem"] }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                maxHeight: "100vh",
                                position: { md: "sticky" },
                                top: 0,
                            }}
                        >
                            <Header />
                        </Grid>

                        <Grid item xs={12} md={6} sx={{}}>
                            <Box className="main">
                                <Home />
                                <Skills skills={skillsList} />
                                <Projects />
                                <Footer />
                                <ScrollTop>
                                    <Fab
                                        color="primary"
                                        size="small"
                                        aria-label="scroll back to top"
                                        className="scroll-top"
                                    >
                                        <KeyboardArrowUpIcon />
                                    </Fab>
                                </ScrollTop>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Router>
    );
}

export default App;
