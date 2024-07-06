import styles from "../styles/Home.module.css"
import Image from "next/image"
import logo from "../src/notionLogo.png"

export default function (){
    return (
        <header className={styles.header}>
            <center>
                <Image src={logo} className={styles.logo}/>
            </center>
        </header>
    )
}