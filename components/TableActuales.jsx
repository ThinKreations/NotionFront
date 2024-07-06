import React, { useState } from "react";
import styles from "../styles/Home.module.css";

function TableActualesComponent() {


  return (
    <>
      <h2 style={{ marginTop: "25px" }}>Riesgos Actuales:</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.topTD}>#ID</th>
            <th className={styles.topTD}>Nombre</th>
            <th className={styles.topTD}>Impacto %</th>
            <th className={styles.topTD}>Probabilidad %</th>
            <th className={styles.topTD} style={{ backgroundColor: "transparent" }}>‎</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className={styles.td}>1</td>
              <td className={styles.td}>Yo</td>
              <td className={styles.td}>100</td>
              <td className={styles.td}>100</td>
            </tr>
        </tbody>
      </table>
      <center>
        <button className={styles.btnAgregar}>Calcular</button>
      </center>
    </>
  );
}

export default function TableActuales() {
  return <TableActualesComponent />;
}
