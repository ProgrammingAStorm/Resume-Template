import { HeaderData } from "../data"

export default function Header(header: HeaderData) {
    return <header>
        <h1>{header.name}</h1>
        <h2>{header.psuedonym}</h2>
        <h3>{header.position}</h3>
    </header>
}