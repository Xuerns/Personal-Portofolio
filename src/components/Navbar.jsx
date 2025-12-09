import Menu from './assets/menu.svg?react'
export default function Navbar() {

    return (
        <nav className="bg-linear-to-r from-zinc-900 to-slate-800 py-4 flex justify-between items-center px-15 font-roboto max-[480px]:px-3">
            <div className="text-gray-50 flex gap-3">
                <Menu className="max-[480px]:block min-[481px]:hidden"></Menu>
                <p className="font-bold text-2xl">Xuerns</p>
            </div>
            <div className="flex justify-between items-center gap-10">
                
                <ul className="flex gap-10 text-gray-50 text-sm items-center max-[480px]:hidden">
                    <li className="hover:border-b-2 hover:border-gray-50 cursor-pointer">Home</li>
                    <li className="hover:border-b-2 hover:border-gray-50 cursor-pointer">About Me</li>
                    <li className="hover:border-b-2 hover:border-gray-50 cursor-pointer">Project</li>
                    <li className="hover:border-b-2 hover:border-gray-50 cursor-pointer">Services</li>
                    <li className="hover:border-b-2 hover:border-gray-50 cursor-pointer">Skills</li>
                </ul>
                <button className="bg-linear-to-r from-indigo-600 to-sky-400 text-gray-50 py-1 px-3 rounded-lg  max-[480px]:px-2  max-[480px]:py-1  max-[480px]:text-sm">Contact</button>
            </div>
        </nav>
    );
}