import { WorkData } from "../data";

export default function WorkHistory(workData: WorkData) {
    return <section className="flex flex-col items-center">
        <h1>Work History</h1>

        <ul>
            {workData.entries.map((entry, index) => {
                return <li key={index}>
                    <article className="flex flex-col items-center">
                        <aside className="flex m-2 w-2/3 ">
                            <div className="flex flex-col m-1 items-start justify-evenly">
                                <h2>{entry.employer}</h2>

                                <h3>{entry.title}</h3>

                                <h4>{entry.time.start} - {entry.current ? "Current" : entry.time.end}</h4>

                                <h4>{entry.local}</h4>
                            </div>

                            <div className="flex flex-col m-2 items-center justify-evenly">
                                <h4>Tasks</h4>

                                <ul>
                                    {entry.tasks.map((task, index) => {
                                        return <li key={index}
                                            className="m-1"
                                        >
                                            <p>
                                                {task}
                                            </p>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </aside>

                        <aside className="flex m-2 w-2/3 ">
                            <div className="flex flex-col m-2 items-center">
                                <h4>Day To Day</h4>

                                <ul>
                                    {entry.dayToDay.map((day, index) => {
                                        return <li key={index}
                                        className="m-1"
                                    >
                                            <p>
                                                {day}
                                            </p>
                                        </li>
                                    })}
                                </ul>
                            </div>

                            <div className="flex flex-col m-2 items-center">
                                <h4>Key Points</h4>

                                <ul>
                                    {entry.keyPoints.map((point, index) => {
                                        return <li key={index}
                                        className="m-1"
                                    >
                                            <p>
                                                {point}
                                            </p>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </aside>
                    </article>
                </li>
            })}
        </ul>
    </section>
}