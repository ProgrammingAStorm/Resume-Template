import { PersonalData } from "../data";

export default function Details(personalData: PersonalData) {
    return <section>
        <h1>Personal Information</h1>

        <ul>
        {personalData.personalDetails.map((details) => {
            return <li 
                key={details.key}
            >
                <h2>{details.name}</h2>
                <a href={details.link}>{details.link}</a>
            </li>
        })}
        </ul>
    </section>
}