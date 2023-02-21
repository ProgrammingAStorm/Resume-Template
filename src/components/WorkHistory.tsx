import { ReactNode } from "react"
import { WorkData, WorkHistoryData } from "../data";

export default function WorkHistory(workData: WorkData) {
    function distribute(entries: Array<WorkHistoryData>, total: number): ReactNode {
        // List of groups of three
        const boxes: Array<Array<ReactNode>> = [];
        // Current box being added
        let currentBox: Array<ReactNode> = [];

        const getHistory = (entry: WorkHistoryData, index: number) => {
            return <li key={index} className="list-disc list-inside p-4 w-1/2 h-1/2 border-cyan-900 first:border-y-2 last:border-x-2 odd:border-r-2 even:border-y-2 shadow-md shadow-cyan-900">
                <article className="flex flex-col items-stretch w-full h-full">
                    <aside className="flex m-3 h-1/2">
                        <div className="flex flex-col m-1 items-start justify-center w-1/2">
                            <h2 className="text-3xl">{entry.employer}</h2>

                            <h3 className="text-2xl">{entry.title}</h3>

                            <h4 className="text-xl">{entry.time.start} - {entry.current ? "Current" : entry.time.end}</h4>

                            <h4 className="text-lg">{entry.local}</h4>
                        </div>

                        <div className="flex flex-col m-3 items-stretch justify-evenly w-1/2">
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

                    <aside className="flex m-3 h-1/2">
                        <div className="flex flex-col m-3 items-stretch w-1/2">
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

                        <div className="flex flex-col m-3 items-center w-1/2">
                            <h4 className="text-3xl m-3">Key Points</h4>

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

    return <section className="relative flex flex-col items-center bg-cover before:absolute before:-z-10 before:bg-center before:bg-cover before:bg-no-repeat before:opacity-60 before:bg-[url('src/assets/svg/wave-16:9.svg')] before:content-[''] before:w-full before:h-full ">
        <h1 className="text-7xl border-x-2 border-cyan-900 p-10 shadow-md shadow-cyan-900">Work History</h1>

        <ul className="flex flex-wrap border-b-2 border-cyan-900 shadow-md shadow-cyan-900">
            {/* {workData.entries.map((entry, index) => {
                return 
            })} */
                distribute(workData.entries, 3)
            }
        </ul>
    </section>
}