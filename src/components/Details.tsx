import { PersonalData } from "../data";

export default function Details(personalData: PersonalData) {
    return <section className="flex flex-col items-center  border-l-2 border-cyan-900 p-6 w-1/2 h-full shadow-md shadow-cyan-900">
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
            {personalData.personalDetails.map((details, index) => {
                return <li
                    key={index}
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