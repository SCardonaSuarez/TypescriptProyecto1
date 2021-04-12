class Estudiante {
    nombre: string;
    email: string;
}

const notas: number[] = [];
let promedio: number;

class Tareas {
    nombre: string
    // fecha_inicio: Date
    fechaInicio: number
    descripcion: string
    status: Status

}

enum Status {
    pendiente,
    en_proceso,
    terminado,
    cancelada,
}

console.log(Status.pendiente)

export let tareasPendientes: Tareas[] = [

    {
        nombre: 'fisica',
        // fecha_inicio: new Date('2021-04-05'),

        fechaInicio: 15012020,
        descripcion: 'fisica cuantica',
        status: Status.pendiente
    },
    {
        nombre: 'fisica',
        fechaInicio: 15012020,
        descripcion: 'fisica cuantica',
        status: Status.cancelada
    },
    {
        nombre: 'fisica',
        fechaInicio: 15012020,
        descripcion: 'fisica cuantica',
        status: Status.terminado
    }

]

let nombreEstudiante: Estudiante[] = [

    {
        nombre: 'topacio',
        email: 'topacio@gmail.com'
    },
]

let estudiante: Estudiante = {

    nombre: 'camila',
    email: 'camila@gmai.com'
}

