import React from "react";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../styles/_variables.scss";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
    return (
        <Box id="projects" className="projects">
            <h2>Projects</h2>
            <Box className="cards">
                <ProjectCard
                    project={{
                        title: "E-scooter Rental",
                        description:
                            "A group project built by four students. Electric scooter rental system with backend, simulation, and three web clients: admin, customer (mobile) and customer (desktop). Everything runs in Docker for easy setup.",
                        image: "scooter-admin-map.png",
                        altText: "E-scooter Rental",
                        skills: [
                            "React",
                            "JavaScript",
                            "MongoDB",
                            "SCSS",
                            "Node.js",
                            "Express",
                            "Figma",
                            "Git",
                            "Docker",
                            "Postman",
                            "REST API",
                        ],
                        link: "https://github.com/Teodor29/e-scooter-project-vteam",
                    }}
                />
                <ProjectCard
                    project={{
                        title: "Lien Capital",
                        description:
                            "A simple and responsive website built with Pico CMS for an investment company.",
                        image: "lien-capital.png",
                        altText: "Lien Capital",
                        skills: ["PHP", "SCSS", "Twig", "Pico", "Git"],
                        link: "https://github.com/Teodor29/investment-company-design",
                    }}
                />
                <ProjectCard
                    project={{
                        title: "To Do List",
                        description:
                            "A responsive to-do list app built with React and Tailwind CSS. Users can add and complete tasks. Deployed with GitHub Pages.",
                        image: "to-do.png",
                        altText: "To Do",
                        skills: ["React", "JavaScript", "Tailwind CSS", "Git"],
                        link: "https://github.com/Teodor29/to-do",
                    }}
                />
            </Box>
        </Box>
    );
};

export default Projects;
