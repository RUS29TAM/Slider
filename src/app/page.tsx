import styles from "./page.module.css";
import Slider from "@/slider/slider";
import './globals.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <Slider />
        </main>
    );
}
