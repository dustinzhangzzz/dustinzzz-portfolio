import {getImageUrl} from "../../utils.js";
import styles from "./Hero.module.css"
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Dustin Zhang</h1>
                <p className={styles.description}>
                    Hi, I’m Xiaoxuan (Dustin) Zhang, a software engineer specializing in backend development, cloud computing, and scalable systems. I currently work at Mathzoos, an online education platform, with expertise in Python, Java, and AWS. I’m passionate about designing efficient architectures and solving complex system challenges. Beyond work, I love EDM and enjoy developing applications that enhance music experiences. Feel free to connect!</p>
                <a className={styles.contactBtn} href = "mailto:dustinzhangzzz@gmail.com">Contact Me</a>
            </div>
            <img src={getImageUrl("hero/profile_pic.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}