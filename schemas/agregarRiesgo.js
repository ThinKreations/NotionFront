import * as yup from 'yup';

export const schemaAgregarRiesgo = yup.object().shape({
    nombre: yup.string().required('Nombre requerido.'),
    impacto: yup.number('Tiene que ser un numero').default(0).min(1, 'Porcentaje inválido.').max(100, 'Porcentaje inválido.').integer('Tipo de dato no valido'),
    probabilidad: yup.number('Tiene que ser un numero').default(0).min(1, 'Porcentaje inválido.').max(100, 'Porcentaje inválido.').integer('Tipo de dato no valido')
});