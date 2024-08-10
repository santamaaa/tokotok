import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook, faTiktok, faXTwitter, faLinkedin, faYoutube, faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialMedia = [
        { 
            id: 1,
            name: 'instagram',
            logo: faInstagram,
            url: "https://instagram.com/"
        },
        { 
            id: 2,
            name: 'facebook',
            logo: faFacebook,
            url: "https://facebook.com/"
        },
        { 
            id: 3,
            name: 'tiktok',
            logo: faTiktok,
            url: "https://tiktok.com/"
        },
        { 
            id: 4,
            name: 'x',
            logo: faXTwitter,
            url: "https://x.com/"
        },
        { 
            id: 5,
            name: 'linkedin',
            logo: faLinkedin,
            url: "https://linkedin.com/"
        },
        { 
            id: 6,
            name: 'youtube',
            logo: faYoutube,
            url: "https://youtube.com/"
        },
    ]

    return (
        <footer className="w-full bg-limedspruce">
            <div className="w-full max-w-screen-2xl m-auto flex flex-col px-6 pt-8 pb-4 md:px-12 md:pt-8 lg:px-20">
                <div className="flex flex-col">
                    <div className="flex mb-6 pb-6 md:mb-10 md:pb-10 flex-col gap-4 border-b-2">
                        <p className="text-sm font-normal text-white text-center md:text-base">Available on :</p>
                        <div className="flex items-center justify-center gap-6 text-white">
                            <a href="https://play.google.com" className="w-[100px] md:w-[120px] py-2 flex flex-col gap-2 border-2 border-white rounded-md text-xs text-center hover:bg-white hover:text-limedspruce">
                                <FontAwesomeIcon icon={faGooglePlay} className="text-xl" />
                                Google Play
                            </a>
                            <a href="https://apple.com" className="w-[100px] md:w-[120px] py-2 flex flex-col gap-2 border-2 border-white rounded-md text-xs text-center hover:bg-white hover:text-limedspruce">
                                <FontAwesomeIcon icon={faApple} className="text-xl" />
                                App Store
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-4 md:gap-12 text-white">
                        {
                            socialMedia.map((data, index) => (
                                <a key={index} href={data.url} className="pb-6 md:pb-10 text-xl md:text-2xl hover:scale-125">
                                    <FontAwesomeIcon icon={data.logo} />
                                </a>
                            ))
                        }
                    </div>
                    <div className="w-full pb-4 md:pb-8 flex items-center justify-center gap-4 md:gap-12 text-xs font-normal text-white text-center">
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms-of-use">Terms of Use</a>
                        <a href="/components-used">Components Used</a>
                    </div>
                    <p className="text-[10px] md:text-xs font-normal text-white text-center">Copyright Santamaa {currentYear}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer