import { EducationData } from "../data";

export default function Education(educationData: EducationData) {
    return <section>
        <h1>Education</h1>

        <article>
            <ul>
                {educationData.entries.map((entry, index) => {
                    return <li key={index}>
                        <h2>{entry.name}</h2>
                        <h3>{entry.locat}</h3>

                        <h4>Major:</h4>
                        <p>{entry.major}</p>

                        <h4>Tier:</h4>
                        <p>{entry.tier}</p>

                        <h4>GPA:</h4>
                        <p>{entry.gpa}</p>

                        <h4>{entry.time.start} - {entry.time.end}</h4>

                        <div>
                            <h4>Description</h4>

                            <ul>
                                {entry.description.map((description, index) => {
                                    return <li key={index}>
                                        <p>{description}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </li>
                })}
            </ul>
        </article>
    </section>
}