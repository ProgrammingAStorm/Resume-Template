import { ProjectsData } from "../data";

export default function Projects(projectData: ProjectsData) {
    return <section>
        <h1>Projects</h1>

        {projectData.projects.map((project, index) => {
            return <article key={index}>
                <h2>{project.name}</h2>

                <div>
                    <h3>Tech Stack</h3>

                    <ul>
                        {project.techStack.map((tech, index) => {
                            return <li key={index}>
                                <p>{tech}</p>
                            </li>
                        })}
                    </ul>
                </div>

                <div>
                    <h4>Purpose</h4>

                    <p>{project.purpose}</p>
                </div>

                <div>
                    <h4>Take-Aways</h4>

                    <ul>
                        {project.takeAways.map((takeAway, index) => {
                            return <li key={index}>
                                <p>{takeAway}</p>
                            </li>
                        })}
                    </ul>
                </div>
            </article>
        })}
    </section>
}