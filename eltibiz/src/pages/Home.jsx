import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../styles/Home.css'
import '../styles/Footer.css'

function Home() {
    
    return (
    <>
        <Navbar />
        <div className='wrapper'>
        <section id="home">
            {/* <img src="../assets/cewe_eltibiz.png"/> */}
            <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-
            augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-
            cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.2.1769275626.1605867161"/>
            <div className="kolom">
                <p className="deskripsi">Belajar Programming #hanyadiEltibiz</p>
                <h2>Tetap Santuy, Tetap Ngopskuy</h2>
                <p>Senggol dong Eltibiz ni boyy</p>
                <p><a href="" className="tbl-pink">Pelajari Lebih Lanjut</a></p>
            </div>
        </section>
        </div>
        <Footer />
    </>
)
}

export default Home
