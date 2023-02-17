import { PersonalData } from "../data";

export default function Details(personalData: PersonalData) {
    return <section className="
        flex flex-col 
        items-center
        p-6 
        border-l-2 border-slate-900
        w-1/2
        h-full
    ">
        <h1
            className="
                m-4
                text-5xl
            "
        >Personal Information</h1>

        <ul className="
            flex flex-wrap
            justify-evenly
        ">
            {personalData.personalDetails.map((details) => {
                return <li
                    key={details.key}
                    className="
                        flex flex-col
                        text-center 
                        m-3
                    "
                >
                    <h2
                        className="
                            text-2xl
                        "
                    >{details.name}:</h2>
                    <a
                        className="text-xl"
                        href={details.link}
                    >{details.link}</a>
                </li>
            })}
        </ul>
    </section>
}