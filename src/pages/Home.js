import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faStar } from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Marquee from 'react-fast-marquee'
import Navbar from '../components/Navbar'
import HeaderImg from '../assets/images/header.svg'
import serviceImg1 from '../assets/images/service1.svg'
import serviceImg2 from '../assets/images/service2.svg'
import serviceImg3 from '../assets/images/service3.svg'
import serviceImg4 from '../assets/images/service4.svg'
import reviews from '../assets/json/customer-review.json'
import Footer from '../components/Footer'

const Home = () => {
    const [numOfProducts, setNumOfProducts] = useState(10)
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const updateNumOfProducts = () => {
            if (window.innerWidth >= 1024) {
                setNumOfProducts(12)
            } else {
                setNumOfProducts(10)
            }
        }

        const fetchProducts = async () => {
            try {
                const apiURL = 'https://dummyjson.com/products'
                await new Promise(resolve => setTimeout(resolve, 4000))
                const response = await axios.get(apiURL)
                const filteredProducts = response.data.products.filter(product => product.rating > 4 && product.price < 500)
                setProducts(filteredProducts)
            } catch (error) {
                console.error('Error fetching the products: ', error)
            } finally {
                setIsLoading(false)
            }
        }

        updateNumOfProducts()
        fetchProducts()

        window.addEventListener('resize', updateNumOfProducts)
        return () => window.removeEventListener('resize', updateNumOfProducts)
    }, [])

    const categories = ['Clothes', 'Shoes', 'Beauty', 'Food & Beverage', 'Health Care', 'Gifts & Crafts', 'Sports', 'Electronics', 'Furniture', 'Pet Supplies', 'Others']

    return (
        <>
            <Navbar />

            <header className="w-full bg-ghostwhite">
                <div className="w-full max-w-screen-2xl mx-auto relative overflow-hidden lg:grid lg:grid-cols-2 lg:gap-10">
                    <div className="w-full md:h-full mt-8 md:mt-0 px-6 md:px-12 lg:px-0 lg:ps-20 absolute lg:relative z-10 flex flex-col items-start md:justify-center lg:items-center lg:text-center">
                        <h1 className="text-[20px] md:text-4xl lg:text-5xl font-bold text-limedspruce tracking-widest md:tracking-wide leading-tight lg:leading-tight"><span className="text-electricindigo">Find</span> products<br/>for your <span className="text-electricindigo">needs</span></h1>
                        <p className="mt-3 md:mt-4 lg:mt-6 mb-9 md:mb-12 lg:mb-[72px] text-[10px] md:text-base lg:text-lg font-medium text-limedspruce lg:tracking-wider leading-relaxed">Various premium products available<br/> with the best quality and guaranteed.</p>
                        <Link className="px-6 md:px-9 lg:px-12 py-2 md:py-3 rounded bg-electricindigo text-[10px] md:text-base lg:text-lg font-semibold text-white hover:bg-lavenderindigo">Get started</Link>
                    </div>
                    <div className="pt-10 md:pt-5 pb-8 md:pb-10 lg:pe-20 relative z-0 flex justify-end lg:justify-center translate-x-20 md:-translate-x-10 lg:-translate-x-0">
                        <img src={HeaderImg} alt="tokotok-illustration" className="w-2/3 max-w-[300px] md:w-1/2 md:max-w-none lg:w-full lg:max-w-[500px] scale-x-[-1] md:scale-x-[1]" />
                    </div>
                </div>
            </header>

            <section className="w-full bg-white">
                <div className="w-full max-w-screen-2xl m-auto px-6 py-8 md:px-12 md:py-12 lg:px-20 flex flex-col gap-y-6 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-12 lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:items-center lg:gap-x-20 text-limedspruce md:text-center">
                    <div className="w-full lg:w-auto flex flex-col items-start md:items-center">
                        <div className="flex flex-col items-start md:items-center">
                            <h3 className="text-lg md:text-xl font-semibold">Free In-City Shipping</h3>
                            <p className="mb-4 md:mt-1 md:mb-4 text-sm font-regular">Fast and secure delivery</p>
                        </div>
                        <img src={serviceImg1} alt="tokotok-illustration" className="w-1/2 md:w-auto md:h-[160px]" />
                    </div>
                    <div className="w-full lg:w-auto flex flex-col md:flex-col-reverse items-end md:items-center">
                        <div className="flex flex-col items-end md:items-center">
                            <h3 className="md:mt-4 md:mb-1 text-lg md:text-xl font-semibold">Secure Payment</h3>
                            <p className="mb-4 md:mb-0 text-sm font-regular">Highly secure payment methods</p>
                        </div>
                        <img src={serviceImg2} alt="tokotok-illustration" className="w-1/2 md:w-auto md:h-[160px]" />
                    </div>
                    <div className="w-full lg:w-auto flex flex-col items-start md:items-center">
                        <div className="flex flex-col items-start md:items-center">
                            <h3 className="text-lg md:text-xl font-semibold">Interactive Shopping</h3>
                            <p className="mb-4 md:mt-1 md:mb-4 text-sm font-regular">Engaging shopping experience</p>
                        </div>
                        <img src={serviceImg3} alt="tokotok-illustration" className="w-1/2 md:w-auto md:h-[160px]" />
                    </div>
                    <div className="w-full lg:w-auto flex flex-col md:flex-col-reverse items-end md:items-center">
                        <div className="flex flex-col items-end md:items-center">
                            <h3 className="md:mt-4 md:mb-1 text-lg md:text-xl font-semibold">24/7 Customer Service</h3>
                            <p className="mb-4 md:mb-0 text-sm font-regular">We offer online support</p>
                        </div>
                        <img src={serviceImg4} alt="tokotok-illustration" className="w-1/2 md:w-auto md:h-[160px]" />
                    </div>
                </div>
            </section>

            <section className="w-full bg-lavenderindigo">
                <div className="w-full max-w-screen-2xl m-auto px-6 py-8 md:px-12 md:py-8 lg:px-20 font-bold text-center text-rubberduckyellow">
                    <h2 className="text-[4.4vw] md:text-3xl lg:text-4xl leading-relaxed md:leading-relaxed lg:leading-relaxed lg:tracking-widest">Shopping from everywhere <br/> Discover products for a life well lived</h2>
                </div>
            </section>

            <section className="w-full bg-white">
                <div className="w-full max-w-screen-2xl m-auto px-6 py-8 md:px-12 md:py-8 lg:px-20">
                    <div className="flex items-center justify-between text-limedspruce">
                        <h3 className="text-lg font-semibold lg:text-2xl">Best Seller Products</h3>
                        <a href="/products-best-seller" className="flex items-center gap-2 text-xs font-medium lg:text-sm hover:text-lavenderindigo group">
                            See all<FontAwesomeIcon icon={faArrowRightLong} className="group-hover:translate-x-1" />
                        </a>
                    </div>
                    <div className="w-full mt-2 lg:mt-[12px] grid grid-cols-2 md:grid-cols-5 lg:flex lg:flex-wrap lg:justify-center gap-4 lg:gap-[24px]">
                        {
                            isLoading ? (
                                // Skeleton loader
                                Array.from({ length: numOfProducts }).map((_, index) => (
                                    <div key={index} className="w-full lg:w-[calc((100%-24px*5)/6)] p-3 pt-4 relative flex flex-col rounded-sm shadow-md bg-ghostwhite">
                                        <Skeleton height={24} width={60} className="mb-[5px]" />
                                        <Skeleton height={200} className="w-full aspect-square" />
                                        <Skeleton height={20} width={`80%`} className="mt-3" />
                                        <Skeleton height={16} width={`60%`} className="mt-1 mb-3" />
                                        <div className="flex items-end justify-between">
                                            <Skeleton height={24} width={50} />
                                            <Skeleton height={16} width={40} className="mb-[6px]" />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                // Products list
                                products.slice(0, numOfProducts).map((data, index) => (
                                    <a href={`/product-${data.id}`} key={index} className="w-full lg:w-[calc((100%-24px*5)/6)] p-3 pt-4 relative flex flex-col rounded-sm shadow-md hover:shadow-none bg-ghostwhite">
                                        <span className="px-2 lg:py-[3px] mb-[5px] absolute grid place-items-center text-[11px] text-white bg-red-500 rounded-sm">-{data.discountPercentage}%</span>
                                        <img src={data.images} alt="dummyjson" className="w-full h-auto aspect-square" loading="lazy" />
                                        <span className="mt-3 text-sm font-medium text-black truncate">{data.title}</span>
                                        <span className="mt-1 mb-3 text-[10px] font-normal text-limedspruce truncate">{data.warrantyInformation}</span>
                                        <div className="flex items-end justify-between">
                                            <span className="text-lg font-normal text-limedspruce">${data.price}</span>
                                            <span className="mb-[6px] px-[4px] py-[2px] flex gap-[2px] text-[10px] font-normal text-black bg-yellow-200 rounded-sm">
                                                <FontAwesomeIcon icon={faStar} className="mt-[2px] text-[10px] text-yellow-500" />
                                                {Math.round(data.rating * 10) / 10}
                                            </span>
                                        </div>
                                    </a>
                                ))
                            )
                        }
                    </div>
                </div>
            </section>

            <section className="w-full bg-white">
                <div className="w-full max-w-screen-2xl m-auto mt-2 px-6 pb-10 md:px-12 lg:px-20">
                    <div className="w-full flex flex-wrap justify-center gap-4">
                        {
                            categories.map((data, index) => (
                                <p key={index} className="px-4 py-2 md:px-8 rounded-full bg-rubberduckyellow text-sm font-semibold text-electricindigo md:text-base">{data}</p>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="w-full bg-rubberduckyellow">
                <div className="w-full max-w-screen-2xl m-auto flex flex-col px-6 py-8 md:px-12 md:py-8 lg:px-20">
                    <h3 className="text-xl font-bold lg:text-2xl text-limedspruce text-center lg:tracking-widest">What People Says</h3>
                    <div className="w-full mt-4 pb-2 grid gap-4">
                        <Marquee pauseOnHover className="w-full flex rounded-sm">
                            {
                                reviews.slice(0, 5).map((data, index) => (
                                    <div key={index} className="w-[70vw] h-[160px] md:w-[280px] lg:w-[360px] me-4 px-6 py-4 flex flex-col rounded-sm bg-white text-limedspruce overflow-hidden">
                                        <div className="w-full">
                                            <p className="text-base font-semibold">{data.name}</p>
                                            <p className="mb-4 text-xs font-normal">@{data.username}</p>
                                        </div>
                                        {
                                            data.review.map((r, i) => (
                                                <div key={i} className="w-full flex flex-col gap-[2px]">
                                                    <p className="w-full text-sm font-semibold">{r.head}</p>
                                                    <p className="w-full text-xs font-normal">{r && r.body ? r.body.slice(0, 80) + '. . .' : ''}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </Marquee>
                        <Marquee pauseOnHover direction="right" className="w-full flex rounded-sm">
                            {
                                reviews.slice(5, 10).map((data, index) => (
                                    <div key={index} className="w-[70vw] h-[160px] md:w-[280px] lg:w-[360px] me-4 px-6 py-4 flex flex-col rounded-sm bg-white text-limedspruce overflow-hidden">
                                        <div className="w-full">
                                            <p className="text-base font-semibold">{data.name}</p>
                                            <p className="mb-4 text-xs font-normal">@{data.username}</p>
                                        </div>
                                        {
                                            data.review.map((r, i) => (
                                                <div key={i} className="w-full flex flex-col gap-[2px]">
                                                    <p className="w-full text-sm font-semibold">{r.head}</p>
                                                    <p className="w-full text-xs font-normal">{r && r.body ? r.body.slice(0, 80) + '. . .' : ''}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </Marquee>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white">
                <div className="w-full max-w-screen-2xl m-auto flex flex-col px-6 py-10 md:px-12 lg:px-20">
                    <div className="w-full px-4 py-8 md:py-12 flex flex-col items-center gap-4 md:gap-6 rounded-md bg-lavenderindigo">
                        <p className="text-sm md:text-2xl lg:text-3xl font-bold text-center text-white lg:tracking-widest">Subscribe Us To Get More Information<br />About Updated Products</p>
                        <form className="w-4/5 flex flex-col items-center gap-2 md:gap-4">
                            <input placeholder="Your email address" className="w-full max-w-[600px] h-8 md:h-12 px-2 text-xs md:text-lg text-center rounded-full" />
                            <button className="w-auto h-8 md:h-12 px-4 md:px-8 border-rubberduckyellow border-2 rounded-full bg-rubberduckyellow text-[10px] md:text-base font-semibold text-center text-limedspruce hover:bg-white">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home