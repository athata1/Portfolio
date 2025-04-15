import styles from "./intro.module.css";
import { Instrument_Sans } from "next/font/google";
import Image from "next/image";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-instrument-sans",
});

function Intro() {
  return (
    <div className={`${instrumentSans.className} ${styles.background}`}>
      <div className={styles.image}>
        <Image
          src="/face_icon.png" 
          alt="Simple cartoon image of my face" 
          fill
        />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Akhil Thata</h1>
        <p className={styles.description}>Web/iOS Developer</p>
      </div>
    </div>
  );
}

export default Intro;
