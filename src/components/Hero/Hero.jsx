import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../util'


const Hero = () => {
    return (
        <section className={styles.container} id='home'>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am shivendra</h1>
                <p className={styles.description}>I'm a fresher full-stack developer with a strong foundation in React.js and Node.js. Eager to learn and contribute—reach out if you'd like to connect!</p>
                <a href={getImageUrl('hero/resume.pdf')} download="My_Resume.pdf" className={styles.contactBtn}>
                    <button>Download Resume</button>
                </a>
            </div>
            <div className={styles.myImage}> <img src={getImageUrl('hero/shivendra.jpg')} alt="" /></div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero
