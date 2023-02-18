import { WorkData } from "../data";

export default function WorkHistory(workData: WorkData) {
    return <section className="flex flex-col items-center">
        <h1 className="text-7xl">Work History</h1>

        <ul className="flex justify-center flex-wrap">
            {workData.entries.map((entry, index) => {
                return <li key={index} className="w-1/2">
                    <article className="flex flex-col items-center m-0 p-0">
                        <aside className="flex m-3">
                            <div className="flex flex-col m-1 items-start justify-center w-1/2">
                                <h2 className="text-3xl">{entry.employer}</h2>

                                <h3 className="text-2xl">{entry.title}</h3>

                                <h4 className="text-xl">{entry.time.start} - {entry.current ? "Current" : entry.time.end}</h4>

                                <h4 className="text-lg">{entry.local}</h4>
                            </div>

                            <div className="flex flex-col m-2 items-center justify-evenly w-1/2">
                                <h4 className="text-3xl">Tasks</h4>

                                <ul>
                                    {entry.tasks.map((task, index) => {
                                        return <li key={index}
                                            className="m-1"
                                        >
                                            <p className="text-xl">
                                                {task}
                                            </p>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </aside>

                        <aside className="flex m-3">
                            <div className="flex flex-col m-2 items-center w-1/2">
                                <h4 className="text-3xl">Day To Day</h4>

                                <ul>
                                    {entry.dayToDay.map((day, index) => {
                                        return <li key={index}
                                        className="m-1"
                                    >
                                            <p className="text-xl">
                                                {day}
                                            </p>
                                        </li>
                                    })}
                                </ul>
                            </div>

                            <div className="flex flex-col m-2 items-center w-1/2">
                                <h4 className="text-3xl">Key Points</h4>

                                <ul>
                                    {entry.keyPoints.map((point, index) => {
                                        return <li key={index}
                                        className="m-1"
                                    >
                                            <p className="text-xl">
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