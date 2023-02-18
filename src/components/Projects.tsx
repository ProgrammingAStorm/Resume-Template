import { ProjectsData } from "../data";

export default function Projects(projectData: ProjectsData) {
    return <section className="flex flex-col items-center">
        <h1 className="text-7xl">Projects</h1>

        <div className="flex items-stretch m-2">
            {projectData.projects.map((project, index) => {
                return <article key={index} className="flex flex-col justify-evenly w-1/3">
                    <div className=" flex flex-col items-center w-full">
                        <h2
                            className="text-4xl justify-self-start m-2"
                        >
                            {project.name}
                        </h2>

                        <div className="flex w-full items-center justify-evenly">
                            <div className="flex justify-center">
                                <h3 className="text-2xl text-center">Tech Stack</h3>
                            </div>

                            <ul
                                className="flex flex-col justify-center items-center justify-self-start"
                            >
                                {project.techStack.map((tech, index) => {
                                    return <li key={index}>
                                        <p className="text-xl">{tech}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div
                            className="m-2"
                        >
                            <h4 className="text-3xl">Purpose</h4>

                            <p className="text-lg">{project.purpose}</p>
                        </div>

                        <div
                            className="m-2"
                        >
                            <h4 className="text-3xl">Take-Aways</h4>

                            <ul>
                                {project.takeAways.map((takeAway, index) => {
                                    return <li key={index} className="list-disc">
                                        <p className="text-lg">{takeAway}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </article>
            })}
        </div>
    </section>
}