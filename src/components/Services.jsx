import CardServices from "./UI/CardSevices";

export default function Services() {

    return(
        <div className=" bg-linear-to-r from-slate-900 to-neutral-900 font-roboto py-15 px-50 flex flex-col gap-10">
            <div className="flex justify-center">
                <h1 className="text-5xl font-bold text-white">My <span className="bg-linear-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">Services</span></h1>
            </div>
            <div className="grid grid-cols-3 gap-10">
                <CardServices></CardServices>
                <CardServices></CardServices>
                <CardServices></CardServices>
            </div>
        </div>
    );
}