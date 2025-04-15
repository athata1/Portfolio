import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/intro";
import About from "@/components/about";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}
