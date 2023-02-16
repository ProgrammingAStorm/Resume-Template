import { SkillsData } from "../data"

export default function (skillsData: SkillsData) {
    return <section className="flex flex-col items-center">
        <h1 className="w-full text-center">Skills</h1>

        <div className="flex">
            <article className="flex flex-col items-center w-fit m-2">
                <h2>Languages</h2>

                <div className="flex flex-col items-center m-1">
                    <h3>Comfortable</h3>

                    <ul>
                        {skillsData.languages.comfortable.map((language, index) => {
                            return <li key={index} className="m-1">
                                <p>{language.name}</p>
                                <p>{language.time}</p>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="flex flex-col items-center m-1">
                    <h3>Familiar</h3>

                    <ul>
                        {skillsData.languages.familiar.map((language, index) => {
                            return <li key={index} className="m-1">
                                <p>{language.name}</p>
                            </li>
                        })}
                    </ul>
                </div>
            </article>

            <article className="flex flex-col items-center w-fit m-2">
                <h2>Front-End</h2>

                <div className="flex flex-col items-center m-2">
                    <h3>Frameworks & Libraries</h3>

                    <ul>
                        {skillsData.frontEnd.frameworksLibraries.map((tool, index) => {
                            return <li key={index}
                                className="m-1"
                            >
                                <h4>{tool.name}</h4>
                                <p>{tool.time}</p>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="flex flex-col items-center m-2">
                    <h3>Styling Tools</h3>

                    <ul>
                        {skillsData.frontEnd.stylingTools.map((tool, index) => {
                            return <li key={index}
                                className="m-1"
                            >
                                <h4>{tool}</h4>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="flex flex-col items-center m-2">
                    <h3>Build Tools</h3>

                    <ul>
                        {skillsData.frontEnd.buildTools.map((tool, index) => {
                            return <li key={index}
                                className="m-1"
                            >
                                <h4>{tool.name}</h4>
                            </li>
                        })}
                    </ul>
                </div>
            </article>

            <article className="flex flex-col items-center w-fit m-2">
                <h2>APIs & SDKs</h2>

                <ul>
                    {skillsData.apisSdks.map((tool, index) => {
                        return <li
                            key={index}
                            className="m-1"
                        >
                            <h3>{tool}</h3>
                        </li>
                    })}
                </ul>
            </article>

            <article className="flex flex-col items-center w-fit m-2">
                <h2>Back-End</h2>

                <div className="flex flex-col m-2 items-center">
                    <h3>APIs</h3>

                    <ul>
                        {skillsData.backEnd.apis.map((tool, index) => {
                            return <li key={index}
                                className="m-1"
                            >
                                <h4>{tool.name}</h4>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="flex flex-col m-2 items-center">
                    <h3>Frameworks</h3>
                    <ul>
                        {skillsData.backEnd.frameworks.map((tool, index) => {
                            return <li key={index}
                                className="m-1"
                            >
                                <h4>{tool}</h4>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="flex flex-col m-2 items-center">
                    <h3>ORMs</h3>

                    <ul>
                        {skillsData.backEnd.orms.map((tool, index) => {
                            return <li key={index}
                                className="m-1"
                            >
                                <h4>
                                    {tool}
                                </h4>
                            </li>
                        })}
                    </ul>
                </div>
            </article>

            <article className="flex flex-col items-center m-2">
                <h2>Traits</h2>

                <ul>
                    {skillsData.traits.map((tool, index) => {
                        return <li
                            key={index}
                            className="m-1"
                        >
                            <h3>
                                {tool}
                            </h3>
                        </li>
                    })}
                </ul>
            </article>
        </div>
    </section>
}