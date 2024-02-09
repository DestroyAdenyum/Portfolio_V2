import React from "react";

import DataSkills from "../Data/DataSkills.json";

function SkillComponent() {
    return (
        <article className="w-fit h-auto grid grid-cols-4 gap-12 place-content-center" >
            {DataSkills.skills.map((skill) => (
                <div key={skill.id} className="flex flex-col gap-2 items-center w-32 h-32 p-1 bg-slate-800 rounded-tl-xl rounded-br-xl shadow-lg">
                    <img className="w-20 h-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={skill.icon} alt={skill.alt} />
                    <h3 className=" font-protest text-white text-center text-xl">{skill.name}</h3>
                </div>
            ))}
        </article>
    )
}

export default SkillComponent;
