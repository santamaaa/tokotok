import articles from '../assets/json/articles.json'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog = () => {
    return (
        <>
            <Navbar />
            
            <section className="w-full bg-white">
                <div className="w-full max-w-screen-2xl m-auto px-6 py-6 md:px-16 md:py-10 lg:px-20">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {
                            articles.sort((a, b) => new Date(b.date) - new Date(a.date)).map((data, index) => (
                                <a href={`/article-${data.id}`} key={index} className="w-full px-6 py-6 lg:px-12 flex flex-col md:justify-between rounded-lg shadow-md shadow-gray-300 bg-ghostwhite text-limedspruce hover:shadow-inner">
                                    <p className="text-lg font-semibold">{data.title}</p>
                                    <p className="mt-2 mb-4 text-sm font-normal">{data.content}</p>
                                    <div className="flex justify-between text-sm font-semibold">
                                        <p>{data.author}</p>
                                        <p>{data.date}</p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Blog