import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutheaderbg from '../assets/images/about-bg.jpg'
import avatar1 from '../assets/images/avatar1.jpg'
import avatar2 from '../assets/images/avatar2.jpg'
import avatar3 from '../assets/images/avatar3.jpg'
import avatar4 from '../assets/images/avatar4.jpg'
import avatar5 from '../assets/images/avatar5.jpg'

const About = () => {
    return (
        <>
            <Navbar />

            <section className="w-full bg-white fixed top-[52px] lg:top-[64px] z-0">
                <div className="w-full">
                    <img src={aboutheaderbg} alt="tokotok illustration" className="w-full h-[50vh] object-cover" />
                </div>
            </section>

            <div className="w-full relative top-[calc(50vh-76px)] md:top-[calc(50vh-88px)] z-10">
                <section className="w-full bg-white">
                    <div className="w-full max-w-screen-2xl m-auto px-12 py-10 md:px-16 lg:px-20 grid place-items-center">
                        <p className="md:w-4/5 text-sm md:text-base font-semibold text-limedspruce text-center tracking-wide leading-8 md:tracking-widest md:leading-10">Founded in 2020, TokoTok is rapidly growing with a commitment to providing high-quality products and excellent customer service. Our vision is to become a trusted online store and the community's first choice for daily needs. We offer a wide selection of products, a user-friendly interface, 24/7 customer service, and secure, flexible payment methods. TokoTok strives to be a reliable online shopping partner for everyone.</p>
                    </div>
                </section>

                <section className="w-full bg-white">
                    <div className="w-full max-w-screen-2xl m-auto px-6 py-10 md:px-12 lg:px-20 grid place-items-center gap-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-limedspruce text-center tracking-widest">Our Team</h1>
                        <div className="w-full flex flex-col gap-8">
                            <div className="w-full">
                                <div className="w-full flex flex-col items-center gap-2">
                                    <img src={avatar1} alt="tokotok illustration" loading="lazy" className="w-28 md:w-36 aspect-square rounded-full" />
                                    <div className="text-limedspruce text-center">
                                        <p className="text-base md:text-lg font-semibold">Stanislaus Barrett</p>
                                        <p className="text-xs md:text-sm font-normal">CEO & Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 md:flex md:justify-between lg:justify-center lg:gap-[200px]">
                                <div className="w-full md:w-[300px] flex flex-col items-center gap-2">
                                    <img src={avatar2} alt="tokotok illustration" loading="lazy" className="w-24 md:w-32 aspect-square rounded-full" />
                                    <div className="text-limedspruce text-center">
                                        <p className="text-sm md:text-base font-semibold">Kobie Dixwell</p>
                                        <p className="text-xs font-normal">COO & Founder</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-[300px] flex flex-col items-center gap-2">
                                    <img src={avatar3} alt="tokotok illustration" loading="lazy" className="w-24 md:w-32 aspect-square rounded-full" />
                                    <div className="text-limedspruce text-center">
                                        <p className="text-sm md:text-base font-semibold">Ian Haws</p>
                                        <p className="text-xs font-normal">CTO & Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 md:flex md:justify-center">
                                <div className="w-full md:w-[200px] lg:w-[300px] flex flex-col items-center gap-2">
                                    <img src={avatar4} alt="tokotok illustration" loading="lazy" className="w-24 md:w-28 aspect-square rounded-full" />
                                    <div className="text-limedspruce text-center">
                                        <p className="text-sm md:text-base font-semibold">Lissa Burn</p>
                                        <p className="text-xs font-normal">CFO</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-[200px] lg:w-[300px] flex flex-col items-center gap-2">
                                    <img src={avatar5} alt="tokotok illustration" loading="lazy" className="w-24 md:w-28 aspect-square rounded-full" />
                                    <div className="text-limedspruce text-center">
                                        <p className="text-sm md:text-base font-semibold">Shirley Linley</p>
                                        <p className="text-xs font-normal">CMO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-white">
                    <div className="w-full max-w-screen-2xl m-auto px-6 py-10 md:px-12 lg:px-20">
                        <div className="py-4 md:py-6 rounded-t-xl bg-rubberduckyellow">
                            <h1 className="text-3xl md:text-4xl font-bold text-limedspruce text-center tracking-widest">Our Journey</h1>
                        </div>
                        <div className="w-full bg-yellow-200">
                            <VerticalTimeline lineColor="#37474F">
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#9951ff', color: '#FFFFFF' }}
                                    contentArrowStyle={{ borderRight: '10px solid #9951ff' }}
                                    icon=''
                                    iconStyle={{ background: '#9951ff', color: '#FFFFFF' }}
                                >
                                    <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold">2020 : Launch Year</h3>
                                    <h4 className="vertical-timeline-element-subtitle pt-2 pb-3 text-base md:text-lg font-semibold">TokoTok is Founded</h4>
                                    <p className="text xs">TokoTok was established, entering the online retail market with a focus on delivering high-quality products and exceptional customer service. The platform started with a limited range of products but quickly gained popularity due to its commitment to customer satisfaction.</p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#9951ff', color: '#FFFFFF' }}
                                    contentArrowStyle={{ borderRight: '10px solid #9951ff' }}
                                    iconStyle={{ background: '#9951ff', color: '#FFFFFF' }}
                                >
                                    <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold">2021: Expansion</h3>
                                    <h4 className="vertical-timeline-element-subtitle pt-2 pb-3 text-base md:text-lg font-semibold">Broadening Product Range</h4>
                                    <p className="text xs">TokoTok expanded its product offerings by adding new categories such as electronics, home appliances, and fashion. The company also enhanced its website by introducing advanced search and filtering options to improve the shopping experience.</p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#9951ff', color: '#FFFFFF' }}
                                    contentArrowStyle={{ borderRight: '10px solid #9951ff' }}
                                    iconStyle={{ background: '#9951ff', color: '#FFFFFF' }}
                                >
                                    <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold">2022: Going Mobile</h3>
                                    <h4 className="vertical-timeline-element-subtitle pt-2 pb-3 text-base md:text-lg font-semibold">Mobile App Launch</h4>
                                    <p className="text xs">TokoTok launched its mobile app, making shopping even more accessible to users on smartphones. This year also saw the introduction of installment payment options and special promotions for loyal customers, further driving growth.</p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#9951ff', color: '#FFFFFF' }}
                                    contentArrowStyle={{ borderRight: '10px solid #9951ff' }}
                                    iconStyle={{ background: '#9951ff', color: '#FFFFFF' }}
                                >
                                    <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold">2023: Modernization</h3>
                                    <h4 className="vertical-timeline-element-subtitle pt-2 pb-3 text-base md:text-lg font-semibold">Website Revamp and Personalization</h4>
                                    <p className="text xs">The TokoTok platform underwent a major redesign, featuring a modern user interface and personalized product recommendations. A loyalty program was also introduced to reward frequent shoppers, enhancing customer retention.</p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#9951ff', color: '#FFFFFF' }}
                                    contentArrowStyle={{ borderRight: '10px solid #9951ff' }}
                                    iconStyle={{ background: '#9951ff', color: '#FFFFFF' }}
                                >
                                    <h3 className="vertical-timeline-element-title text-lg md:text-xl font-bold">2024: Global Reach</h3>
                                    <h4 className="vertical-timeline-element-subtitle pt-2 pb-3 text-base md:text-lg font-semibold">International Shipping and Enhanced Customer Service</h4>
                                    <p className="text xs">TokoTok expanded its services internationally, offering shipping to customers outside of the country. Additionally, a live chat feature was introduced, providing quicker and more responsive customer support.</p>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </div>
                        <div className="py-4 md:py-6 rounded-b-xl bg-rubberduckyellow">
                            <h2 className="text-lg md:text-xl px-6 font-bold text-limedspruce text-center tracking-widest">Continues to improve</h2>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}

export default About