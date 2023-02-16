import { WorkData } from "../data";

export default function WorkHistory(workData: WorkData) {
    return <section>
        <h1>Work History</h1>

        <ul>
            {workData.entries.map((entry, index) => {
                return <li key={index}>
                    <article>
                        <h2>{entry.employer}</h2>

                        <h3>{entry.title}</h3>

                        <h4>{entry.time.start} - {entry.current ? "Current" : entry.time.end}</h4>

                        <h4>{entry.local}</h4>

                        <div>
                            <h4>Tasks</h4>

                            <ul>
                                {entry.tasks.map((task, index) => {
                                    return <li key={index}>{task}</li>
                                })}
                            </ul>
                        </div>

                        <div>
                            <h4>Day To Day</h4>

                            <ul>
                                {entry.dayToDay.map((day, index) => {
                                    return <li key={index}>{day}</li>
                                })}
                            </ul>
                        </div>

                        <div>
                            <h4>Key Points</h4>

                            <ul>
                                {entry.keyPoints.map((point, index) => {
                                    return <li key={index}>{point}</li>
                                })}
                            </ul>
                        </div>
                    </article>
                </li>
            })}
        </ul>
    </section>
}