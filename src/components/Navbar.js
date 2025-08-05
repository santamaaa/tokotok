import Logo from '../assets/images/logo-primary.svg'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const location = useLocation()
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    const [iconIsChange, setIconIsChange] = useState(faBars)
    const [bgIsChange, setBgIsChange] = useState(false)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [location])

    const pathClass = (path) => {
        return location.pathname === path
            ? 'md:px-4 lg:px-2 py-4 md:py-2 lg:py-1 md:border-b-2 md:border-lavenderindigo-80 text-lavenderindigo'
            : 'md:px-4 lg:px-2 py-4 md:py-2 lg:py-1 md:border-b-2 md:border-transparent text-limedspruce hover:text-electricindigo'
    }

    const showMenu = () => {
        setMenuIsVisible(!menuIsVisible)
        setIconIsChange(menuIsVisible ? faBars : faXmark)
    }

    const hideMenu = () => {
        setMenuIsVisible(false)
        setIconIsChange(faBars)
    }

    const menuStyle = {
        display: menuIsVisible ? 'flex' : 'none'
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1) {
            setBgIsChange(true)
        } else {
            setBgIsChange(false)
        }
    })

    const navBg = {
        backgroundColor: bgIsChange ? 'white' : 'ghostwhite',
        boxShadow: bgIsChange ? '0px 0px 2px #37474F' : 'none'
    }
    
    const navHeight = {
        paddingTop: bgIsChange ? '12px' : '24px',
        paddingBottom: bgIsChange ? '12px' : '24px'
    }

    return (
        <nav className="w-full sticky top-0 z-50 transition-none delay-100" style={navBg}>
            <div className="w-full max-w-screen-2xl mx-auto px-20 hidden lg:flex items-center justify-between transition-none delay-100" style={navHeight}>
                <Link to="/">
                    <img src={Logo} alt="tokotok" className="w-32" />
                </Link>
                <div className="flex gap-16 text-sm font-semibold">
                    <Link to="/" className={pathClass('/')}>Home</Link>
                    <Link to="/about" className={pathClass('/about')}>About</Link>
                    <Link to="/blog" className={pathClass('/blog')}>Blog</Link>
                </div>
                <div className="flex gap-4 text-sm font-semibold">
                    <a href="https://github.com/santamaaa" className="w-28 h-10 grid place-items-center border-2 border-lavenderindigo rounded hover:border-lavenderindigo-80 hover:bg-lavenderindigo-80 text-limedspruce hover:text-white">Sign in</a>
                    <a href="https://github.com/santamaaa" className="w-28 h-10 grid place-items-center rounded bg-lavenderindigo hover:bg-lavenderindigo-80 text-white">Sign up</a>
                </div>
            </div>

            {/* for mobile and tablet */}
            <div className="w-full px-6 md:px-12 relative lg:hidden flex items-center justify-between" style={navHeight}>
                <Link to="/">
                    <img src={Logo} alt="tokotok" className="w-24 md:w-32" />
                </Link>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-4 text-sm font-semibold">
                        <a href="https://github.com/santamaaa" className="w-28 h-10 grid place-items-center border-2 border-lavenderindigo rounded hover:border-lavenderindigo-80 hover:bg-lavenderindigo-80 text-limedspruce hover:text-white">Sign in</a>
                        <a href="https://github.com/santamaaa" className="w-28 h-10 grid place-items-center rounded bg-lavenderindigo hover:bg-lavenderindigo-80 text-white">Sign up</a>
                    </div>
                    <button onClick={showMenu} aria-label="Menus" className="h-7 md:h-10 aspect-square md:p-2 rounded md:bg-limedspruce text-limedspruce md:text-white">
                        <FontAwesomeIcon icon={iconIsChange} className="h-full" />
                    </button>
                </div>

                {/* show menu */}
                <div style={menuStyle} className={`w-full h-[calc(100vh-76px)] md:h-[calc(100vh-88px)] absolute ${bgIsChange ? 'top-[52px] md:top-[64px]' : 'top-[76px] md:top-[88px]'} left-0`}>
                    <div onClick={hideMenu} className="w-full h-full backdrop-blur-sm"></div>
                    <div className="w-1/2 h-auto px-8 md:px-12 py-4 md:py-8 absolute z-10 top-0 right-0 flex flex-col md:flex-row md:justify-between rounded-bl-lg bg-ghostwhite shadow-sm shadow-gray-400 text-center text-sm font-semibold">
                        <Link to="/" className={pathClass('/')}>Home</Link>
                        <Link to="/about" className={pathClass('/about')}>About</Link>
                        <Link to="/blog" className={pathClass('/blog')}>Blog</Link>
                        <div className="mt-20 mb-4 flex md:hidden flex-col gap-4 text-sm font-semibold">
                            <a href="https://github.com/santamaaa" className="py-1.5 border-2 border-lavenderindigo rounded hover:border-lavenderindigo-80 hover:bg-lavenderindigo-80 text-limedspruce hover:text-white">Sign in</a>
                            <a href="https://github.com/santamaaa" className="py-1.5 border-2 border-lavenderindigo rounded bg-lavenderindigo hover:bg-lavenderindigo-80 text-white">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar