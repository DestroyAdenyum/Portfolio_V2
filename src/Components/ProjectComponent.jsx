import React from "react";

function ProjectComponent({
    title,
    assignments,
    skills,
    description,
    github,
    picture,
    site
  }) {

    function openGithubLink() {
        window.open(github, "_blank");
    }

    function openSiteLink() {
        window.open(site, "_blank");
      }

    return (
        <article className="bg-white text-center flex flex-col gap-4 pb-4 rounded-xl shadow-lg">
            <div className="w-full">
                <img className="w-full h-64 object-cover" src={picture} alt={title}></img>
            </div>
            <div className="h-auto flex flex-col gap-4 pl-4 pr-4">
                <div className="flex flex-col gap-4 pl-4 pr-4">
                    <h4 className="text-slate-800 font-protest text-2xl">{title}</h4>
                    <div className="text-slate-800 font-handlee">{description}</div>
                    <ul>
                        {assignments.map((assignment, index) => (
                            <li key={index} className="text-slate-800 font-handlee">
                                <i className="fa-solid fa-check text-slate-800"></i> {assignment}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul className="w-auto flex flex-row justify-center items-center gap-6 pl-4 pr-4">
                        {skills.map((skill, index) => (
                            <li key={index} className="bg-slate-800 text-white py-1.5 px-2 rounded-xl">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-row justify-center items-center gap-6">
                    <button className="text-slate-800 font-handlee" onClick={openGithubLink}>
                    <i className="fa-brands fa-github text-slate-800"></i> GitHub
                    </button>
                    {site && (
                        <button className="text-slate-800 font-handlee" onClick={openSiteLink}>
                             <i class="fa-solid fa-globe"></i> Site
                        </button>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProjectComponent;
