import Header from '@/components/core/header/index.jsx'
import Footer from '@/components/core/footer/index.jsx'

function Layouts({children}){
    return(
        <section className="min-h-screen flex flex-col justify-between">
            <div className="w-full min-h-screen flex justify-center items-center">
                {children}
            </div>
            <Footer/>
            <Header/>
        </section>
    )
}

export default Layouts;
