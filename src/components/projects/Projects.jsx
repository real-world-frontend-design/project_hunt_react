import React from 'react'
import Project from './project/Project';
import { CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';

// TODO: pass the current id insted of slug
// TODO: export all the styles code from styles.js file
const Projects = ({ setCurrentSlug }) => {

    const projects = useSelector((state) => state.projects)
    console.log(projects);

    return (
        !projects.length?        
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>

        <CircularProgress style={{display: "flex", justifyContent: "center", alignItems: "center"}} />  

        </div>
        :(
            <div style={{paddingTop: "50px"}}>
                {projects?.map((project) => (
                    <div key={project.slug} >
                        <Project project={project} setCurrentSlug={setCurrentSlug} />
                    </div>
                    ))}
            </div>
            
        )
    )
}

export default Projects;