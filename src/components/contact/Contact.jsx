import React from 'react'
import styles from './contact.module.css'

function Contact() {
  return (
    <section className={`${styles.container}`} id='contact'>
      <h2 className={styles.title}>Let's Connect</h2>
      <div className={styles.content}>
        <div>
          <h3 className={styles.contactinfo}>Contact Information</h3>
          <div>Email :shivendrarathour1021@gamil.com</div>
          <div>Phone No. : +918375081890</div>
          <div>Location : Faridabad</div>
          <h3 className={styles.contactinfo}>Follow Me</h3>
          <div>
            <a href="https://www.linkedin.com/in/shivendra-kumar1/">LinkedIn</a>
            <a href="https://github.com/shivendra404">GitHub</a>
          </div>
        </div>
        <form className={`${styles.form}`} name='contactUs' netlify>

          <label
            htmlFor="name"
            className={`${styles.label}`}
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className={`${styles.input}`}
            placeholder="Enter your name"
          />


          <label
            htmlFor="email"
            className={`${styles.label}`}
          >
            Your Email
          </label>
          <input
            type="email"
            name="email"
            className={`${styles.input}`}
            placeholder="name@gmail.com"
          />


          <label
            htmlFor="message"
            className={`${styles.label}`}
          >
            Your Message
          </label>
          <textarea
            name="message"
            className={`${styles.textarea}`}
            placeholder="Write your message"
          ></textarea>


          <button type="submit" className={`${styles.button}`}>
            Submit
          </button>
        </form>
      </div>
    </section >
  )
}

export default Contact
