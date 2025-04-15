import styles from "./about.module.css";
import { Instrument_Sans } from "next/font/google";
import Image from "next/image";
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
                <div className={styles.description}></div>
            </div>
    </div>
  )
}

export default About