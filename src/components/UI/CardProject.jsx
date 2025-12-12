export default function Card() {

    return(
        <div className="bg-linear-to-tr from-slate-800 to-slate-500/50 border border-white/30 rounded-xl p-4.5 grid grid-cols-1 grid-rows-2 items-stretch gap-3 bg-opacity-10 font-roboto">
            <div className="text-white flex flex-col gap-3">
                <div className="flex justify-between">
                    <h5 className="bg-linear-to-tr from-amber-200 to-yellow-300 inline px-3 py-1.5 rounded-xl text-black">FrontEnd</h5>
                    <h5 className="bg-gray-900/40 px-3 py-1 rounded-xl border-2 border-white/20">2025</h5>
                </div>
                <h2 className="text-2xl">To Do List</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  provident. Voluptatum, deleniti consequatur!</p>
            </div>
            <div>
                <div className="bg-white h-full rounded-xl"></div>
            </div>
        </div>
    );
}