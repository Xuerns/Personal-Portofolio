export default function About() {

    return (
        <div className="bg-linear-to-r from-slate-900 to-neutral-900 font-roboto py-10 px-50 flex justify-center gap-10">
            <div className="bg-linear-to-r from-sky-300 to-blue-500 rounded-2xl p-1.5">
                <div className="bg-gray-50 w-100 h-120 rounded-xl opacity-70"></div>
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-white text-xl bg-linear-to-r from-sky-300 to-blue-500 w-25 px-1 rounded-lg">About Me</h1>
                <h2 className="text-5xl text-gray-50 font-bold">I'm Available For <span className="bg-linear-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">Fullstack Website</span> Project</h2>
                <p className="text-gray-50 text-lg pr-30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia debitis omnis enim mollitia rerum voluptates a blanditiis velit. Dolorum reiciendis culpa veniam? Perferendis, odit quas perspiciatis impedit rerum temporibus ex!</p>
                <div className="flex gap-4">
                    <div className="bg-linear-to-r from-slate-900 to-neutral-900 w-38 h-24 rounded-lg border border-gray-50"><div className="w-full h-full bg-gray-50 opacity-10 rounded-lg"></div></div>
                    <div className="bg-linear-to-r from-slate-900 to-neutral-900 w-38 h-24 rounded-lg border border-gray-50"><div className="w-full h-full bg-gray-50 opacity-10 rounded-lg"></div></div>
                    <div className="bg-linear-to-r from-slate-900 to-neutral-900 w-38 h-24 rounded-lg border border-gray-50"><div className="w-full h-full bg-gray-50 opacity-10 rounded-lg"></div></div>
                </div>
                <button className="w-30 h-10 bg-white rounded-lg">GET IN TOUCH</button>
            </div>
        </div>
    );
}