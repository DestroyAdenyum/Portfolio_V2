import React from "react";

import Photo from "../Assets/Photo/01nb_paper.webp";

function AboutMe() {
    return (
        <section className="container m-auto pt-8 flex flex-col items-center pb-10">
            <h1 className="text-3xl text-center font-protest text-white">Marie-Charlotte LEVITRE</h1>
            <h2 className="text-2xl text-center font-handlee text-white">Développeuse front-end intégratrice React</h2>
            <div className="h-fit">
                <img src={ Photo } alt="Marie-Charlotte" className="w-full h-full object-cover" />
            </div>
            <div className="w-3/5 pb-10 tablet:w-full tablet:px-5 phone:w-full">
                <p className="text-center font-handlee text-white text-xl">Diplômée en décembre 2023 en développement intégration web, passionnée d'informatique et en quête d’apprentissage. J'aime travailler sur des projets innovants et passionnants qui me permettent de mettre en pratique mes connaissances et en apprendre de nouvelles.</p>
                <p className="text-center font-handlee text-white text-xl"> Mon objectif est de devenir une développeuse web expérimentée et de contribuer à la création d'applications et de sites web qui améliorent la vie des gens.</p>
            </div>
            <div className="h-10 w-auto flex flex-row gap-5">
                <a className="text-3xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href="https://github.com/DestroyAdenyum" target="_blank" rel="noreferrer" ><span><i className="fa-brands fa-github"></i></span></a>
                <a className="text-3xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href="https://www.linkedin.com/in/marie-charlotte-levitre" target="_blank" rel="noreferrer"><span><i className="fa-brands fa-linkedin-in"></i></span></a>
            </div>
        </section>
    )
}

export default AboutMe;