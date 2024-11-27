import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../util'

const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl('about/aboutImage.png')} alt="no img" className={styles.aboutImage} />
                <ul className={styles.aboutItems} >
                    <li className={styles.aboutItem}><img src={getImageUrl('about/uiIcon.png')} alt="" />
                        <div>
                            <h3 className={styles.aboutItemText}>Frantend Developer</h3>
                            <p>I'm a frantend developer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, officiis!</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImageUrl('about/cursorIcon.png')} alt="" />
                        <div>
                            <h3 className={styles.aboutItemText}>Backend Developer</h3>
                            <p>I'm a backend developer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, officiis!</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImageUrl('about/serverIcon.png')} alt="" />
                        <div>
                            <h3 className={styles.aboutItemText}>Salenium Testing</h3>
                            <p>I'm a salenium tester Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, officiis!</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImageUrl('about/serverIcon.png')} alt="" />
                        <div>
                            <h3 className={styles.aboutItemText}>UI/UX Design</h3>
                            <p>I'm a UI/UX designer Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, officiis!</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
