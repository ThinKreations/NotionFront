export const agregarRiesgos = async (riesgos) => {
    const res = await fetch(`http://notion-backend-production.up.railway.app/api/riesgos/calculate`, {
        method: 'POST',
        mode: 'cors',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(riesgo)
    })
    const resJSON = await res.json();
    return {resJSON, res}
}

