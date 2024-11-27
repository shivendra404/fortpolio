import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../util';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [hidden, setHidden] = useState(false);
    const showMenu = () => {
        setMenuOpen((prev) => !prev)
    }
    let hideTimeout;


    const showNavbar = (e) => {
        setHidden(false);
        if (hideTimeout) clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => setHidden(true), 3000);
    };

    useEffect(() => {

        window.addEventListener("scroll", (e) => { showNavbar(e) });
        window.addEventListener("mousemove", (e) => { showNavbar(e) });




        return () => {
            window.removeEventListener("scroll", showNavbar);
            window.removeEventListener("mousemove", showNavbar);
        };
    }, []);


    return (
        <nav className={`${styles.navbar} ${hidden ? styles.hidden : ''}`}>
            <a href="/" className={styles.title}>Wev Developer</a>
            <div className={styles.menu}>
                <div className={styles.menuBtn} onClick={showMenu}>
                    {menuOpen ? <img src={getImageUrl('nav/closeIcon.png')} alt="" /> :
                        <img src={getImageUrl('nav/menuIcon.png')} alt="" />}
                </div>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    <li><a href="#home" onClick={showMenu}>Home</a></li>
                    <li><a href="#about" onClick={showMenu}>About</a></li>
                    <li><a href="#skills" onClick={showMenu}>Skills</a></li>
                    <li><a href="#project" onClick={showMenu}>Project</a></li>
                    <li><a href="#contact" onClick={showMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
