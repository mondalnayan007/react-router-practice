import React from 'react';
import { useLoaderData } from 'react-router';
import ProjectsCard from './ProjectsCard';

const Projects = () => {

    const projectsData = useLoaderData();
  
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-10'>
            {
                 projectsData.map(project => <ProjectsCard key={project.id} project={project}></ProjectsCard>)
            }
        </div>
    );
};

export default Projects;