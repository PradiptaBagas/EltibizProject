import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>eltibiz</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Beranda</a></li>
                    <li><a href="#profil">Profil</a></li>
                    <li><a href="#program">Program</a></li>
                    <li><a href="#informasi">Informasi</a></li>
                    <li><a href="#artikel">Artikel</a></li>
                    <li><a href="#kontak">Kontak</a></li>
                    <li><a href="" className="tbl-biru">Register</a></li>
                </ul>
            </div>
        </div>
    </nav>
)
}

export default Navbar
