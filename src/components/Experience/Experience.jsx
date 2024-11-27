import React from 'react'
import skills from '../../data/skills.json'
import { getImageUrl } from '../../util'
import styles from './Experience.module.css'


const Experience = () => {
    return (
        <section className={styles.container} id='skills'>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {
                        skills.map((skill, id) => {
                            return (<div className={styles.skill} key={id}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <div style={{ marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p className={styles.skillname}>{skill.title}</p>
                                        <p className={styles.percent}>{skill.percent}%</p>
                                    </div>
                                    <div className={styles.graph}><div style={{ width: `${skill.percent * 2.4}px` }} /></div>
                                </div>
                            </div>)
                        })

                    }
                </div>
                <ul></ul>
            </div>

        </section>
    )
}

export default Experience
