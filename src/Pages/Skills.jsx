import React from "react";

import SkillComponent from "../Components/SkillComponent";

function Skills() {
    return (
        <section id="skills" className="w-4/5 m-auto mb-8 flex flex-col items-center gap-7">
            <h3 className="text-2xl font-protest text-white text-center my-7">Skills</h3>
            <SkillComponent />
        </section>
    )
}

export default Skills;
