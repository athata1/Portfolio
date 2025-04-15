import styles from "./about.module.css";
import { Instrument_Sans } from "next/font/google";
import { FaGithub } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";

import Image from "next/image";
import Data from "@data/data.json";

const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-instrument-sans",
  });

function About() {
  return (
    <div className={`${instrumentSans.className} ${styles.background}`}>
            <div className={styles.image}>
                <Image
                    src="/real_photo.jpg"
                    alt="Real Image of Person"
                    fill
                />

            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>About Me!</h1>
                <div className={styles.info}>{Data['name']} - {Data['title']}</div>
                <div className={styles.description}>{Data['description']}</div>
                <div className={styles.icons}>
                  <a href="https://github.com/athata1" className={styles.icon}>
                    <FaGithub size={50} color="#333"/>
                  </a>
                  <a href="https://www.linkedin.com/in/akhil-thata" className={styles.icon}>
                    <FiLinkedin size={50} color="#0a66c2"/>
                  </a>
                  <a href="https://docs.google.com/viewer?url=https://github.com/athata1/Portfolio/raw/main/data/AkhilThataRedactedResume.pdf" className={styles.icon}>
                    <BsFillFileEarmarkPersonFill size={50} color="#e87f5f"/>
                  </a>
                </div>
            </div>
    </div>
  )
}

export default About