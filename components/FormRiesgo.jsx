import React from "react";
import styles from "../styles/Home.module.css"
import { useState } from "react";
//import { agregarRiesgos } from "@/pages/api/riesgos";
import { schemaAgregarRiesgo } from "@/schemas/agregarRiesgo";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js'


export default function FormRiesgo() {

    const [riesgos, setRiesgos] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schemaAgregarRiesgo)
    });

    const onSubmit = (data) => {
        const { nombre, impacto, probabilidad } = data;
        const nuevoRiesgo = {
            nombre,
            impacto,
            probabilidad
        };
        setRiesgos(prevRiesgos => [...prevRiesgos, nuevoRiesgo]);
        console.log(data)
    };

    const getData = (riesgos) => {
        
    }

    //console.log(riesgos);

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h3>Registra el riesgo.</h3>
                <br/>
                <label for="nombre" className={styles.lblRiesgo}>Nombre del riesgo</label>
                <input id="nombre" className={styles.inputRiesgo} {...register('nombre')}/>
                <p className={styles.errors}>{errors.nombre?.message}</p>
                <br/>
                <label for="impacto" className={styles.lblRiesgo}>Impacto</label>
                <input id="impacto" className={styles.inputRiesgo} {...register('impacto')}/>
                <p className={styles.errors}>{errors.impacto?.message}</p>
                <br/>
                <label for="probabilidad" className={styles.lblRiesgo}>Probabilidad</label>
                <input id="probabilidad" className={styles.inputRiesgo} {...register('probabilidad')}/>
                <p className={styles.errors}>{errors.probabilidad?.message}</p>
                <button type="submit" className={styles.btnAgregar}>Agregar</button>
            </form>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                {riesgos.map((item) => (
                    <tr key={item.id}>
                    <td className={styles.td}>ID</td>
                    <td className={styles.td}>{item.nombre}</td>
                    <td className={styles.td}>{item.impacto}</td>
                    <td className={styles.td}>{item.probabilidad}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <center>
                <button className={styles.btnAgregar}>Calcular</button>
            </center>
            </form>
        </>
    )
    
}