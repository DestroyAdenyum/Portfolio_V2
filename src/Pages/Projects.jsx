import React from "react";

import DataProjects from "../Data/DataProjects.json";

import ProjectComponent from "../Components/ProjectComponent";

function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center gap-7 mt-5 pb-5">
            <h3 className="text-2xl font-protest text-white text-center my-7">Projets</h3>
            <div className="w-fit h-auto grid grid-cols-2 gap-12 place-content-center pl-20 pr-20">
                {DataProjects.map((data, id) => (
                    <ProjectComponent 
                        key={id}
                        title={data.title}
                        description={data.description}
                        skills={data.skills}
                        assignments={data.assignments}
                        github={data.github}
                        picture={data.picture}
                        text={data.text}
                        site={data.site}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;
