import React from 'react';
import { useLoaderData } from 'react-router';

const Projects = () => {

    const projectsData = useLoaderData();
    console.log(projectsData.products);
    return (
        <div>
            This is projects component
        </div>
    );
};

export default Projects;