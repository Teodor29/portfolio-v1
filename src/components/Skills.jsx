import React from 'react';
import { Box } from '@mui/material';

const Skills = ({ skills }) => {
    return (
        <Box id="skills" className="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </Box>
    );
};

export default Skills;