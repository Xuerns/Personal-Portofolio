export default function Hero() {

    return (
        <div className="bg-linear-to-r from-zinc-900 to-slate-800 h-166 flex items-center justify-between px-20 font-roboto gap-48">
            <div className="px-20 flex flex-col gap-4">
                <h1 className="text-gray-50 text-5xl">Hello, I'm <span className="bg-linear-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent font-bold">Fullstack Developer</span></h1>
                <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt exercitationem deleniti dolorum ullam. Ducimus vitae beatae eos officia soluta atque voluptatum nam laborum laboriosam pariatur accusantium distinctio, maiores earum!</p>
                <div className="flex gap-4">
                    <button className="bg-white px-3 py-1.5 rounded-lg cursor-pointer">Hire Me</button>
                    <button className="bg-white px-3 py-1.5 rounded-lg cursor-pointer">Download CV</button>
                </div>

            </div>
            <div>
                <div className="bg-white h-110 w-110 rounded-full">

                </div>
            </div>
        </div>
    );
}