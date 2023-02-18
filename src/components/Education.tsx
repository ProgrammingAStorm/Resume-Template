import { EducationData } from "../data";

export default function Education(educationData: EducationData) {
    return <section className="flex flex-col items-center w-full border-b-2 border-cyan-900 p-7">
        <h1 className="text-7xl">Education</h1>

        <ul>
            {educationData.entries.map((entry, index) => {
                return <li key={index}>
                    <article className="flex items-center m-2">
                        <div className="w-1/3 m-2">
                            <h2 className="text-3xl">{entry.name}</h2>
                            <h3 className="text-2xl">{entry.locat}</h3>

                            <div className="flex items-center justify-start">
                                <h4 className="text-xl m-1">Major:</h4>
                                <p className="m-1">{entry.major}</p>
                            </div>

                            <div className="flex items-center justify-start">
                                <h4 className="m-1">Tier:</h4>
                                <p className="m-1">{entry.tier}</p>
                            </div>

                            <div className="flex items-center justify-start">
                                <h4 className="m-1">GPA:</h4>
                                <p className="m-1">{entry.gpa}</p>
                            </div>

                            <h4>{entry.time.start} - {entry.time.end}</h4>
                        </div>

                        <div className="w-2/3 m-2">
                            <h4 className="text-3xl">Description</h4>

                            <ul>
                                {entry.description.map((description, index) => {
                                    return <li key={index} className="list-disc">
                                        <p className="text-lg">{description}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </article>
                </li>
            })}
        </ul>
    </section>
}