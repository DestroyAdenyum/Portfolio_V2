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
        <article className="overflow-hidden bg-gray-200 text-center flex flex-col rounded-xl shadow-lg border-2">
            <img className="w-full h-64 object-cover" src={picture} alt={title}></img>
            <div className="min-h-full flex flex-col gap-4 h-full py-4 px-4 border-t-2">
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
                    {skills.map((skill, index) => (
                        <span 
                            className="inline-block bg-slate-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                            key={index}
                        >
                            {skill}
                        </span>
                    ))}
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
