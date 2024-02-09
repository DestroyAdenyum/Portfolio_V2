import React from "react";

import Photo from "../Assets/Photo/01nb_paper.png";

function AboutMe() {
    return (
        <section className="m-auto pt-8 flex flex-col items-center">
            <h1 className="text-3xl font-protest text-white">Marie-Charlotte LEVITRE</h1>
            <h2 className="text-2xl font-handlee text-white">Développeuse front-end intégratrice React</h2>
            <div className="h-fit">
                <img src={ Photo } alt="Marie-Charlotte" className="object-cover" />
            </div>
            <div className="w-3/5 pb-20">
                <p className="text-center font-handlee text-white text-xl">Diplômée en décembre 2023 en développement intégration web, passionnée d'informatique et en quête d’apprentissage. J'aime travailler sur des projets innovants et passionnants qui me permettent de mettre en pratique mes connaissances et en apprendre de nouvelles.</p>
                <p className="text-center font-handlee text-white text-xl"> Mon objectif est de devenir une développeuse web expérimentée et de contribuer à la création d'applications et de sites web qui améliorent la vie des gens.</p>
            </div>
        </section>
    )
}

export default AboutMe;