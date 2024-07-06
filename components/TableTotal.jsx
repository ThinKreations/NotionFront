import styles from "../styles/Home.module.css"
export default function TableTotal(){
    return (
        <>
            <h2 style={{marginTop:"25px"}}>Riesgo total del proyecto:</h2>
            <table className={styles.table}>
                <tr>
                    <td className={styles.topTD}>#ID</td>
                    <td className={styles.topTD}>Nombre</td>
                    <td className={styles.topTD}>Impacto %</td>
                    <td className={styles.topTD}>Probabilidad %</td>
                </tr>
                {/*
                aquí haré un .map para obtener los riesgos actuales que vaya registrando y así
                */}
                <tr>
                    <td className={styles.td}>1</td>
                    <td className={styles.td}>Yo</td>
                    <td className={styles.td}>100</td>
                    <td className={styles.td}>100</td>
                </tr>

            </table>
        </>
    )
}