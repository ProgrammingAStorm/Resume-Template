import { HeaderData } from "../data"

export default function Header(header: HeaderData) {
    return <header className="flex flex-col justify-center w-1/2 shadow-md shadow-cyan-900">
        <div className="p-2">
            <div className="flex justify-center items-center">
                <h1 className="flex flex-col justify-end items-end text-9xl">
                    {header.name}
                </h1>
            </div>

            <div className=" flex justify-center items-center">
                <h2 className="flex flex-col justify-end items-end text-6xl">
                    {header.psuedonym}
                </h2>
            </div>

            <div className="flex justify-center items-center">
                <h3 className="flex flex-col justify-end items-end text-5xl">
                    {header.position}
                </h3>
            </div>
        </div>
    </header>
}