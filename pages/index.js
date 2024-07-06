import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import MainHead from "@/components/MainHead";
import FormRiesgo from "@/components/FormRiesgo";
import styles from "@/styles/Home.module.css";
import MainHeader from "@/components/MainHeader";
const inter = Inter({ subsets: ["latin"] });
import TableActuales from "@/components/TableActuales";
import TableTotal from "@/components/TableTotal";
import DaFooter from "@/components/DaFooter";

export default function Home() {

  return (
    <>
      <MainHead title={'RiesgoTotal'}/>
      <MainHeader/>
      <div className={styles.container}>
      <center><h1 className={styles.H1}>Calcular Riesgo del Proyecto</h1></center>
        <FormRiesgo/>
        <hr style={{width:"90vw", margin:"25px", border: "1px solid rgb(200,200,200)"}}/>
        <TableTotal/>
      </div>
      <DaFooter/>
    </>
  );
}
