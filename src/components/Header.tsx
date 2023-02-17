import { HeaderData } from "../data"

export default function Header(header: HeaderData) {
    return <header className="
        flex flex-col items-center
        p-5
        border-slate-900
        w-1/2
        h-full
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