import { ReactNode } from "react"
import { ProjectsData, ProjectData } from "../data";

export default function Projects(projectData: ProjectsData) {
    function distribute(entries: Array<ProjectData>, total: number): ReactNode {
        // List of groups of three
        const boxes: Array<Array<ReactNode>> = [];
        // Current box being added
        let currentBox: Array<ReactNode> = [];

        const getHistory = (project: ProjectData, index: number) => {
            return <li className="list-disc list-inside w-1/2 p-6 border-cyan-900 first:border-y-2 last:border-x-2 odd:border-r-2 even:border-y-2">
                <article key={index} className="flex flex-col justify-evenly h-full p-4">
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
            </li>
        }

        // Loops over the tools
        entries.forEach((entry, index) => {
            // Checks to see if the current box is filled
            if (currentBox.length < total) {
                // If not then it pushes the li to the current box
                currentBox.push(getHistory(entry, index));
                // If it is, then it adds it to the boxes and clears the current box 
            } else {
                boxes.push(currentBox)
                currentBox = [];

                currentBox.push(getHistory(entry, index));
            }

            if (currentBox.length === total) {
                boxes.push([...currentBox]);
                currentBox = [];
            }
        });

        return boxes.map((box, index) => {
            return <div key={index} className="flex flex-wrap justify-center w-full">
                {box.map((items) => {
                    return items;
                })}
            </div>
        })
    }

    return <section className="flex flex-col items-center border-b-2 border-cyan-900">
        <h1 className="text-7xl p-10 border-x-2 border-cyan-900">Projects</h1>

        <ul className="flex items-stretch border-cyan-900">
            {
                distribute(projectData.projects, 3)
            }
        </ul>
    </section>
}