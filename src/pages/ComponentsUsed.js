import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo-primary.svg'
import Components from '../assets/json/components-used.js'

const ComponentsUsed = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full max-w-screen-2xl m-auto px-10 py-10 md:px-12 lg:px-20 bg-white">
            <div className="w-full flex mb-10 flex-col items-center gap-4">
                <img src={logo} alt="tokotok-logo" className="h-6 md:h-8" />
                <h1 className="text-2xl md:text-4xl font-semibold text-limedspruce tracking-widest">Images Used</h1>
            </div>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    Components.map((data, index) => (
                        <a key={index} href={data.url} target="_blank" rel="noreferrer" className="w-full p-6 flex flex-col items-center gap-4 rounded-lg shadow-md bg-ghostwhite cursor-pointer hover:shadow-none hover:scale-105">
                            <img src={data.img} alt="tokotok-components" loading="lazy" className="w-full aspect-square rounded-md object-contain" />
                            <p className="text-sm font-normal text-center md:text-base">{data.title}</p>
                        </a>
                    ))
                }
            </div>
            <div className="w-full mt-10 grid place-items-center">
                <button onClick={(e) => (navigate(-1))} className="px-6 py-2 rounded-md bg-lavenderindigo text-base font-semibold text-white md:text-lg">Go back</button>
            </div>
        </div>
    )
}

export default ComponentsUsed