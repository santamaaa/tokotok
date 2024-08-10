import { useNavigate } from 'react-router-dom';
import notFoundImg from '../assets/images/404.svg'

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full max-w-screen-2xl h-[100vh] m-auto px-6 md:px-20 flex flex-col items-center justify-center bg-white text-center">
            <img src={notFoundImg} alt="tokotok illustration" className="w-full max-w-[600px]" />
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-limedspruce">Page Not Found</h1>
            <p className="mt-2 mb-10 md:mt-4 text-sm md:text-base font-normal text-limedspruce">Oops! Looks like you followed a bad link. If you think this is a a problem with us, please tell us.</p>
            <button onClick={() => navigate(-1)} className="px-8 py-2 rounded-md bg-lavenderindigo text-base md:text-lg font-semibold text-white">Go back</button>
        </div>
    )
}

export default NotFoundPage