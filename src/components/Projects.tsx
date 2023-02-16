import { ProjectsData } from "../data";

export default function Projects(projectData: ProjectsData) {
    return <section className="flex flex-col items-center">
        <h1>Projects</h1>

        <div className="flex justify-evenly items-center m-2">
            {projectData.projects.map((project, index) => {
                return <article key={index} className="flex flex-col justify-evenly  h-full w-1/3">
                    <div className=" flex flex-col items-center w-full">
                        <h2
                            className="m-2"
                        >
                            {project.name}
                        </h2>

                        <div className="flex w-full items-center justify-evenly">
                            <div className="flex justify-center">
                                <h3 className="text-center">Tech Stack</h3>
                            </div>

                            <ul
                                className="flex flex-col justify-center items-center justify-self-start"
                            >
                                {project.techStack.map((tech, index) => {
                                    return <li key={index}>
                                        <p>{tech}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div
                            className="m-2"
                        >
                            <h4>Purpose</h4>

                            <p>{project.purpose}</p>
                        </div>

                        <div
                            className="m-2"
                        >
                            <h4>Take-Aways</h4>

                            <ul>
                                {project.takeAways.map((takeAway, index) => {
                                    return <li key={index}>
                                        <p>{takeAway}</p>
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