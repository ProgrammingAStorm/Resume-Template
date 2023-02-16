import { HeaderData } from "../data"

export default function Header(header: HeaderData) {
    return <header className="flex flex-col w-screen items-center border-b-2 border-cyan-900">
        <h1>{header.name}</h1>
        <h2>{header.psuedonym}</h2>
        <h3>{header.position}</h3>
    </header>
}