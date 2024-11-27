import React from 'react'
import { getImageUrl } from '../../util'
import styles from './ProjectCard.module.css'

function ProjectCard({ title, description, imageSrc, skills, demo, src }) {

    console.log(skills);

    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={`iamge of ${title}`} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return <li key={id} className={styles.skill}> {skill}</li>
                })}
            </ul>
            <div>
                <a href={demo} className={styles.link}>Demo </a>
                {/* <a href={src} className={styles.link}>Source</a> */}
            </div>
        </div>
    )
}

export default ProjectCard
