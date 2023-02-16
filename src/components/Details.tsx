import { PersonalData } from "../data";

export default function Details(personalData: PersonalData) {
    return <section className="flex flex-col items-center">
        <h1>Personal Information</h1>

        <ul className="flex flex-col items-center">
            {personalData.personalDetails.map((details) => {
                return <li
                    key={details.key}
                    className="flex flex-col text-center m-2"
                >
                    <h2>{details.name}:</h2>
                    <a
                        className=""
                        href={details.link}
                    >{details.link}</a>
                </li>
            })}
        </ul>
    </section>
}