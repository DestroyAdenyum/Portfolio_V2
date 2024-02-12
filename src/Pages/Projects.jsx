import React, { useState } from "react";

import DataProjects from "../Data/DataProjects.json";

import ProjectComponent from "../Components/ProjectComponent";

function Projects() {
    const reversedProjects = [...DataProjects].reverse();

    const [visibleProjects, setVisibleProjects] = useState(2);

    const showMoreProjects = () => {
        setVisibleProjects(visibleProjects + 4);
      };

    return (
        <section id="projects" className="flex flex-col items-center gap-7 mt-5 pb-5">
            <h3 className="text-2xl font-protest text-white text-center my-7">Projets</h3>
            <div className="w-fit h-auto grid grid-cols-2 tablet:grid-cols-1 phone:grid-cols-1 gap-12 place-content-center pl-20 pr-20">
                {reversedProjects.slice(0, visibleProjects).map((data, id) => (
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
            {visibleProjects < reversedProjects.length && (
                <button
                className="bg-slate-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                onClick={showMoreProjects}
                >
                Voir plus
                </button>
            )}
        </section>
    )
}

export default Projects;
