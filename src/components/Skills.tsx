import { ReactNode } from "react"
import { SkillsData } from "../data"

export default function (skillsData: SkillsData) {
    // Distributes groups of something accross 
    function distribute(tools: Array<any>, total: number): ReactNode {
        // List of groups of three
        const boxes: Array<Array<ReactNode>> = [];
        // Current box being added
        let currentBox: Array<ReactNode> = [];

        console.log(tools)

        // Loops over the tools
        tools.forEach((tool, index) => {
            // Checks to see if the current box is filled
            if (currentBox.length < total) {
                // If not then it pushes the li to the current box
                currentBox.push(<li key={index} className="list-disc my-1 mx-2">
                    <h4 className="text-2xl">{tool}</h4>
                </li>);
                // If it is, then it adds it to the boxes and clears the current box 
            } else {
                boxes.push(currentBox)
                currentBox = [];

                currentBox.push(<li key={index} className="list-disc my-1 mx-2">
                    <h4 className="text-2xl">{tool}</h4>
                </li>);
            }

            if (currentBox.length === total) {
                boxes.push([...currentBox]);
                currentBox = [];
            }
        });

        console.log(boxes)

        return boxes.map((box, index) => {
            return <div key={index} className="m-2">
                {box.map((items) => {
                    return items;
                })}
            </div>
        })
    }

    return <section className="flex flex-col items-center border-y-2 border-cyan-900 w-full shadow-md shadow-cyan-900">
        <h1 className="text-7xl border-x-2 border-cyan-900 p-10 shadow-md shadow-cyan-900">Skills</h1>

        <div className="flex border-t-2 border-cyan-900 w-full shadow-md shadow-cyan-900">
            <div className="flex justify-around w-1/2 p-6 border-r-2 border-cyan-900 shadow-md shadow-cyan-900">
                <article className="flex flex-col justify-around items-center w-fit m-2">
                    <h2 className="text-4xl">Languages</h2>

                    <div>
                        <div className="flex flex-col content-between items-center m-2">
                            <h3 className="text-3xl">Comfortable</h3>

                            <ul>
                                {skillsData.languages.comfortable.map((language, index) => {
                                    return <li key={index} className="m-1 list-disc">
                                        <p className="text-2xl m-2">{language.name}</p>
                                        <p className="text-2xl m-2">{language.time}</p>
                                    </li>
                                })}
                            </ul>
                        </div>

                        <div className="flex flex-col items-center m-2">
                            <h3 className="text-3xl">Familiar</h3>

                            <ul className="flex justify-between">
                                {
                                    distribute(skillsData.languages.familiar, 2)
                                }
                            </ul>
                        </div>
                    </div>
                </article>

                <article className="flex flex-col justify-around items-center w-fit m-2">
                    <h2 className="text-4xl">Front-End</h2>

                    <div className="flex flex-col items-center m-2">
                        <h3 className="text-3xl">Frameworks & Libraries</h3>

                        <ul className="flex justify-between w-full">
                            {skillsData.frontEnd.frameworksLibraries.map((tool, index) => {
                                return <li key={index}
                                    className="m-1 list-disc"
                                >
                                    <h4 className="text-2xl">{tool.name}</h4>
                                    <p className="text-xl">{tool.time}</p>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center m-2">
                        <h3 className="text-3xl">Styling Tools</h3>

                        <ul className="flex justify-between">
                            {
                                distribute(skillsData.frontEnd.stylingTools, 3)
                            }
                        </ul>
                    </div>

                    <div className="flex flex-col items-center m-2">
                        <h3 className="text-3xl">Build Tools</h3>

                        <ul>
                            {skillsData.frontEnd.buildTools.map((tool, index) => {
                                return <li key={index}
                                    className="list-disc m-1"
                                >
                                    <h4 className="text-2xl">{tool.name}</h4>
                                </li>
                            })}
                        </ul>
                    </div>
                </article>
            </div>

            <div className="flex justify-around w-1/2 p-6 shadow-md shadow-cyan">
                <article className="flex flex-col justify-around items-center w-fit m-2">
                    <h2 className="text-4xl">Back-End</h2>

                    <div className="flex flex-col m-2 items-center">
                        <h3 className="text-3xl">APIs</h3>

                        <ul>
                            {skillsData.backEnd.apis.map((tool, index) => {
                                return <li key={index}
                                    className="m-1 list-disc"
                                >
                                    <h4 className="text-2xl">{tool.name}</h4>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className="flex flex-col m-2 items-center">
                        <h3 className="text-3xl">Frameworks</h3>
                        <ul>
                            {skillsData.backEnd.frameworks.map((tool, index) => {
                                return <li key={index}
                                    className="m-1 list-disc"
                                >
                                    <h4 className="text-2xl">{tool}</h4>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className="flex flex-col m-2 items-center">
                        <h3 className="text-3xl">ORMs</h3>

                        <ul>
                            {skillsData.backEnd.orms.map((tool, index) => {
                                return <li key={index}
                                    className="m-1 list-disc"
                                >
                                    <h4 className="text-2xl">
                                        {tool}
                                    </h4>
                                </li>
                            })}
                        </ul>
                    </div>
                </article>

                <div className="flex flex-col justify-around items-center">
                    <article className="flex flex-col justify-around items-center w-fit m-2">
                        <h2 className="text-4xl">APIs & SDKs</h2>

                        <ul>
                            {skillsData.apisSdks.map((tool, index) => {
                                return <li
                                    key={index}
                                    className="list-disc m-1"
                                >
                                    <h3 className="text-3xl">{tool}</h3>
                                </li>
                            })}
                        </ul>
                    </article>

                    <article className="flex flex-col justify-around items-center m-2">
                        <h2 className="text-4xl">Traits</h2>

                        <ul className="flex">
                            {distribute(skillsData.traits, 3)}
                        </ul>
                    </article>
                </div>
            </div>
        </div>
    </section>
}