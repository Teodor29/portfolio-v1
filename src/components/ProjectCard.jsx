import React from "react";
import { Box } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const ProjectCard = ({ project }) => {
    return (
        <Box className="card">
            <CardActionArea
            
                sx={{
                    padding: "1rem",
                }}
                href={project.link}
                target="_blank"
                style={{ textDecoration: "none" }}
            >
                <CardMedia
                    component="img"
                    height="290"
                    image={project.image}
                    alt={project.altText}
                />
                <CardContent
                    sx={{
                        fontFamily: "Inter, sans-serif",
                        padding: "1rem 0 0 0",
                    }}
                >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Box id="skills" className="skills">
                        <ul>
                            {project.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Box>
    );
}

export default ProjectCard;