import {getImageUrl} from "../../utils.js";
import styles from "./About.module.css"
export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/work_no_bg.png")} alt="Working Style" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="ServerIcon"/>
                        <div className={styles.aboutItemText}>
                            <h3>BackEnd Development</h3>
                            <p>I specialize in building scalable, high-performance backend systems with a focus on microservices, distributed computing, and cloud-based solutions. My expertise includes designing RESTful APIs, database optimization, message queues, and backend infrastructure for real-time applications</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png") } alt="ServerIcon"/>
                        <div className={styles.aboutItemText}>
                            <h3>AI Engineer</h3>
                            <p>Expertise in AI-powered system development, integrating machine learning models, natural language processing, and AI-driven automation into real-world applications. Skilled in model deployment, prompt engineering, data preprocessing, and building scalable AI infrastructure with cloud-based solutions</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="ServerIcon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Computer Architecture Engineer</h3>
                            <p>I have a strong background in computer architecture, system-level programming, and low-level software development, with experience in instruction set simulation, system security, and performance optimization. My expertise includes processor modeling, assembly-level debugging, and memory management techniques</p>
                        </div>
                    </li>
                </ul>
        </div>
    </section>
    );
};
