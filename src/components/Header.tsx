import { HeaderData } from "../data"

export default function Header(header: HeaderData) {
    return <header className="
        flex flex-col items-center
        shadow-md
        p-5
        border-b-2 border-r-2 border-slate-900
        w-1/2
    ">
        <div className="flex justify-end w-full">
            <h1 className="text-9xl">{header.name}</h1>
        </div>
        <div className="flex justify-end w-full">
            <h2 className="text-7xl">{header.psuedonym}</h2>
        </div>
        <div className="flex justify-end w-full">
            <h3 className="text-6xl">{header.position}</h3>
        </div>
    </header>
}