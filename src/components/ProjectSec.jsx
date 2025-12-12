import CardProject from './UI/CardProject.jsx'

export default function ProjectSec({ Category, Active, isActive }) {
    function ToggleCategory(index) {
        const Update = Active.map((item, i) => ({...item, active: i === index}))
        isActive(Update)
    }

    return (
        <div className="bg-linear-to-r from-zinc-900 to-slate-800 py-12 px-35 font-roboto flex flex-col gap-4">
            <h1 className="font-bold text-3xl text-gray-50">My Project</h1>
            <div className="flex gap-3">
                {Category.map((items, index) => (
                    <button key={index} className={`px-5 py-1 rounded-lg border border-gray-50 text-gray-50 transition-all duration-300 ${Active[index].active ? "bg-linear-to-r from-sky-300 to-blue-500" : "bg-gray-900"} `} onClick={() => ToggleCategory(index)}>{items.name}</button>
                ))}
            </div>
            <div className='h-100 rounded-lg grid grid-cols-3 items-stretch py-5 gap-5'>
                <CardProject></CardProject>
            </div>
        </div>
    );
}